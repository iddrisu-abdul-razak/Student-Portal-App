import React from "react";
import Header from "../Components/Header";
import MySidebar from "../Components/MySidebar";


const Free = () => {
  return (
    <>
      <Header />
      
	<div className="app">
  <MySidebar />
    <div className="content">
      <div className="styles">
      <h1>FREE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor
        quos nobis unde incidunt laboriosam fuga? Consectetur facere, voluptas
        voluptates sint aliquid nam optio suscipit doloribus aut neque
        voluptatibus quaerat.
      </p>
    </div>
    </div>
    </div>
    </>
  );
};

export default Free;
