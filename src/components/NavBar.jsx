import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass =
    "cursor-pointer text-lg font-semibold transition hover:text-tertiary";
  const activeClass = "text-tertiary";

  return (
    <nav className="text-primary py-5 px-4 fixed w-full top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <ScrollLink to="home" smooth={true} duration={500} offset={-80}>
          <img
            src={logo}
            alt="AUM Yoga Logo"
            className="object-contain cursor-pointer"
            style={{ height: "70px", width: "auto" }}
          />
        </ScrollLink>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <ScrollLink
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            activeClass={activeClass}
            className={linkClass}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="locations"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            activeClass={activeClass}
            className={linkClass}
          >
            Locations
          </ScrollLink>
          <ScrollLink
            to="achievements"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            activeClass={activeClass}
            className={linkClass}
          >
            Achievements
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            spy={true}
            activeClass={activeClass}
            className={linkClass}
          >
            Contact Us
          </ScrollLink>
        </div>

        {/* Right: Brochure Button + Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <ScrollLink to="brochure" smooth={true} duration={500} offset={-80}>
            <button className="hidden md:flex bg-quaternary text-primary py-1.5 px-3 rounded-full hover:bg-tertiary transition items-center space-x-2 text-sm md:text-base font-semibold">
              <ArrowDownToLine className="w-5 h-5" />
              <span>Brochure</span>
            </button>
          </ScrollLink>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 space-y-3">
          {["about", "locations", "achievements", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass={activeClass}
              className="block text-base font-medium hover:text-tertiary cursor-pointer"
              onClick={toggleMenu}
            >
              {section.charAt(0).toUpperCase() +
                section.slice(1).replace("-", " ")}
            </ScrollLink>
          ))}
          <ScrollLink
            to="brochure"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={toggleMenu}
          >
            <button className="w-full mt-3 bg-quaternary text-primary py-1.5 px-3 rounded-full hover:bg-tertiary transition flex justify-center items-center space-x-2 text-base font-semibold">
              <ArrowDownToLine className="w-5 h-5" />
              <span>Brochure</span>
            </button>
          </ScrollLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
