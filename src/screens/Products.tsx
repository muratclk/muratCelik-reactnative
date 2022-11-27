import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import DataContext from '../contexts/DataContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Products'>;

const Home = ({navigation}: Props) => {
  const context = useContext(DataContext);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    context
      .LoadCategories()
      .then(() => context.LoadProducts())
      .then(() => setloading(false));

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>UPayment Store</Text>
        <Image
          style={styles.searchImage}
          source={require('../assets/images/searchIcon.png')}
        />
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#000" />
          <Text>Loading</Text>
        </View>
      ) : (
        <>
          <CategoryList />
          <ProductList />
        </>
      )}
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => navigation.navigate('CreateProduct')}>
        <Image
          style={styles.plusImage}
          source={require('../assets/images/plusIcon.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  headerText: {fontSize: 20},
  searchImage: {width: 30, height: 30},
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusImage: {width: 30, height: 30},
});

export default Home;
