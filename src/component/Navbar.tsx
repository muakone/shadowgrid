import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-small.png";
import {
  Menu,
  X,
  LayoutDashboard,
  Sun,
  Share2,
  Mail,
  FileDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-950/90 backdrop-blur-sm shadow-md text-white sticky top-0 z-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="ShadowGrid Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-yellow-400 tracking-wide">ShadowGrid</span>
              <span className="text-xs text-gray-400 font-light -mt-1">Plan. Simulate. Share.</span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <li><Link to="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link></li>
            <li><Link to="/recommendations" className="hover:text-yellow-400 transition">Recommendations</Link></li>
            <li><Link to="/download" className="hover:text-yellow-400 transition">Download</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          </ul>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-yellow-400 hover:text-white text-2xl transition">
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-gray-950 text-white z-50 shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
                <button onClick={() => setIsOpen(false)} className="text-yellow-400 hover:text-white transition">
                  <X />
                </button>
              </div>

              <ul className="px-6 py-6 space-y-5 text-sm">
                <li className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <Sun className="w-4 h-4" />
                  <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <Share2 className="w-4 h-4" />
                  <Link to="/recommendations" onClick={() => setIsOpen(false)}>Recommendations</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FileDown className="w-4 h-4" />
                  <Link to="/download" onClick={() => setIsOpen(false)}>Download</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <Mail className="w-4 h-4" />
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
