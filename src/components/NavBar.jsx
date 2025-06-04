import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="text-primary py-5 px-4 fixed w-full top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="AUM Yoga Logo"
            className="object-contain"
            style={{ height: "70px", width: "auto" }} // Increased height
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-4 md:space-x-6">
          <Link
            to="/about"
            className="hover:text-tertiary transition text-lg font-semibold"
          >
            About Us
          </Link>
          <Link
            to="/locations"
            className="hover:text-tertiary transition text-lg font-semibold"
          >
            Locations
          </Link>
          <Link
            to="/achievements"
            className="hover:text-tertiary transition text-lg font-semibold"
          >
            Achievements
          </Link>
          <Link
            to="/contact"
            className="hover:text-tertiary transition text-lg font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Brochure button (always visible) */}
        <Link to="/brochure" className="hidden md:block">
          <button className="bg-quaternary text-primary py-1.5 px-3 rounded-full hover:bg-tertiary transition flex items-center space-x-2 text-sm md:text-base font-semibold">
            <ArrowDownToLine className="w-5 h-5" />
            <span>Brochure</span>
          </button>
        </Link>
      </div>

      {/* Mobile menu content */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 space-y-3">
          <Link
            to="/about"
            className="block text-base font-medium hover:text-tertiary"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/locations"
            className="block text-base font-medium hover:text-tertiary"
            onClick={toggleMenu}
          >
            Locations
          </Link>
          <Link
            to="/achievements"
            className="block text-base font-medium hover:text-tertiary"
            onClick={toggleMenu}
          >
            Achievements
          </Link>
          <Link
            to="/contact"
            className="block text-base font-medium hover:text-tertiary"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link to="/brochure" onClick={toggleMenu}>
            <button className="w-full mt-3 bg-quaternary text-primary py-1.5 px-3 rounded-full hover:bg-tertiary transition flex justify-center items-center space-x-2 text-base font-semibold">
              <ArrowDownToLine className="w-5 h-5" />
              <span>Brochure</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
