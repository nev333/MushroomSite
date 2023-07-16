import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <p>No post found.</p>
  }

  return (
    <div className='blog'>
      <div className="blog-post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>Published on {post.date}</p>
      </div>
    </div>
  );
};

export default BlogPostDetail;
