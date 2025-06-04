import React from "react";
import { Instagram, Youtube, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-quaternary text-primary py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-y-10 md:gap-y-12 md:gap-x-8 justify-items-center md:items-start">
        {/* Contact Section with Social Handles */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 w-full text-center md:text-left">
            Contact Us
          </h3>
          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-5 h-5" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5" />
            <span>aumfreeyoga@gmail.com</span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/aumfreeyogacentre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 hover:text-primary/70 transition duration-300" />
            </a>
            <a
              href="https://www.youtube.com/@aumfreeyogacentre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 hover:text-primary/70 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4 w-full text-center md:text-left">
            AUM Free Yoga Centre
          </h3>
          <p className="text-sm mb-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5" />
            <span>
              Backed by <strong>WebB Heads</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
