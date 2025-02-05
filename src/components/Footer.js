import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`text-center p-6 mt-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-gray-400`}
    >
      <p className={`${isDarkMode ? 'text-white' : 'text-gray-300'}`}>
        © 2025 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
