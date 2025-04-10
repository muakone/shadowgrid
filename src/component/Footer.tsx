import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0c] to-[#111113] text-white px-6 md:px-16 py-16 font-sans shadow-inner border-t border-yellow-500/10">

      {/* Stylish glowing top divider */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-yellow-500/10 via-yellow-300/10 to-transparent blur-sm" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-12 relative z-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-3">About ShadowGrid</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Delivering solar efficiency through smart grid planning. Predict solar output, reduce energy waste, and connect homes into intelligent microgrids.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#dashboard" className="hover:text-yellow-300 transition">Dashboard</a></li>
            <li><a href="#recommendations" className="hover:text-yellow-300 transition">Recommendations</a></li>
            <li><a href="#locations" className="hover:text-yellow-300 transition">Case Study</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-400" />
              +234 800-SHADOW
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-400" />
              contact@shadowgrid.io
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow-400" />
              Lagos, Nigeria
            </li>
          </ul>
        </div>

        {/* Social + Store Buttons */}
        <div>
          <h3 className="text-lg font-bold text-yellow-400 mb-3">Connect With Us</h3>
          <div className="flex gap-5 text-yellow-400 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-300 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-yellow-300 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-300 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="space-y-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-8 mt-10 border-t border-yellow-400/10">
        <p>© {new Date().getFullYear()} ShadowGrid. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-300 transition">Terms of Service</a>
          <a href="#" className="hover:text-yellow-300 transition">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
