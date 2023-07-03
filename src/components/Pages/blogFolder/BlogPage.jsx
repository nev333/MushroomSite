import React from 'react';
import './BlogPageStyles.css';
import Menu from '../../menu/Menu';

const BlogPage = () => {
  // Example blog data
  const blogs = [
    {
      title: 'Lorem Ipsum',
      author: 'John Doe',
      date: 'June 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada mauris et augue gravida, at venenatis leo auctor.',
    },
    {
      title: 'Lorem Ipsum 2',
      author: 'Jane Smith',
      date: 'June 5, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada mauris et augue gravida, at venenatis leo auctor.',
    },
    // Add more blogs as needed
  ];

  return (
    <div>
      <Menu />
    <div className="blog-page">
      <h1 className="blog-page-title">Latest Blogs</h1>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div className="blog-item" key={index}>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-meta">{`By ${blog.author} | ${blog.date}`}</p>
            <p className="blog-content">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BlogPage;
