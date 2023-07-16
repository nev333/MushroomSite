import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ title, content, date, id }) => {
  return (
    <div className='blog'>
      <div className="blog-post">
        <Link to={`/blog/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{content}</p>
        <p>Published on {date}</p>
      </div>
    </div>
  );
};

export default BlogPost;
