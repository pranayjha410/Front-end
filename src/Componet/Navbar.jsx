import React, { useState } from "react";
import Cart from "./Cart";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GiTransportationRings } from "react-icons/gi";
import { BsSearch, BsList } from "react-icons/bs";
import SearchBar from "./SearchBar";

const Navbar = ({ cartCount, query, setQuery }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="text-yellow-400 font-bold text-xl md:text-2xl">
            <GiTransportationRings className="text-2xl" />
          </div>
          <span className="text-xl font-bold">BuyBox</span>
        </div>

        {/* Desktop Nav Links + Search */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <nav className="flex items-center gap-6 text-base text-gray-100">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `cursor-pointer hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 font-semibold border-b-2 border-yellow-400" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                `cursor-pointer hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 font-semibold border-b-2 border-yellow-400" : ""
                }`
              }
            >
              Product
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `cursor-pointer hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 font-semibold border-b-2 border-yellow-400" : ""
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `cursor-pointer hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 font-semibold border-b-2 border-yellow-400" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Search bar */}
          <div className="ml-6">
            {location.pathname === "/product" && <SearchBar query={query} setQuery={setQuery} />}
          </div>
          
        </div>

        {/* Cart icon */}
        <div className="flex items-center gap-4">
          {location.pathname !== "/CartPage" && <NavLink to="/CartPage"><Cart cartCount={cartCount} /></NavLink>}

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <BsList />
          </button>
        </div>
      </div>

      



      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-green-400 px-4 py-4 space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block cursor-pointer hover:text-white ${
                isActive ? "text-blue-400 font-semibold underline" : ""
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) =>
              `block cursor-pointer hover:text-white ${
                isActive ? "text-blue-400 font-semibold underline" : ""
              }`
            }
          >
            Product
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block cursor-pointer hover:text-white ${
                isActive ? "text-blue-400 font-semibold underline" : ""
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block cursor-pointer hover:text-white ${
                isActive ? "text-blue-400 font-semibold underline" : ""
              }`
            }
          >
            Contact Us
          </NavLink>

          {/* Mobile search bar */}
          
        </div>
      )}

      <div className="mt-2 md:hidden">
            <SearchBar query={query} setQuery={setQuery} />
          </div>
    </header>
  );
};

export default Navbar;
