import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';


const ProductDetails = () => {
    const [details,setDetails]=useState([]);
    
    useEffect(()=>{
        fetch('./productData.json')
        .then(res=>res.json())
        .then(data=> setDetails(data))
    },[]);
    const {key}=useParams();
    const match=details.find(d=>d.key == key);
    console.log(match);
    return (
        <div>
            <div className="p-image">
            <h1>that is the {key}</h1>
                <img src={match?.image} alt=""></img>
            </div>
            <div className="p-text-part">

            </div>
        </div>
    );
};

export default ProductDetails;