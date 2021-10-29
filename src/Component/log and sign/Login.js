import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';
import img1 from '../Images/banner1.jpg';
import './Login.css';
import useAuth from '../Hooks/useAuth';

const Login = () => {

    const {
        user,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        isLogin,
        error,
        handleEmailChange,
        handlePasswordChange,
        loginCheck
    }= useAuth();

    const location=useLocation();
    const history=useHistory();
    const redirect_url=location.state?.from || "/";

    const handleGoogleLogIn=()=>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_url);
        })
    }
    
    
    return (
        <div>

            <div className="from-page">
                <div className="image">
                    <img src={img1} alt=""></img>
                </div>
                <div className="login-form">
                    <form onSubmit={handleRegistration}>

                        <h1> Please Login</h1>
                        <p><input type="email" onBlur={handleEmailChange} placeholder="Enter Your Email" required ></input></p>
                        <p><input type="password" onBlur={handlePasswordChange} placeholder="Enter Your Password" required ></input></p>
                        <button type="submit" onClick={loginCheck}>
                            Login
                        </button>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        <hr />
                    </form>
                    <p>or Login with</p>
                    <button onClick={handleGoogleLogIn}>
                        Google
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Login;