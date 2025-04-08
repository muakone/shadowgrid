import React from 'react'
import Logo from "../assets/logo-small.png"

const Navbar = () => {
  return (
    <nav className="bg-gray-950/90 backdrop-blur-sm shadow-md text-white sticky top-0 z-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="ShadowGrid Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-yellow-400 tracking-wide">
                ShadowGrid
              </span>
              <span className="text-xs text-gray-400 font-light -mt-1">
                Plan. Simulate. Share.
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <li>
              <a
                href="#how"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#case-study"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                Case Study
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-all duration-200"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-yellow-400 hover:text-white text-2xl transition">
              ☰
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar