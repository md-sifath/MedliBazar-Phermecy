import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ProductDetails.css';


const ProductDetails = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('/productData.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    const { productId } = useParams();
    const match = details.find(d => d.key == productId);
    console.log(match);
    return (
        <div>
            <div className="details">
                <div className="p-image">
                    <img src={match?.image} alt=""></img>
                </div>
                <div className="p-text-part">
                    <h1>Name:{match?.name}</h1>
                    <p>This is the best of the world.we cannot Sold any feature which is a non valid or date over.This is the best of the world.we cannot Sold any feature which is a non valid or date over.This is the best of the world.we cannot Sold any feature which is a non valid or date over.</p>
                    <h3>Price :${match?.price}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;