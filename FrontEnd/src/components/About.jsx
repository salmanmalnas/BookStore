import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function About() {
  return (
    <>
        <Navbar />
        <div className="flex h-screen items-center justify-center">
            <div className="text-center p-4 bg-gray-100 dark:bg-slate-900 dark:text-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">About Page</h2>
                <p className="text-lg mb-4">This page is currently under construction. Please check back later for updates.</p>
                <Link to="/" className="bg-orange-500 text-white p-2 mt-8">Back to Home page</Link>
            </div>
        </div>
    </>
  );
}

export default About;
