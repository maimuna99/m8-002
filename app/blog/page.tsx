import React from "react";
import BlogWrapper from "./components/BlogWrapper";
export const metadata = {
  title: "Blog",
  description: "This is the Blog page",
};

type BlogParams = {
  title: string;
};

function Blog({ params }: { params: BlogParams }) {
  return (
    <div>
      <BlogWrapper />
    </div>
  );
}

export default Blog;
