import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <div className="header">
            <div className="logo"></div>
            <div className="link">
                <Link to="/home">Home</Link>
                <Link to="/product">Product</Link>
            </div>
            <div className="cart">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </div>
    );
};

export default Header;