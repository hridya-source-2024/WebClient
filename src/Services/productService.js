import axios from 'axios';

const API_URL = 'https://localhost:7045/api'; // Base URL for API

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const getProducts = () => {
    return axios.get(`${API_URL}/products`);
};

export const getProductById = (id) => {
    return axios.get(`${API_URL}/products/${id}`);
};

export const createProduct = (product) => {
    return axios.post(`${API_URL}/products`, product, config); 
};

export const updateProduct = (id, product) => {
    return axios.put(`${API_URL}/products/${id}`, product, config);
};

export const deleteProduct = (id) => {
    return axios.delete(`${API_URL}/products/${id}`);
};
