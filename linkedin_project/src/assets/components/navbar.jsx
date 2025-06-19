import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./images/Untitled-1.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkStyle =
    "block md:inline-block bg-green-900 text-white px-4 py-2 rounded-xl hover:bg-lime-600 transition";

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            <img
              className="h-14"
              src={logo}
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={navLinkStyle}>Home</NavLink>
            <NavLink to="/about" className={navLinkStyle}>About</NavLink>
            <NavLink to="/services" className={navLinkStyle}>Services</NavLink>
            <NavLink to="/destination" className={navLinkStyle}>Study Destination</NavLink>
            <NavLink to="/preparation" className={navLinkStyle}>Test Preparation</NavLink>
            <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink to="/services" className={navLinkStyle}>Services</NavLink>
          <NavLink to="/destination" className={navLinkStyle}>Study Destination</NavLink>
          <NavLink to="/preparation" className={navLinkStyle}>Test Preparation</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
