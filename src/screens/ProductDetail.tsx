import {StyleSheet, Text, Image, View, ScrollView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const ProductDetail = ({route}: Props) => {
  const {item} = route.params;

  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.container}>
      <Header />
      <View style={styles.imageContainer}>
        <Image
          source={{uri: item.avatar || 'https://picsum.photos/200/300'}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <ScrollView style={styles.descriptionContainer}>
          <Text style={styles.description}>{item.description}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  image: {width: '100%', height: '100%'},
  contentContainer: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',
  },
  name: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingRight: 10,
    flexWrap: 'wrap',
    flex: 1,
  },
  price: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  descriptionContainer: {marginVertical: 20},
  description: {color: '#fff'},
});
