import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white px-6 md:px-16 py-12 font-sans">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-800 pb-10">
          <div>
            <h3 className="text-lg font-bold mb-2">About ShadowGrid</h3>
            <p className="text-sm text-gray-400">
              Delivering solar efficiency through smart grid planning. Predict
              solar output, reduce energy waste, and connect communities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#dashboard" className="hover:text-yellow-400">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#recommendations" className="hover:text-yellow-400">
                  Recommendations
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-yellow-400">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📞 +234 800-SHADOW</li>
              <li>✉️ contact@shadowgrid.io</li>
              <li>📍 Lagos, Nigeria</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Connect With Us</h3>
            <div className="flex gap-4 text-xl text-gray-300 mb-4">
              <a href="#">
                <i className="fab fa-facebook hover:text-yellow-400"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter hover:text-yellow-400"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram hover:text-yellow-400"></i>
              </a>
            </div>
            <div className="space-y-2">
            <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 pt-8 mt-8">
          <p>© 2025 ShadowGrid. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-400">
              FAQ
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer