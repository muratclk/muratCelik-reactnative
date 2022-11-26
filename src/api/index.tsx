import axios from 'axios';

const BASE_URL = 'https://upayments-studycase-api.herokuapp.com/api/';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhc2hrbEB5YW5kZXguY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL211cmF0Y2xrIiwiaWF0IjoxNjY5NDY3MTM1LCJleHAiOjE2Njk4OTkxMzV9.esPPWlI4aElX3cVgj6iiw_pckOp0ZoS1kh1CS6lLKl4';

axios.defaults.baseURL = BASE_URL;

const getProducts = () => axios.get('/products');
const getProductWithId = (id: string) => axios.get(`/products/${id}`);
const createProduct = (body: any) => axios.post('/products', body);
const getCategories = () => axios.get('/categories');
const getCategoryById = (id: string) => axios.get(`/categories/${id}`);

export {
  getProducts,
  getProductWithId,
  createProduct,
  getCategories,
  getCategoryById,
};
