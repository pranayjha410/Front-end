import React from "react";
import Cart from "./Cart";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  const location = useLocation();

  return (
    <header className="bg-gray-900 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-pink-500 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span className="text-xl font-bold">Tailblocks</span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6 text-base text-green-400">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer hover:text-white ${
                isActive ? "text-blue-400 font-semibold underline" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              `cursor-pointer hover:text-white ${
                isActive ? "text-blue-400  font-semibold underline" : ""
              }`
            }
          >
            Product
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `cursor-pointer hover:text-white ${
                isActive ? "text-blue-400  font-semibold underline" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer hover:text-white ${
                isActive ? "text-blue-400  font-semibold underline" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Cart icon */}
        <div className="flex items-center">
          {location.pathname !== "/CartPage" && (
            <NavLink to="/CartPage">
              <Cart cartCount={cartCount} />
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
