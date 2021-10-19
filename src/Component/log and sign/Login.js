import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import img1 from '../Images/banner1.jpg';
import './Login.css';

const Login = () => {

    const {emailPassLogIn ,googleSignIn}=useFirebase();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handlePass = (e) => {
        setPass(e.target.value);
        console.log(pass);
    }
    const handleLogPage=(e)=>{
        console.log(email,pass)
         emailPassLogIn(email,pass);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleLogPage}>
                <div className="from-page">
                    <div className="image">
                        <img src={img1} alt=""></img>
                    </div>
                    <div className="login-form">
                        <h1> Please Login</h1>
                        <p><input type="email" onBlur={handleEmail} placeholder="Enter Your Email" required ></input></p>
                        <p><input type="password" onBlur={handlePass} placeholder="Enter Your Password" required ></input></p>
                        <button>
                            Login
                        </button>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        <hr />
                    </div>
                </div>
            </form>
                         <p>or Login with</p>
                        <button onClick={googleSignIn}>
                            Google
                        </button>
        </div>
    );
};

export default Login;