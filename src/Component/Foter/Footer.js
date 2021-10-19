import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-style">
            <div className="address">
                <h1>ADDRESS</h1>
                <p>Banani Road 16-B, Dhaka</p>
                <p>Phone : 989-675-786</p>
                <p>Email: medlibazar123@gmail.com</p>
            </div>
            <div className="newslater-style">
                <h1>NEWSLETTER</h1>
                <p>Stay connected:Join Our Newsletter</p>
                <input placeholder="Enter Your Email"></input>
                <button className="btn">Go</button>
            </div>
        </div>
        <div className="copy">
         ©Copyright-2021,Medli Bazzar, Shaharia Sifat.
        </div>
        </div>

    );
};

export default Footer;