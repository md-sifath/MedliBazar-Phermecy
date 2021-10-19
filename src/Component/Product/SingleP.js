import React from 'react';
import './SingleP.css';
import { Link } from 'react-router-dom';


const SingleP = (props) => {
    const {key,image,name,discription,price}=props.pdata;
    return (
        <div>
            <div className="product-style">
                <img src={image} alt=""></img>
                <h2>{name}</h2>
                <p>{discription}</p>
                <h3>${price}</h3>
                <button className="p-btn"><Link to={`/products/${key}`}>Details</Link></button>
            </div>
        </div>
    );
};

export default SingleP;