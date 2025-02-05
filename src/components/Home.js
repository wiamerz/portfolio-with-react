import React from "react";
import enaa from "../media/homePic-removebg-preview (1).png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Home = ({ isDarkMode }) => {
  return (
    <section 
      id="home" 
      className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-blue-gray-900 text-white' : 'bg-blue-100 text-black'}`}
    >
      <div className="w-5/12 text-center -mt-8">
        <h2 className="text-5xl font-bold">Full-stack Developer</h2>
        <h3 className="text-2xl text-blue-400 mt-2">Wiame Ramzi</h3>
      </div>
      <img 
        src={enaa}
        width={100}
        height={100}
        className="w-4/12 ml-4" 
        alt="Profile" 
      />
    </section>


  );
};

export default Home;