import React, { useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
    setShowSuccess(false); // Hide success message when user starts typing again
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // Process form submission here
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className={`p-12 rounded-lg mx-4 ${isDarkMode ? 'bg-blue-gray-900' : 'bg-blue-100'}`}
    >
      <h2
        className={`text-4xl font-bold border-b-2 inline-block pb-2 mb-6 ${isDarkMode ? 'text-white' : 'text-black'} border-blue-400`}
      >
        Contact me
      </h2>
      
      <div className="flex flex-wrap gap-8">
        {/* Left Column - Contact Info */}
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

        {/* Right Column - Form */}
        <div className="w-full md:w-7/12">
          {showSuccess && (
            <div className="mb-4 p-4 bg-green-500 text-white rounded-lg shadow-md animate-fade-in">
              Message sent successfully! Thank you for contacting us.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className={`w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-2 border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                className={`w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-2 border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                rows="4"
                className={`w-full p-3 rounded bg-gray-700 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.message ? 'border-2 border-red-500' : ''}`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
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
