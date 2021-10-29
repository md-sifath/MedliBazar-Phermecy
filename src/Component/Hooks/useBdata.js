import React, { useEffect } from 'react';
import { useState } from 'react';

const useBdata = () => {

    const [blogdata, setBlogdata]=useState([]);

    useEffect(()=>{
        fetch('./blogData.json')
        .then(res=>res.json())
        .then(data=>setBlogdata(data));
    },[])
    return {
        blogdata
    }
};

export default useBdata;