import React from "react";
import Header from "../Components/Header";
import MySidebar from "../Components/MySidebar";


const Settings = () => {
  return (
    <>
      <Header />
      
	<div className="app">
  <MySidebar />
    <div className="content">
      <div className="styles">
      <h1>SETTINGS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non itaque aut
        sint soluta corporis amet vitae veniam voluptatibus veritatis ducimus,
        cumque, perferendis quia a dolores debitis, doloremque repellat libero
        accusamus.
      </p>
    </div>
    </div>
    </div>
    </>
  );
};

export default Settings;
