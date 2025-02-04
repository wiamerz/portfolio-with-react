import React from "react";
import enaa from "../media/homePic.jpeg";

const Home = () => {
  return (
    <section id="home" className="text-center p-12">
      <h2 className="text-5xl font-bold">Full-stack Developer</h2>
      <h3 className="text-2xl text-blue-400 mt-2">Wiame Ramzi</h3>
      <img src={enaa} 
           width={100}
           height={100}
      className="mx-auto my-6 w-72 rounded-lg shadow-lg" alt="Profile" />
    </section>
  );
};

export default Home;





























// import React from 'react';
// import './index.css'; 
// import homePic from './media/homePic.jpeg'; 

// function Home() {
//   return (
//     <div className="home-section">
//       <img src={homePic}  className="home-pic" />
//       <div className="description">
//         <h1>Welcome to My Portfolio</h1>
//         <p>
//           This is a brief description about me and my work. Feel free to explore my projects and get in touch if you have any questions or opportunities to collaborate.
//         </p> 
        
//       </div>
//     </div>
//   );
// }

// export default Home;