import React from "react";

function CourseDetails(props) {
  if (!props.isAvailable) {
    return <h2 style={{ color: "red" }}>Course Not Available</h2>;
  }

  const courses = [
    {
      id: 1,
      name: "React JS",
      duration: "2 Months"
    },
    {
      id: 2,
      name: "MERN Stack",
      duration: "4 Months"
    },
    {
      id: 3,
      name: "Java Full Stack",
      duration: "5 Months"
    }
  ];

  return (
    <div>
      <h2>Course Details</h2>

      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            border: "1px solid green",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3>{course.name}</h3>
          <p>Duration : {course.duration}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;