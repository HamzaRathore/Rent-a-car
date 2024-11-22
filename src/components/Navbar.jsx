import React from 'react';
import logo from '../assets/logo.png';
import ScrollingText from './ScrollingText';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <ScrollingText /> {/* ScrollingText stays fixed at the top */}
      
      <div className="w-full h-22 bg-gradient-to-b from-red-800 to-black flex justify-between fixed top-7 left-0 z-50">
        <div className="w-40 h-20 mt-2 flex items-center ml-12">
          <img src={logo} alt="logo" className="h-" />
        </div>

        <div className="mr-10 flex items-center">
          <ul className="flex space-x-5">
            <li  className="font-bold text-gray-300 text-xl hover:cursor-pointer hover:underline hover:text-gray-600 pb-2 hover:scale-105 duration-200">
              <Link to='/'>
              Home
              </Link>
            </li>
            
            <li className="font-bold text-xl hover:cursor-pointer hover:underline hover:text-gray-600 text-gray-300 pb-2 hover:scale-105 duration-200">
             <Link to='contact'>
              Contact
              </Link>
            </li>

            <li className="font-bold text-xl text-gray-300 hover:cursor-pointer hover:underline hover:text-gray-600 pb-2 hover:scale-105 duration-200">
              <Link to='/about'>
              About
              </Link>
            </li> 
            
            <li className="font-bold text-xl hover:cursor-pointer hover:underline hover:text-gray-600 text-gray-300  pb-2 hover:scale-105 duration-200">
              <Link to='/login-page'>
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
