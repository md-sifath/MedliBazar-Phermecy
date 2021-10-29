import React from 'react';
import { useState,useEffect } from 'react';
import SingleP from './SingleP';
import './Products.css';

const Products = () => {
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        fetch('./productData.json')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])

    
    return (
        <div id="product">
        <h1 className="product-h1">Our Products</h1>
            <div className="products-style">
            {
                product.map((product)=> <SingleP
                key={product.key}
                pdata={product}
                >
                </SingleP>

                )
            }
            </div>
        </div>
    );
};

export default Products;