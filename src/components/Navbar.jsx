import React from 'react';

// Navigation Bar Component
const Navbar = () => {
  return (
    <nav className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[1347px] h-[42px] flex items-center justify-between px-4 z-10 bg-transparent">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* Replace with your actual logo image */}
        <img src ="logo.png" alt="Ladiva Logistics Logo" className="h-8 w-8 rounded" />
        <span className="text-xl font-bold text-blue-400">LADIVA LOGISTICS</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-lg">
        <a href="/Home" className="hover:text-blue-400 transition duration-300">Home</a>
        <a href="/About.jsx" className="hover:text-blue-400 transition duration-300">About Us</a>
        <a href="/Contact.jsx" className="hover:text-blue-400 transition duration-300">Contact</a>
      </div>

      {/* Get In Touch Button */}
      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300">
        Get In Touch
      </button>

      {/* Mobile menu button (for responsiveness) */}
      <div className="md:hidden">
        {/* You might add a hamburger icon here for mobile navigation */}
        <button className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
