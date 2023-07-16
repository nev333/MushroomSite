import React from "react";
import { useParams } from "react-router-dom";
import BlogPage from "../BlogPage"; // Here you would import your blog posts data

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = BlogPage.find(post => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Published on {post.date}</p>
    </div>
  );
};

export default BlogPostPage;
