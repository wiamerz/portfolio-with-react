import React from "react";
import pic from "../media/light.png";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-gray-900 shadow-lg">
      <h1 className="text-xl font-bold tracking-wide">Wiame</h1>
      <div className="space-x-6">
      <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
        <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
        <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
      </div>
      <button className=" px-4 py-2 rounded-lg  w-20 transition duration-300">
      <img
         src={pic} 
         alt=""
        />
      </button>
    </nav>
  );
};

export default Header;








//bg-blue-500 px-4 py-2  shadow-md hover:bg-blue-600 transition duration-300














// import React, { useState } from "react";
// import light from './media/light.png';



// const Header = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => setToggle(!toggle);

//   return (
//     <header className="bg-primary text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-4">
//         <a href="#home" className="hover:text-accent">Home</a>
//           <a href="#about" className="hover:text-accent">About Me</a>
//           <a href="#projects" className="hover:text-accent">Projects</a>
//           <a href="#contact" className="hover:text-accent">Contact</a>
//           <button className="light"> <img scr={light} /></button>
          
          
//         </nav>
//         {/* Mobile Nav */}
//         <div className="md:hidden flex items-center" onClick={handleToggle}>
         
//         </div>
//         {toggle && (
//           <nav className="absolute top-0 left-0 w-full bg-primary p-4">
//             <a href="#home" className="block py-2 hover:text-accent">Home</a>
//             <a href="#about" className="block py-2 hover:text-accent">About Me</a>
//             <a href="#projects" className="block py-2 hover:text-accent">Projects</a>
//             <a href="#contact" className="block py-2 hover:text-accent">Contact</a>
            
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;