// src/components/Products.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../Services/productService';
import '../Common.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await getProducts();
    setProducts(result.data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      await deleteProduct(id);
      loadProducts(); // Reload products after delete
    }
  };

return (
    <div className="container">
      <div className="header">
        <h1>Product List</h1>
        <Link to="/add-product" className="add-button">Add Product</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Tax Rate</th>
            <th>Product Type</th>
            <th>isImported</th>
            <th>Import Duty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.taxRate}</td>
              <td>{product.productType}</td>
              <td>{String(product.isImported)}</td>
              <td>{String(product.importDuty)}</td>
              {/* <td>
                <Link to={`/edit-product/${product.id}`}>Edit</Link>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td> */}
              <td>
                <Button 
                  variant="outlined" 
                  endIcon={<EditIcon />} 
                  component={Link} 
                  to={`/edit-product/${product.id}`}
                  sx={{ marginRight: 1 }}
                >
                  Edit
                </Button>
                <Button 
                  variant="outlined" 
                  endIcon={<DeleteIcon />} 
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
