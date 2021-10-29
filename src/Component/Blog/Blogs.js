import React from 'react';
import useBdata from '../Hooks/useBdata';
import Blog from './Blog';
import './Blog.css';

const Blogs = () => {
    const {blogdata}=useBdata();
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