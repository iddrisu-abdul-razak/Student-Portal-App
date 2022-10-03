import React from "react";
import Header from "../Components/Header";
import MySidebar from "../Components/MySidebar";

const Students = () => {
  return (
    <>
    <Header />
    
    <div className="app">
      <MySidebar/>
    <div className="content">
      <h1>STUDENTS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni
        maiores alias explicabo quos. Fugiat nulla, accusantium quasi expedita
        vero nisi, molestias adipisci magni eius beatae doloribus natus. Neque,
        error.
      </p>
    </div>
    </div>
    </>

  );
};

export default Students;
