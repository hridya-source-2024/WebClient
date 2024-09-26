import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, createProduct, updateProduct } from '../Services/productService';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    taxRate: '',
    productType: 'essential',
    isImported: false,
  });
  const { id } = useParams(); // ID param from the URL
  const navigate = useNavigate();
  const isEdit = Boolean(id); // To check the form is in edit

  useEffect(() => {
    if (isEdit) {
      loadProduct();
    }
  }, []);

  const loadProduct = async () => {
    try {
      const result = await getProductById(id);
      setProduct(result.data);
    } catch (error) {
      console.error("Failed to load product:", error);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await updateProduct(id, product);
      } else {
        await createProduct(product); 
      }
      navigate('/products');
    } catch (error) {
      console.error("Failed to save product:", error);
    }
  };

  return (
    <div className="container-form">
      <h2>{isEdit ? 'Edit' : 'Add'} Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
        </div>
        <div className="form-group">
          <label>Tax Rate:</label>
          <input
            type="number"
            name="taxRate"
            value={product.taxRate}
            onChange={handleChange}
            placeholder="Tax Rate"
            required
          />
        </div>
        <div className="form-group">
          <label>Product Type:</label>
          <select
            name="productType"
            value={product.productType}
            onChange={handleChange}
          >
            <option value="essential">Essential</option>
            <option value="non-essential">Non-Essential</option>
          </select>
        </div>
        <div className="form-group">
          <label>Import Duty:</label>
          <input
            type="number"
            name="importduty"
            value={product.importDuty}
            onChange={handleChange}
            placeholder="Import Duty"
            required
            step="0.01"
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="isImported"
              checked={product.isImported}
              onChange={(e) => setProduct({ ...product, isImported: e.target.checked })}
            />
            Imported
          </label>
        </div>
        <div className="form-group button-group">
          <button type="button" onClick={() => navigate('/products')} className="cancel-button">Cancel</button>
          <button type="submit" className="save-button">
            {isEdit ? 'Update' : 'Add'} Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
