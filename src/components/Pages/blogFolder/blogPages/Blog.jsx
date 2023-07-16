// BlogPage.js
import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import Menu from '../../../menu/Menu';
import FooterSection from '../../../FooterSection/FooterSection';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API or load them from your array
    // For now, we'll use a static array of posts.
    const posts = [
      { title: 'First Post', content: 'Hello, world!', date: '2023-07-01' },
      // Add more posts...
    ];
    setPosts(posts);
  }, []);

  return (
    <div>
      <Menu />
    <div className="blog-grid">
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
    <FooterSection />
    </div>
  );
};

export default Blog;
