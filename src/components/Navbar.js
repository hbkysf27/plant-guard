import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { Leaf } from "lucide-react"; // Import Leaf icon
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Ensures menu closes on link click
  };

  return (
    <nav className="bg-green-800 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold hover:text-green-300 flex items-center gap-2"
          onClick={closeMenu} // Close the menu when clicking the logo
        >
          <Leaf className="w-6 h-6" />
          Plant Guard
        </NavLink>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links */}
        <div
          className={`absolute top-full left-0 w-full bg-green-800 md:bg-transparent md:static md:flex md:items-center md:space-x-6 md:justify-end transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0 space-y-4 md:space-y-0">
            <li>
              <NavLink
                to="/"
                className="hover:text-green-300 block"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-green-300 block"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className="hover:text-green-300 block"
                onClick={closeMenu}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-green-300 block"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
