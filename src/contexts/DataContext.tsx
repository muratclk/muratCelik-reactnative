import React, {useState, useMemo, createContext, useEffect} from 'react';
import {getCategories, getProducts} from '../api';
import {ICategory, IProduct} from '../types';

const DataContext = createContext<any>(null);

export const DataProvider = ({children}: {children: any}) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((p: IProduct) =>
        selectedCategory ? p.category === selectedCategory.name : true,
      ),
    );
  }, [selectedCategory, products]);

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

  const SelectCategory = async (category: any) => {
    setSelectedCategory(category);
  };

  const values = useMemo(
    () => ({
      products,
      LoadProducts,
      categories,
      LoadCategories,
      selectedCategory,
      SelectCategory,
      filteredProducts,
    }),
    [products, categories, selectedCategory, filteredProducts],
  );

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;
