import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MySidebar from "../Components/MySidebar";
import About from "./About";
import Contact from "./Contact";
import Course from "./Course";
import Free from "./Free";
import Home from "./Home";
import Results from "./Results";
import Settings from "./Settings";
import Staff from "./Staff";
import Students from "./Students";

const Dashboard = () => {

  return (
    <>
      <Header />
      
      <div className="app">
        <MySidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/staff" element={<Staff />} />
            <Route path="/dashboard/student" element={<Students />} />
            <Route path="/dashboard/course" element={<Course />} />
            <Route path="/dashboard/free" element={<Free />} />
            <Route path="/dashboard/result" element={<Results />} />
            <Route path="/dashboard/contact" element={<Contact />} />
            <Route path="/dashboard/about" element={<About />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
