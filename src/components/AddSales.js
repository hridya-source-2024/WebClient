import React, { useState } from 'react';
import { createSale } from '../Services/salesService';
import { useNavigate } from 'react-router-dom';

const AddSales = () => {
    const [sales, setSales] = useState([{ productId: '', quantity: '' }]);
    const navigate = useNavigate();

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedSales = [...sales];
        updatedSales[index][name] = value;
        setSales(updatedSales);
    };

    const addSale = () => {
        setSales([...sales, { productId: '', quantity: '' }]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const saleData = {
            SaleTransactions: sales.map(sale => ({
                ProductId: parseInt(sale.productId), 
                Quantity: parseInt(sale.quantity),
            })),
        };

        try {
            const result = await createSale(saleData); 
            console.log(`Sale successfully recorded:`, result.data);
            navigate('/sales'); 
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="container-form">
            <h1>Enter Sale Transactions</h1>
            <form onSubmit={handleSubmit}>
                {sales.map((sale, index) => (
                    <div key={index} className="form-group">
                        <label>Product ID:</label>
                        <input
                            type="text"
                            name="productId"
                            value={sale.productId}
                            onChange={(e) => handleInputChange(index, e)}
                            placeholder="Product ID"
                            required
                        />
                        <label>Quantity:</label>
                        <input
                            type="text"
                            name="quantity"
                            value={sale.quantity}
                            onChange={(e) => handleInputChange(index, e)}
                            placeholder="Quantity"
                            required
                        />
                    </div>
                ))}
                <div className="form-group button-group">
                    <button type="button" onClick={addSale} className="add-button">
                        Add Another Product
                    </button>
                    <button type="submit" className="save-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddSales;










