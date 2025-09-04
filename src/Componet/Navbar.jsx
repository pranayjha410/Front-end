import React from "react";
import Cart from "./Cart";
import {  NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiTransportationRings } from "react-icons/gi";

const Navbar = ({ cartCount }) => {
  const location = useLocation(); //to get current location
  const navigate = useNavigate(); //to change path

  return (
    <header className="bg-gray-900 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="bg-pink-500 p-2 rounded-full" >
            <GiTransportationRings className="text-2xl"/>

          </div>
          <span className="text-xl font-bold "  >Tailblocks</span>
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

        {/* Cart icon in navbar*/}
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
