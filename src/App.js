import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";

import About from "./screens/About";
import Contact from "./screens/Contact";
import Course from "./screens/Course";
import Staff from "./screens/Staff";
import Free from "./screens/Free";
import Results from "./screens/Results";
import Settings from "./screens/Settings";
import Students from "./screens/Students";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/result" element={<Results />} />
      <Route path="/dashboard/student" element={<Students />} />
      <Route path="/dashboard/about" element={<About/>} />
      <Route path="/dashboard/staff" element={<Staff/>} />
      <Route path="/dashboard/free" element={<Free />} />
      <Route path="/dashboard/settings" element={<Settings />} />
      <Route path="/dashboard/course" element={<Course />} />
      <Route path="/dashboard/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
