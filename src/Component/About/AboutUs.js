import React from 'react';
import img2 from '../Images/bg2.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
            <h1 className="about-title">About Us</h1>
            <div className="about-page">
                <div className="abouttext">
                    <p>There are many Fermechy in this country.But We can say we are best.Because we provide the best company medicine.We always try to take the lowest price so that poor people also provide there medicine.
                    There are many Fermechy in this country.But We can say we are best.Because we provide the best company medicine.We always try to take the lowest price so that poor people also provide there medicine.</p>
                    <button className="about-btn">
                        Read More
                    </button>
                </div>
                <div className="image-part">
                    <img src={img2} alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;