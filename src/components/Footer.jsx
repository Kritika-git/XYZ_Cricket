// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-600 hover:text-blue-400" aria-label="Facebook">
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
              <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300" aria-label="Twitter">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com" className="text-pink-500 hover:text-pink-400" aria-label="Instagram">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-600" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
            </div>
          </div>

          {/* Contact Us Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">Contact Us</h3>
            <p className="mb-2">Email: <a href="mailto:info@xyzorganization.com" className="text-blue-400 hover:underline">info@xyzorganization.com</a></p>
            <p className="mb-2">Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+91 810-456-7890</a></p>
            <p className="mb-2">Address: 123 Cricket Lane, Kolkata</p>
          </div>

          {/* Terms and Conditions & Navbar Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="#about" className="hover:underline">About Us</Link></li>
              <li><Link to="#tournaments" className="hover:underline">Tournaments</Link></li>
              <li><Link to="/registration" className="hover:underline">Registration</Link></li>
              <li><Link to="#contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 XYZ Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
