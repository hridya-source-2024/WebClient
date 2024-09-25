import React, { useState } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import { createSale } from '../Services/salesService'; // Import the createSale function

const AddSales = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [saleDate, setSaleDate] = useState(new Date().toISOString().split("T")[0]); // Default to today

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saleData = {
      invoiceNumber,
      totalAmount,
      saleDate,
    };

    try {
      await createSale(saleData); // Call the createSale API function
      // Redirect or show success message after creating the sale
      alert('Sale created successfully!');
    } catch (error) {
      console.error('Error creating sale:', error);
      alert('Failed to create sale.');
    }
  };

  return (
    <Paper style={{ padding: '20px' }}>
      <h2>Add Sale</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Invoice Number"
          value={invoiceNumber}
          onChange={(e) => setInvoiceNumber(e.target.value)}
          required
        />
        <TextField
          label="Total Amount"
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(Number(e.target.value))}
          required
        />
        <TextField
          label="Sale Date"
          type="date"
          value={saleDate}
          onChange={(e) => setSaleDate(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Save Sale
        </Button>
      </form>
    </Paper>
  );
};

export default AddSales;





