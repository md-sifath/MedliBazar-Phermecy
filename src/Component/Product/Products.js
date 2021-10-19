import React from 'react';
import usePdata from '../Hooks/usePdata';
import SingleP from './SingleP';
import './Products.css';

const Products = () => {
    const {product} = usePdata();
    
    return (
        <div>
        <h1>Our Products</h1>
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