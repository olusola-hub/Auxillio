import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Learning from "./Components/Learning";
import img4 from '../src/image/img4.png';

const courses = [
  {
    img: img4,
    code: 'csc 205',
    title: 'Natural language Programming',
    info: '4 weeks',
  },
  {
    img: img4,
    code: 'csc 209',
    title: 'System Modelling and Simulation',
    info: '6 weeks',
  },
  {
    img: img4,
    code: 'csc 211',
    title: 'Digital Logic Design',
    info: '6 weeks',
  },
  {
    img: img4,
    code: 'PHY 223',
    title: 'Electric Circuits and Introductory Electronics',
    info: '8 weeks',
  },
  {
    img: img4,
    code: 'ENT 211',
    title: 'Entrepreneurship and Innovation',
    info: '6 weeks',
  },
  {
    img: img4,
    code: 'VUA-THE 213',
    title: 'Basic Spiritual Theology',
    info: '6 weeks',
  },
  {
    img: img4,
    code: 'csc 215',
    title: 'Advanced Python Programming',
    info: '6 weeks',
  },
  {
    img: img4,
    code: 'csc 201',
    title: 'Software Engineering',
    info: '6 weeks',
  },
];

const Dashboard = () => (
  <div className="dashboard">
    <h1>Welcome to AUXILIO Dashboard</h1>
    <Link to="/courses" className="view-courses-link">
      View All Courses
    </Link>
  </div>
);

const Courses = () => (
  <div className="courses-container">
    {courses.map((course, index) => (
      <Learning
        key={index}
        image={course.img}
        title={course.title}
        code={course.code}
        info={course.info}
        button="Now"
      />
    ))}
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard Route */}
        <Route path="/" element={<Dashboard />} />

        {/* Courses Route */}
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
