// Activity 1: How to implement components using Navbar as the example
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">YourName</div>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#experience" className="hover:text-gray-400">
            Experience
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#service" className="hover:text-gray-400">
            Service
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <a href="#footer">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Socials
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
{
  /* <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
  <div className="container py-2 flex justify-center md:justify-between items-center">
    <div className="text-2xl font-bold hidden md:inline">YourName</div>
    <div className="space-x-6">
      <a href="#" className="hover:text-gray-400">
        Home
      </a>
      
    </div>
    <a href="#">
      <button
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
      >
        Socials
      </button>
    </a>
  </div>
</nav> */
}
{
  /* Create links for About Me, Experience, Projects, Service and Contact */
}
