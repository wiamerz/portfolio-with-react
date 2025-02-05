import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="p-12 bg-blue-gray-900 rounded-lg mx-4">
      <h2 className="text-4xl font-bold border-b-2 border-blue-400 inline-block pb-2 mb-6">
        Contact me
      </h2>
      
      <div className="flex flex-wrap gap-8">

        {/* Left Column */}
        <div className="w-full md:w-4/12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MdOutlineAlternateEmail className="text-blue-400 text-xl" />
              <p className="text-blue-400 text-lg">wiameramzi@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400 text-xl" />
              <p className="text-blue-400 text-lg">0717859643</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-7/12">
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message" 
                rows="4"
                className="w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button className="bg-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;