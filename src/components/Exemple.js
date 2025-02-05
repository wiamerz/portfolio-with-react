<div className="relative">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <img
              src={meteo}
              alt="Project 2"
              className="w-full rounded-lg shadow-lg hover:scale-105 transition duration-300"
            />

            <div
              ref={overlay2Ref}
              className="absolute inset-0 bg-blue-900/90 rounded-lg p-4 text-white flex flex-col justify-between items-center text-center h-full"
            >
              <h3 className="text-lg font-bold mb-2">Application Météo</h3>
              <p className="text-gray-200 px-4">
                Application météo interactive développée avec HTML, CSS, JS et l'API OpenWeather. Fonctionnalités incluant la géolocalisation, alertes météo en temps réel, et visualisation des données par graphiques.
              </p>
              <a href="https://github.com/wiamerz/Weather-app">
                <button id="github" type="button" className='mb-2'>
                  <FaGithub />
                </button>
              </a>
            </div>
          </div>
        </div>