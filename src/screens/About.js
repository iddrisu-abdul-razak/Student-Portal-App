import React from "react";
import Header from "../Components/Header";
import MySidebar from "../Components/MySidebar";

const About = () => {
  return (
    <>
     <Header />
      
	<div className="app">
  <MySidebar />
    <div className="content">
    <div className="styles">
      <h1>ABOUT US</h1>
      <p>we are living in a time where there is no shortage of software option for schools,
        but finding one that perfectly fits your needs?well, as bigginners in programming we design a
         student portal that will help schools track their student information.</p>
    </div>
    
    </div>
    </div>
    </>
  );
};

export default About;
