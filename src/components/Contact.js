import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-12 bg-gray-800 rounded-lg shadow-md mx-4">
      <h2 className="text-4xl font-bold border-b-2 border-blue-400 inline-block pb-2">Contact me</h2>
      <p className="text-blue-400 mt-4 text-lg">wiameramzi@gmail.com</p>
      <p className="text-blue-400 text-lg">0717859643</p>
      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
        <button className="bg-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Send</button>
      </form>
    </section>
  );
};

export default Contact;
