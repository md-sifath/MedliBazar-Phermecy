import React from 'react';
import bannerimg from '../Images/banner2.png';
import Products from '../Product/Products';
import './Home.css';

const Home = () => {
    return (
       <>
         <div className="home-banner">
            <div className="home-image">
                <img src={bannerimg} alt=""></img>
            </div>
            <div className="text-part">
                <h1>Flat 25% Off Medicine order</h1>
                <p>code:<span>2r4ve</span></p>
                <button className="home-btn">Shop Now</button>
            </div>
        </div>
        <Products></Products>
       </>
    );
};

export default Home;