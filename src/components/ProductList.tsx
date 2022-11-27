import {useNavigation} from '@react-navigation/native';
import React, {useContext, useRef, useEffect} from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import DataContext from '../contexts/DataContext';
import {IProduct} from '../types';

const ProductList = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const productListRef = useRef<FlatList>(null);
  const context = useContext(DataContext);
  const {filteredProducts} = context;

  useEffect(() => {
    if (productListRef?.current && filteredProducts.length > 0) {
      productListRef?.current?.scrollToIndex({index: 0});
    }
  }, [filteredProducts]);

  const renderItem = ({item}: {item: IProduct}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ProductDetail', {item})}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.avatar}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="middle">
          {item.name}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <Image
            source={require('../assets/images/penIcon.png')}
            style={styles.editStyle}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      ref={productListRef}
      data={filteredProducts}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => item._id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#fff',
    marginVertical: 8,

    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,

    elevation: 9,
    flex: 1 / 2,
    marginHorizontal: 5,
  },
  imageContainer: {alignItems: 'center'},
  content: {
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  priceContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  title: {
    fontSize: 13,
    color: '#fff',
    alignContent: 'flex-start',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  editStyle: {height: 15, width: 15},
});

export default ProductList;
