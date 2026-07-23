import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = false;

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Blogger App</h1>

      {/* Conditional Rendering using && */}
      {showBooks && <BookDetails />}

      {/* Conditional Rendering using Ternary */}
      {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

      {/* Conditional Rendering using if-else inside component */}
      <CourseDetails isAvailable={showCourses} />
    </div>
  );
}

export default App;