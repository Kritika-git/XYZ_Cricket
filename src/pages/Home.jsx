// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/Cricket-hero.png')` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-60">
          <div className="text-center text-white p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to XYZ Organization</h1>
            <p className="text-lg md:text-2xl">We organize thrilling cricket tournaments in various formats.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments Section */}
      <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Upcoming Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tournament Card 1 */}
          <Link to="/pages/T20ChampionshipDetails" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 block">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">T20 Championship</h3>
            <p className="text-gray-700">Date: November 18 - November 26 , 2024</p>
         
          <Link to="/pages/t20-championship" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 block">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">T20 Championship Under 18 (Boys)</h3>
            <p className="text-gray-700">Date: November 18 - November 26</p>
            <p className="text-gray-700">Location: Kolkata</p>
            <p className="text-gray-600">Join the fast-paced T20 tournament and showcase your cricketing skills!</p>
          </Link>
          <Link to="/pages/t20-championship" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 block">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">T20 Championship Under 18 (Girls)</h3>
            <p className="text-gray-700">Date: November 18 - November 26</p>
            <p className="text-gray-700">Location: Kolkata</p>
            <p className="text-gray-600">Join the fast-paced T20 tournament and showcase your cricketing skills!</p>
          </Link>
          {/* Tournament Card 2 */}
          <Link to="/pages/ODILeagueDetails" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 block">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">ODI League</h3>
            <p className="text-gray-700">Date: December 2 - December 8 , 2024</p>
            <p className="text-gray-700">Location: Chennai</p>
            <p className="text-gray-600">Experience the excitement of One Day Internationals in our ODI League.</p>
          </Link>
          {/* Tournament Card 3 */}
          <Link to="/pages/TestMatchSeriesDetails" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 block">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Test Match Series</h3>
            <p className="text-gray-700">Date: December 5 - December 20 , 2024</p>
            <p className="text-gray-700">Location: Delhi</p>
            <p className="text-gray-600">Participate in the classic format of cricket with our Test Match Series.</p>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-8 bg-gray-100 mt-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4 text-gray-700">
              At XYZ Organization, we are passionate about cricket and dedicated to fostering its growth and development. Our mission is to promote the sport by organizing a variety of cricket tournaments that cater to players of all skill levels.
            </p>
            <p className="mb-4 text-gray-700">
              We believe in the power of cricket to bring people together, create lasting memories, and inspire greatness. Whether you're a budding cricketer, a seasoned player, or a dedicated fan, we strive to provide opportunities for everyone to experience the thrill of the game.
            </p>
            <p className="mb-4 text-gray-700">
              Our tournaments are meticulously organized to ensure a competitive yet friendly environment. From local leagues to international championships, we manage every aspect of the event to deliver a seamless experience for players and spectators alike.
            </p>
            <p className="mb-4 text-gray-700">
              Join us in celebrating the spirit of cricket. Be a part of our vibrant community and contribute to the legacy of the sport. Whether you’re looking to compete, watch, or support, XYZ Organization is the place to be.
            </p>
            <p className="text-gray-700">
              We are committed to making cricket accessible to all and creating platforms where talent and passion can flourish. Explore our tournaments, get involved, and let's play cricket together!
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <div className="relative pb-9/16">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/s10Fai6Tc_0"
                title="About Us Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 mt-8 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Tournament Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Highlight Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/winner1.jpg" alt="Tournament Winner 1" className="w-full h-40 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold mb-2">2023 T20 Championship Winners</h3>
            <p>The team displayed exceptional skill and teamwork to clinch the title.</p>
          </div>
          {/* Highlight Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/winner2.jpg" alt="Tournament Winner 2" className="w-full h-40 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold mb-2">2023 ODI League Champions</h3>
            <p>Victory in the ODI League was a testament to their strategic prowess.</p>
          </div>
          {/* Highlight Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/winner3.jpg" alt="Tournament Winner 3" className="w-full h-40 object-cover mb-4 rounded-lg"/>
            <h3 className="text-xl font-semibold mb-2">2023 Test Match Series Champions</h3>
            <p>The team excelled in the traditional format, showcasing their endurance and technique.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
