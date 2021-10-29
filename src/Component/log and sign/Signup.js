import React from 'react';
import img1 from '../Images/banner1.jpg';
import './Login.css';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Signup = () => {

    const {
        user,
        logOut,
        handleRegistration,
        error,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
    }=useAuth();

    return (
        <div className="from-page">
            <div className="image">
                <img src={img1} alt=""></img>
            </div>
            <div className="login-form">
               <form onSubmit={handleRegistration}>
               <h1>Please SignUp</h1>
                <p><input onBlur={handleNameChange} type="text" placeholder="Enter Your name" required></input></p>
                <p><input type="email" onBlur={handleEmailChange} placeholder="Enter Your Email" ></input></p>
                <p><input type="password"  onBlur={handlePasswordChange}placeholder="Enter Your password" ></input></p>
                <div>{error}</div>
                <button type="submit">
                    Sign Up
                </button>
               </form>
               <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    );
};

export default Signup;