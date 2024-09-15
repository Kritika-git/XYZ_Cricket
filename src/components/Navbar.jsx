// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">XYZ Organization</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          {/* Anchor links for About and Tournaments sections */}
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#tournaments" className="text-white hover:text-gray-300">Tournaments</a>
          <Link to="/Registration" className="text-white hover:text-gray-300">Registration</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
