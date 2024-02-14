import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full mx-auto text-center py-4 bg-primary-600 sm:px-6 md:flex-row md:justify-between md:px-10">
      <p className="text-sm text-gray-200 my-auto">
        © 2024 Yutong Wang. Last updated 2/13/2024.
      </p>

      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://www.linkedin.com/in/yutong-w-957636201/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/ywang760"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
