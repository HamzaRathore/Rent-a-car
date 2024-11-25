import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import ScrollingText from "./ScrollingText";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ScrollingText /> {/* ScrollingText stays fixed at the top */}
      <div className="w-full h-22 bg-gradient-to-b from-red-800 to-black flex justify-between items-center fixed top-7 left-0 z-50 px-4">
        {/* Logo Section */}
        <div className="w-40 h-20 mt-2 flex items-center ml-12">
          <img src={logo} alt="logo" />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden flex items-center mr-4">
          <button
            onClick={toggleMenu}
            className="text-gray-300 text-3xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`absolute md:static top-20 left-0 w-full md:w-auto  md:flex md:items-center md:justify-end md:mr-10 transition-all duration-300 ${
            isMenuOpen
              ? "block bg-gradient-to-b from-black to-red-800"
              : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 items-center md:items-end">
            <li className="font-bold text-gray-300 text-xl hover:cursor-pointer hover:underline hover:text-gray-600 pb-2 hover:scale-105 duration-200">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="font-bold text-gray-300 text-xl hover:cursor-pointer hover:underline hover:text-gray-600 pb-2 hover:scale-105 duration-200">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="font-bold text-gray-300 text-xl hover:cursor-pointer hover:underline hover:text-gray-600 pb-2 hover:scale-105 duration-200">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="font-bold text-gray-300 text-xl hover:cursor-pointer hover:underline hover:text-gray-600 pb-2 hover:scale-105 duration-200">
              <Link to="/login-page" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
