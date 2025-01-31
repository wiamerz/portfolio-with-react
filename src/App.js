import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;


























// import React from "react";
// import "./index.css"; 
// import enaa from './media/homePic.jpeg'
 


// const Portfolio = () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen font-sans">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-lg">
//         <h1 className="text-xl font-bold tracking-wide">PORTFOLIO</h1>
//         <div className="space-x-6">
//           <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
//           <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
//           <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
//         </div>
//         <button className="bg-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Light mode</button>
//       </nav>

//       {/* Hero Section */}
//       <section className="text-center p-12">
//         <h2 className="text-5xl font-bold">Full-stack Developer</h2>
//         <h3 className="text-2xl text-blue-400 mt-2">Wiame Ramzi</h3>
//         <img
//           src={enaa}
          
//           className="mx-auto my-6 w-72 rounded-lg shadow-lg"
//         />
//       </section>

//       {/* About Me */}
//       <section id="about" className="p-12 bg-gray-800 rounded-lg shadow-md mx-4">
//         <h2 className="text-4xl font-bold border-b-2 border-blue-400 inline-block pb-2">About me</h2>
//         <div className="flex items-center space-x-6 mt-6">
//           <img
//             src="your-profile-image.jpg"
//             alt="Profile"
//             className="w-40 rounded-full shadow-lg border-4 border-blue-400"
//           />
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Hello, my name is Wiame Ramzi. I am a full-stack developer based in Beni Mellal.
//           </p>
//         </div>
//       </section>

//       {/* Projects */}
//       <section id="projects" className="p-12">
//         <h2 className="text-4xl font-bold border-b-2 border-blue-400 inline-block pb-2">My projects</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
//           <img src="project1.jpg" alt="Project 1" className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300" />
//           <img src="project2.jpg" alt="Project 2" className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300" />
//           <img src="project3.jpg" alt="Project 3" className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300" />
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="p-12 bg-gray-800 rounded-lg shadow-md mx-4">
//         <h2 className="text-4xl font-bold border-b-2 border-blue-400 inline-block pb-2">Contact me</h2>
//         <p className="text-blue-400 mt-4 text-lg">wiameramzi@gmail.com</p>
//         <p className="text-blue-400 text-lg">0717859643</p>
//         <form className="mt-6 space-y-4">
//           <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
//           <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
//           <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
//           <button className="bg-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Send</button>
//         </form>
//       </section>

//       {/* Footer */}
//       <footer className="text-center p-6 bg-gray-800 mt-10 text-gray-400">© 2025 All rights reserved</footer>
//     </div>
//   );
// };

// export default Portfolio;


// // import React from "react";
// // import Header from "./conponent/Header";
// // import Home from "./conponent/Home";
// // import './index.css';

// // function App() {
// //   return (
// //     <div>
// //       <Header />
// //       <Home />
// //       {/* Other components */}
// //     </div>
// //   );
// // }



// // export default App;

