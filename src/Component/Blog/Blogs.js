import React from 'react';
import { useState,useEffect } from 'react';
import Blog from './Blog';
import './Blog.css';

const Blogs = () => {
    const [blogdata, setBlogdata]=useState([]);

    useEffect(()=>{
        fetch('./blogData.json')
        .then(res=>res.json())
        .then(data=>setBlogdata(data));
    },[])

    return (
        <div>
        <h1>Our Blogs</h1>
            <div className="BlogPage">
                {
                    blogdata.map((blogdata)=> <Blog
                    key={blogdata.key}
                    blogs={blogdata}
                    >
                    </Blog>
                    )
                }
            </div>
            
        </div>
    );
};

export default Blogs;