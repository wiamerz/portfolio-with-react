import React from "react";
import calcul from "../media/calcul.jpeg";
import economi from "../media/Economic.jpeg";
import portfolio from "../media/portfolio.jpeg";

const Projects = () => {
  return (
    <section id="projects" className="p-12">
      <h2 className="text-4xl font-bold border-b-2 border-blue-400 inline-block pb-2">My projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <img src={calcul} alt="Project 1" className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300" />
        <img src={economi} alt="Project 2" className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300" />
        <img src={portfolio} alt="Project 3" className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300" />
      </div>
    </section>
  );
};

export default Projects;
