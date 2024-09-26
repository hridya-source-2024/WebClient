import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSaleById } from '../Services/salesService';

const ViewSale = () => {
  const { saleId } = useParams();
  const [sale, setSale] = useState(null);

  useEffect(() => {
    loadSale();
  }, []);

  const loadSale = async () => {
    const result = await getSaleById(saleId);
    setSale(result.data);
  };

  if (!sale) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>Sale Details</h2>
      <p><strong>Sale ID:</strong> {sale.id}</p>
      <p><strong>Sale Date:</strong> {new Date(sale.saleDate).toLocaleDateString()}</p>
      <p><strong>Invoice Number:</strong> {sale.invoiceNumber}</p>
      <p><strong>Net Amount:</strong> {sale.netAmount.toFixed(2)}</p>
      <p><strong>Total Tax Amount:</strong> {sale.totalTaxAmount.toFixed(2)}</p>
      <p><strong>Total Import Duty:</strong> {sale.totalImportDuty.toFixed(2)}</p>
      <p><strong>Total Amount:</strong> {sale.totalAmount.toFixed(2)}</p>

      <h3>Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Tax</th>
            <th>Import Duty</th>
          </tr>
        </thead>
        <tbody>
          {sale.saleTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.product.name}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.amount.toFixed(2)}</td>
              <td>{transaction.tax.toFixed(2)}</td>
              <td>{transaction.importDuty.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewSale;
