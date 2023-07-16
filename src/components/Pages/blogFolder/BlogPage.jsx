import React from 'react';
import './BlogPageStyles.css';

const BlogPost = ({ title, content, date }) => {
  return (
    <div className='blog'>
      <div className="blog-post">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Published on {date}</p>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'My First Blog Post',
      content: "This is my first blog post. I'm excited to start writing about my thoughts and experiences.",
      date: '2023-07-01',
    },
    {
      title: 'My Second Blog Post',
      content: "In this blog post, I'll talk about my recent trip to Paris.",
      date: '2023-07-02',
    },
    {
      title: 'My Third Blog Post',
      content: 'Here is another blog post for demonstration purposes.',
      date: '2023-07-03',
    },
    {
      title: 'My First Blog Post',
      content: "This is my first blog post. I'm excited to start writing about my thoughts and experiences.",
      date: '2023-07-01',
    },
    {
      title: 'My Second Blog Post',
      content: "In this blog post, I'll talk about my recent trip to Paris.",
      date: '2023-07-02',
    },
    {
      title: 'My Third Blog Post',
      content: 'Here is another blog post for demonstration purposes.',
      date: '2023-07-03',
    },
    {
      title: 'My First Blog Post',
      content: "This is my first blog post. I'm excited to start writing about my thoughts and experiences.",
      date: '2023-07-01',
    },
    {
      title: 'My Second Blog Post',
      content: "In this blog post, I'll talk about my recent trip to Paris.",
      date: '2023-07-02',
    },
    {
      title: 'My Third Blog Post',
      content: 'Here is another blog post for demonstration purposes.',
      date: '2023-07-03',
    },
    // Add more blog posts here
  ];

  return (
    <div className="blog-grid">
      {blogPosts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogPage;
