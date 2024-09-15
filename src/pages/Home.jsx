// src/pages/Home.jsx
function Home() {
    return (
      <div className="container mx-auto p-4 space-y-8">
        <section id="home">
          <h1 className="text-2xl font-bold">Welcome to XYZ Organization</h1>
          <p>We organize cricket tournaments in various formats.</p>
        </section>
  
        <section id="about">
          <h2 className="text-2xl font-bold mt-8">About Us</h2>
          <p>
            XYZ Organization is dedicated to promoting cricket by organizing tournaments. 
            Our mission is to foster a competitive yet friendly environment for cricket enthusiasts.
          </p>
        </section>
  
        <section id="tournaments">
          <h2 className="text-2xl font-bold mt-8">Tournaments</h2>
          <p>
            We offer a variety of tournaments in different cricket formats, including T20, One Day Internationals (ODIs), and Test matches. 
            Our tournaments cater to all levels of players, from beginners to seasoned professionals.
          </p>
        </section>
      </div>
    );
  }
  
  export default Home;
  