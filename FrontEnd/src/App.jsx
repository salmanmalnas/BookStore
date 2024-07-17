import React from 'react';
import {Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Course from './components/Course';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
