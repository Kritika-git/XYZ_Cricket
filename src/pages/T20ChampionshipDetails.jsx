import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router

const T20ChampionshipDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">T20 Championship 2024</h1>
        <p className="text-xl text-gray-700 mb-4">
          Get ready for an exciting T20 Championship from <strong>November 18 to November 26</strong> in Kolkata!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          This is your chance to showcase your cricket skills and compete with top teams from across the state. The tournament will feature fast-paced matches, enthusiastic crowds, and an opportunity for young cricketers to shine.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Event Details</h2>
          <ul className="list-disc ml-5">
            <li className="text-gray-700">Date: November 18 - November 26, 2024</li>
            <li className="text-gray-700">Location: Kolkata, India</li>
            <li className="text-gray-700">Format: T20</li>
            <li className="text-gray-700">Teams: 8 Participating Teams</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Link
            to="/pages/Registration"  // Use Link to redirect to registration page
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default T20ChampionshipDetails;



// import React from 'react';
// import { Link } from 'react-router-dom';  // Import Link from React Router

// const T20ChampionshipDetails = () => {
//   const ballImage = 'Ball.png';  // Replace with your cricket ball image URL
//   const stumpImage = 'https://example.com/cricket-stumps.png';  // Replace with your cricket stumps image URL

//   return (
//     <div className="min-h-screen bg-green-700 p-8 flex justify-center items-center">
//       <div className="relative max-w-4xl mx-auto bg-green-600 p-8 rounded-lg shadow-lg border-2 border-white">
//         {/* Cricket Pitch */}
//         <div className="relative bg-green-300 mx-auto w-full h-64 rounded-lg border-4 border-brown-700" style={{ maxWidth: '500px', marginBottom: '50px' }}>
//           {/* Cricket Stumps at both ends */}
//           <img 
//             src={stumpImage} 
//             alt="Cricket Stumps" 
//             className="absolute top-4 left-1/2 transform -translate-x-1/2 h-12" 
//           />
//           <img 
//             src={stumpImage} 
//             alt="Cricket Stumps" 
//             className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-12" 
//           />
//         </div>

//         <h1 className="text-4xl font-bold text-center mb-6 text-white">T20 Championship 2024</h1>
//         <p className="text-xl text-white mb-4 text-center">
//           Get ready for an exciting T20 Championship from <strong>November 18 to November 26</strong> in Kolkata!
//         </p>
//         <p className="text-lg text-white mb-4 text-center">
//           Showcase your cricket skills and compete with top teams from across the state. The tournament will feature fast-paced matches and an enthusiastic crowd.
//         </p>
        
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4 text-white text-center">Event Details</h2>
//           <ul className="list-none space-y-4 text-center">
//             <li
//               className="text-white flex justify-center items-center"
//               style={{ backgroundImage: `url(${ballImage})`, backgroundSize: '20px', backgroundRepeat: 'no-repeat', paddingLeft: '30px', backgroundPosition: 'left center' }}
//             >
//               Date: November 18 - November 26, 2024
//             </li>
//             <li
//               className="text-white flex justify-center items-center"
//               style={{ backgroundImage: `url(${ballImage})`, backgroundSize: '20px', backgroundRepeat: 'no-repeat', paddingLeft: '30px', backgroundPosition: 'left center' }}
//             >
//               Location: Kolkata, India
//             </li>
//             <li
//               className="text-white flex justify-center items-center"
//               style={{ backgroundImage: `url(${ballImage})`, backgroundSize: '20px', backgroundRepeat: 'no-repeat', paddingLeft: '30px', backgroundPosition: 'left center' }}
//             >
//               Format: T20
//             </li>
//             <li
//               className="text-white flex justify-center items-center"
//               style={{ backgroundImage: `url(${ballImage})`, backgroundSize: '20px', backgroundRepeat: 'no-repeat', paddingLeft: '30px', backgroundPosition: 'left center' }}
//             >
//               Teams: 8 Participating Teams
//             </li>
//           </ul>
//         </div>
        
//         <div className="flex justify-center mt-8">
//           <Link
//             to="/pages/Registration"
//             className="bg-white text-green-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//           >
//             Register Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default T20ChampionshipDetails;
