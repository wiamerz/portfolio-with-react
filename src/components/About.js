import React from "react";
import pic from "../media/pic.jpeg";


const About = () => {
  return (
    <section id="about" className="p-12 bg-gray-800 rounded-lg shadow-md mx-4">
      <h2 className="text-4xl font-bold border-b-2 border-blue-400 inline-block pb-2">About me</h2>
      <div className="flex items-center space-x-6 mt-6">
        <img
         src={pic} 
          className="w-40 rounded-full shadow-lg border-4 border-blue-400"
        />
        <p className="text-gray-300 text-lg leading-relaxed">
        Wiame Ramzi is a dedicated full-stack developer with a background in physics and energy. 
        Currently pursuing expertise in web development, she has a strong foundation in coding, 
        software development, and problem-solving. Passionate about technology and innovation,
         Wiame is eager to build efficient, scalable applications.</p>

        <p> Her journey began with a license in Physics specializing in Energy, 
        where she developed analytical and computational skills, including experience with MATLAB. 
        Transitioning into the digital field, she enrolled in an intensive development training program 
        to master front-end and back-end technologies.</p>
        
        <p>
        Wiame has worked on projects ranging from task management systems to dynamic web applications, 
        showcasing her ability to design, develop, and optimize software solutions. She is skilled in React.js,
       JavaScript, jQuery, and UI/UX design with tools like Figma.</p>

       

      
        
      </div>
    </section>
  );
};

export default About;
