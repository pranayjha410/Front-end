import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-blue-900 dark:bg-black border-t border-gray-200 dark:border-zinc-800 mt-6 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Text */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">BuyBox</h3>
            <p className="text-sm text-gray-300 mt-1">
              Building the future, one step at a time.
            </p>
          </div>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <NavLink
              to="/"
              className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Product
            </NavLink>
            <NavLink
              to="/about"
              className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-sm md:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Contact
            </NavLink>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-white">
            <a href="https://github.com/pranayjha410" className="hover:text-yellow-400">
              < FaGithub/>
            </a>
            <a href="https://x.com/pranayj410" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/pranayjha41/" className="hover:text-yellow-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-200 dark:border-zinc-800 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} BuyBox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
