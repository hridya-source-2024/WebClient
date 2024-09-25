import axios from 'axios';

const API_URL = 'https://localhost:7045/api'; // Base URL for API

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const getSales = () => {
    return axios.get(`${API_URL}/saletransactions`);
};

export const createSale = (sale) => {
    return axios.post(`${API_URL}/sale`, sale, config); 
};

export const getSaleById = (id) => {
    return axios.get(`${API_URL}/salebyid/${id}`);
};

