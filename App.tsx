import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Products';
import ProductDetailScreen from './src/screens/ProductDetail';
import CreateProductScreen from './src/screens/CreateProduct';
import {DataProvider} from './src/contexts/DataContext';
import {IProduct} from './src/types';

export type RootStackParamList = {
  Products: undefined;
  ProductDetail: {item: IProduct};
  CreateProduct: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Products" component={HomeScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="CreateProduct" component={CreateProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
