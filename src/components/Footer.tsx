import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto sm:px-6 text-center py-4 bg-primary-600">
      <div className="flex justify-center space-x-4 mb-2">
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>

      <p className="text-sm">© 2024 Yutong Wang. Last updated 1/27/2024.</p>
    </footer>
  );
};

export default Footer;
