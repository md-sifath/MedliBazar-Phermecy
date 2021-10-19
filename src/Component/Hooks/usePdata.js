import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

const usePdata = () => {

    const [product,setProduct]=useState([]);

    useEffect(()=>{
        fetch('./productData.json')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])


    return {
        product
    }
};

export default usePdata;