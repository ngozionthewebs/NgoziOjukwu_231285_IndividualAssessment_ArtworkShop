import axios from 'axios';

const API_URL = 'http://localhost:5001'; 

const ApiService = {
  getProducts() {
    return axios.get(`${API_URL}/products`);
  },
  getProductById(id) {
    return axios.get(`${API_URL}/products/${id}`);
  },
  createProduct(productData) {
    return axios.post(`${API_URL}/products`, productData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  updateProduct(id, productData) {
    return axios.put(`${API_URL}/products/${id}`, productData);
  },
  deleteProduct(id) {
    return axios.delete(`${API_URL}/products/${id}`);
  }
};

export default ApiService;
