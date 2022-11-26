import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import DataContext from '../contexts/DataContext';

const Home = () => {
  const context = useContext(DataContext);
  const {products, categories} = context;
  const [loading, setloading] = useState(true);

  useEffect(() => {
    context
      .LoadCategories()
      .then(() => context.LoadProducts())
      .then(() => setloading(false));

    return () => {};
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text>Products , {JSON.stringify(products)} </Text>
          <Text>Categories , {JSON.stringify(categories)} </Text>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
