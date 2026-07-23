import React from "react";

function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "Introduction to React",
      author: "Vaibhav"
    },
    {
      id: 2,
      title: "Node JS Basics",
      author: "Rahul"
    },
    {
      id: 3,
      title: "JavaScript ES6",
      author: "Ankit"
    }
  ];

  return (
    <div>
      <h2>Blog Details</h2>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            border: "1px solid blue",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3>{blog.title}</h3>
          <p>Author : {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;