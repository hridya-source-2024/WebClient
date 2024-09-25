import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="main-container">
            <h1 className="heading">Product Management and Sales Overview</h1>
            <div className="list-container">
                <div className="list-item">
                    <Link to="/products">Product List</Link>
                    <p className="description">Manage and view all products information.</p>
                </div>
                <div className="list-item">
                    <Link to="/sales">Sales List</Link>
                    <p className="description">Access all sales and detailed information</p>
                </div>
            </div>
        </div>
    );
};

export default MainPage;

