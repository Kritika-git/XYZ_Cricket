import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router

const ODILeagueDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">ODI League 2024</h1>
        <p className="text-xl text-gray-700 mb-4">
          Prepare yourself for an action-packed ODI League from <strong>December 2 to December 8</strong> in Chennai!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          It's time to demonstrate your one-day cricket prowess and compete with top teams. Expect thrilling matches and a chance to make your mark on the grand stage!
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Event Details</h2>
          <ul className="list-disc ml-5">
            <li className="text-gray-700">Date: December 2 - December 8, 2024</li>
            <li className="text-gray-700">Location: Chennai, India</li>
            <li className="text-gray-700">Format: One Day International (50 overs)</li>
            <li className="text-gray-700">Teams: 10 Participating Teams</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Link
            to="/pages/registration"  // Use Link to redirect to registration page
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ODILeagueDetails;