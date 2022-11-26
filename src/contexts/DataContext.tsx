import React, {useState, useMemo, createContext} from 'react';
import {getCategories, getProducts} from '../api';

const DataContext = createContext<any>(null);

export const DataProvider = ({children}: {children: any}) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  const LoadProducts = async () => {
    try {
      const res = await getProducts();

      if (res.data && res.data.products) {
        setProducts(res.data.products);
      } else {
        throw new Error('No products found');
      }
    } catch (error) {
      console.log('Error on Loading Products', error);
    }
  };

  const LoadCategories = async () => {
    try {
      const res = await getCategories();

      if (res.data && res.data.categories) {
        setCategories(res.data.categories);
      } else {
        throw new Error('No categories found');
      }
    } catch (error) {
      console.log('Error on Loading Categories', error);
    }
  };

  const values = useMemo(
    () => ({
      products,
      LoadProducts,
      categories,
      LoadCategories,
    }),
    [categories, products],
  );

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;
