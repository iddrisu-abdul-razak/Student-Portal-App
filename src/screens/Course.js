import React from "react";
import Header from "../Components/Header";
import MySidebar from "../Components/MySidebar";


const Course = () => {
  return (
    <>
      <Header />
      
	<div className="app">
  <MySidebar />
    <div className="content">
      <div className="styles">
      <h1>Courses</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        debitis? Facere consequuntur, laboriosam, esse dolor eum, porro itaque
        distinctio sequi delectus voluptate cupiditate rerum! Tempora cum
        numquam nam esse impedit!
      </p>
    </div>
    </div>
    </div>
    </>
  );
};

export default Course;
