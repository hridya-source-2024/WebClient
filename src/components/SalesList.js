import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSales } from '../Services/salesService';
import '../Common.css';

const SalesList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    const result = await getSales();
    setTransactions(result.data);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Sales Transactions</h1>
        <Link to="/add-sale" className="add-button">Add Sale</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sale ID</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>Total Tax Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{new Date(transaction.saleDate).toLocaleDateString()}</td>
              <td>{transaction.saleTransactions.reduce((total, sale) => total + sale.quantity, 0)}</td>
              <td>{transaction.totalAmount}</td>
              <td>{transaction.totalTaxAmount}</td>
              <td>
                <Link to={`/view-sale/${transaction.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesList;




