import React from 'react';
import img1 from '../Images/banner1.jpg';
import './Login.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="from-page">
            <div className="image">
                <img src={img1} alt=""></img>
            </div>
            <div className="login-form">
                <h1>Please SignUp</h1>
                <p><input type="text" placeholder="Enter Your name" required="true"></input></p>
                <p><input type="email" placeholder="Enter Your Email" ></input></p>
                <p><input type="password" placeholder="Enter Your password" ></input></p>
                <button>
                    Sign Up
                </button>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default Signup;