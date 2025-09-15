import React from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="w-[98%] h-20 bg-white/30 backdrop-blur-md mx-auto rounded-full absolute top-4 left-1/2 transform -translate-x-1/2 border border-white/30 flex items-center justify-between px-6">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <a href='/' className="logo font-bold text-2xl text-green-700">AgroPal</a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 font-nav-link text-gray-700">
        <a href="/" className="hover:text-green-700 font-medium transition duration-200">Home</a>
        <a href="/about" className="hover:text-green-700 font-medium transition duration-200">About</a>
        <a href="/services" className="hover:text-green-700 font-medium transition duration-200">Services</a>
        <a href="/contact" className="hover:text-green-700 font-medium transition duration-200">Contact</a>
      </div>

      {/* Frosty Glass Button */}
      <div>
        <button className="bg-white/20 font-nav-link backdrop-blur-md cursor-pointer border border-white/30 text-green-700 px-6 py-2 rounded-full hover:bg-white/30 hover:text-green-800 transition duration-300 shadow-lg shadow-white/20"
         onClick={() => navigate("/raise-query")}
        >
        Raise a Query
        </button>
      </div>

    </div>
  );
};

export default Navbar;
