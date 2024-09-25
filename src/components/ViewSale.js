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
      <p>Sale ID: {sale.id}</p>
      <p>Date: {sale.date}</p>
      <p>Total Amount: {sale.totalAmount}</p>
      {/* Display related transactions here */}
    </div>
  );
};

export default ViewSale;
