import React, {useContext} from 'react';
import {FlatList, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import DataContext from '../contexts/DataContext';

const CategoryList = () => {
  const context = useContext(DataContext);
  const {categories, selectedCategory} = context;

  const renderItem = ({item}: {item: any}) =>
    selectedCategory && selectedCategory._id === item._id ? (
      <TouchableOpacity
        style={styles.selectedCategory}
        onPress={() => context.SelectCategory(null)}>
        <Text style={styles.selectedCategoryText}>{item.name}</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={styles.item}
        onPress={() => context.SelectCategory(item)}>
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
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,

    elevation: 9,
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
  selectedCategory: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,

    elevation: 9,
  },
  selectedCategoryText: {
    fontSize: 16,
    color: '#000',
  },
});

export default CategoryList;
