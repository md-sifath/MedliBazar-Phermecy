import React from 'react';
import './blogs.css';


const Blog = (props) => {
    
    const {image,title,discription}= props.blogs;
    console.log(props.blogs);

    return (
        <div className="singleblog">
            <img src={image} alt=""></img>
            <h1>{title}</h1>
            <p>{discription}</p>
            <button>Read More</button>
        </div>
    );
};

export default Blog;