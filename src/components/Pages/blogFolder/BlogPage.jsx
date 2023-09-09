import React from "react";
import { Link } from "react-router-dom";
import './BlogPageStyles.css';
import blogPosts from "./blogPosts";

const BlogPost = ({ id, title, image }) => {
  return (
    <div className='blog'>
      <div className="blog-post">
        <Link to={`/blog/${id}`}>
          <h4>{title}</h4>
          <img className="blog-image" src={image}  alt="description 1"/>
        </Link>
        {/* <p>Published on {date}</p> */}
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div>
      <h1 className="blog-title">Blog Posts</h1>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
