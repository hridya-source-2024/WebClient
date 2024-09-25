import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import SalesList from './components/SalesList';
import AddSales from './components/AddSales';
import MainPage from './components/MainPage';
import ViewSale from './components/ViewSale';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/add-product" element={<ProductForm />} />
                <Route path="/edit-product/:id" element={<ProductForm />} />
                <Route path="/sales" element={<SalesList />} />
                <Route path="/add-sale" element={<AddSales />} />
                <Route path="/view-sale/:saleId" element={<ViewSale />} /> 
            </Routes>
        </Router>
    );
}

export default App;

