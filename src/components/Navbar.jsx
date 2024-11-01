// src/components/Navbar.jsx
// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-lg">
          <img
            src="/cricketsphere-high-resolution-logo-transparent (1).png"
            alt="CricketSphere"
            className="h-10 w-auto" 
            style={{ maxHeight: '60px' }} 
          />
        </div>
        {/* Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <a href="#about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="#tournaments" className="text-white hover:text-gray-300">
            Tournaments
          </a>
          <Link to="/Registration" className="text-white hover:text-gray-300">
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

