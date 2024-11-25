import React from "react";
import { FaInstagram, FaTwitter, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full pt-12 bg-gradient-to-b from-gray-900 to-red-800 text-white relative z-10 -mb-6">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:justify-around border-b-2 border-gray-900 pb-8 space-y-8 md:space-y-0 px-4 md:px-8">
        {/* ShopSphere Info */}
        <div className="flex flex-col items-center text-center md:text-left md:w-1/3">
          <h1 className="text-2xl font-bold text-white">ShopSphere</h1>
          <p className="pt-4 px-4 md:px-0">
            Welcome to our online grocery store, where convenience meets
            freshness! Explore a wide range of high-quality groceries, delivered
            straight to your door for a hassle-free shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center text-center md:text-left md:w-1/3">
          <h1 className="text-2xl font-bold text-white">Quick Links</h1>
          <nav className="pt-4 space-y-2">
            <p className="hover:underline cursor-pointer">
              <Link to="./"> Home</Link>
            </p>
            <p className="hover:underline cursor-pointer">
              <Link to="/about">About</Link>
            </p>
            <p className="hover:underline cursor-pointer">
              <Link to="/contact">Contact</Link>
            </p>
            <p className="hover:underline cursor-pointer">
              <Link to="/login-page">Login</Link>
            </p>
          </nav>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col items-center text-center md:text-left md:w-1/3">
          <h1 className="text-2xl font-bold text-white">Get In Touch</h1>
          <div className="pt-4 space-y-2">
            <p className="hover:underline cursor-pointer">+92 3044428475</p>
            <p className="hover:underline cursor-pointer">Lahore, Pakistan</p>
            <p className="hover:underline cursor-pointer">
              hamzarathore0000@gmail.com
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <a href="#" className="hover:text-gray-400 transition">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <FaInstagram size={30} />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <FaGoogle size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom flex justify-center pt-4 pb-2 text-center text-sm md:text-base px-4">
        <p>&copy; 2024 ShopSphere. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
