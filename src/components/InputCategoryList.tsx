import React, {useContext} from 'react';
import {FlatList, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import DataContext from '../contexts/DataContext';

const InputCategoryList = ({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (category: string) => void;
}) => {
  const context = useContext(DataContext);
  const {categories} = context;

  const renderItem = ({item}: {item: any}) =>
    value && value === item.name ? (
      <TouchableOpacity
        style={styles.selectedCategory}
        onPress={() => handleChange('')}>
        <Text style={styles.selectedCategoryText}>{item.name}</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleChange(item.name)}>
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  selectedCategory: {
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 8,
    borderRadius: 10,
  },
  selectedCategoryText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default InputCategoryList;
