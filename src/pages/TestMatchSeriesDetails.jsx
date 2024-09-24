import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router

const TestMatchSeriesDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Test Match Series 2024</h1>
        <p className="text-xl text-gray-700 mb-4">
          Get ready for the ultimate challenge of endurance and skill at the <strong>Test Match Series</strong>, happening from <strong>December 5 to December 20</strong> in Delhi!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Compete in a battle of grit, technique, and patience as you participate in a traditional Test Match Series. Experience long, strategic games and prove your place in cricket history.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Event Details</h2>
          <ul className="list-disc ml-5">
            <li className="text-gray-700">Date: December 5 - December 20, 2024</li>
            <li className="text-gray-700">Location: Delhi, India</li>
            <li className="text-gray-700">Format: Test Match (5 Days per Match)</li>
            <li className="text-gray-700">Teams: 6 Participating Teams</li>
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

export default TestMatchSeriesDetails;
