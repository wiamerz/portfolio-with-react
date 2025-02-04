import React, { useState } from 'react';
import startup from "../media/startup.jpg";
import meteo from "../media/weatherapp.png";
import portfolio from "../media/portfolio.jpg";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [hasAnimated1, setHasAnimated1] = useState(false);
  const [hasAnimated2, setHasAnimated2] = useState(false);
  const [hasAnimated3, setHasAnimated3] = useState(false);

  return (
    <section id="projects" className="p-12">
      <h2 className="text-4xl font-bold border-b-2 border-blue-400 inline-block pb-2">
        My projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 ">
        {/* Project 1 */}
        <div className="relative">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden"
            onMouseEnter={() => {
              setIsHovered1(true);
              setHasAnimated1(true);
            }}
            onMouseLeave={() => {
              setIsHovered1(false);
            }}
          >
            <img
              src={startup}
              alt="Project 1"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />

            <div
              className={`absolute inset-0 bg-blue-900/90 rounded-lg p-4 text-white
                transform transition-all duration-300 ease-in-out flex  flex flex-col justify-between
    items-center text-center h-full
                ${isHovered1
                  ? 'opacity-100 translate-y-0'
                  : hasAnimated1
                    ? 'opacity-0 translate-y-0'
                    : 'opacity-0 translate-y-full'
                }`}
            >
               <h3 className="text-lg font-bold mt-2 ">Site Web Startup</h3>
              <p className="text-gray-200 px-4">
                Site web moderne et dynamique développé pour une startup innovante. 
                Ce projet intègre une interface 
                utilisateur intuitive, des animations fluides et une expérience 
                utilisateur optimisée. 
              </p>

              <a href="https://github.com/wiamerz/history"><button id="github" type="button" className='mb-2'><FaGithub /></button></a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden"
            onMouseEnter={() => {
              setIsHovered2(true);
              setHasAnimated2(true);
            }}
            onMouseLeave={() => {
              setIsHovered2(false);
            }}
          >
            <img
              src={meteo}
              alt="Project 2"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />

            <div
              className={`absolute inset-0 bg-blue-900/90 rounded-lg p-4 text-white
                transform transition-all duration-300 ease-in-out flex  flex flex-col justify-between
    items-center text-center h-full
                ${isHovered2
                  ? 'opacity-100 translate-y-0'
                  : hasAnimated2
                    ? 'opacity-0 translate-y-0'
                    : 'opacity-0 translate-y-full'
                }`}
            >
              <h3 className="text-lg font-bold mb-2">Application Météo</h3>
              <p className="text-gray-200 px-4">
                Application météo interactive développée avec html,css, js et l'API OpenWeather. 
                Fonctionnalités incluant la géolocalisation,
                alertes météo en temps réel, et visualisation des données par graphiques. 
                
              </p>
              <a href="https://github.com/wiamerz/Weather-app"><button id="github" type="button" className='mb-2'><FaGithub /></button></a>

            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden"
            onMouseEnter={() => {
              setIsHovered3(true);
              setHasAnimated3(true);
            }}
            onMouseLeave={() => {
              setIsHovered3(false);
            }}
          >
            <img
              src={portfolio}
              alt="Project 3"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />

            <div
              className={`absolute inset-0 bg-blue-900/90 rounded-lg p-4 text-white
                transform transition-all duration-300 ease-in-out flex  flex flex-col justify-between
    items-center text-center h-full
                ${isHovered3
                  ? 'opacity-100 translate-y-0'
                  : hasAnimated3
                    ? 'opacity-0 translate-y-0'
                    : 'opacity-0 translate-y-full'
                }`}
            >
               <h3 className="text-lg font-bold mt-2">Portfolio Personnel</h3>
              <p className="text-gray-200 px-4">
                Portfolio professionnel conçu avec React.js et Tailwind CSS. 
                Présentation interactive de mes projets avec animations personnalisées, 
                dark mode, et design responsive. 
              </p>
              <a href="https://github.com/wiamerz/portfolio-with-react"><button id="github" type="button" className='mb-2'><FaGithub /></button></a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;