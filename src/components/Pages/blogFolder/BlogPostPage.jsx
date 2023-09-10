import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from './blogPosts';


const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  const SpecificComponent = post.content;

  return (
    <div>
      <div className="blog-tile">
        {/* <h2>{post.title}</h2> */}
        <SpecificComponent /> {/* Render component here */}
        {/* <p>Published on {post.date}</p> */}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default BlogPostPage;



