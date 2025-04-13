import React from "react";
import heroBg from "../assets/hero-bg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white font-sans h-[70vh] md:h-screen overflow-hidden">
      <motion.img
        src={heroBg}
        alt="Solar panels"
        initial={{ scale: 1.15 }}
        animate={{ scale: [1.15, 1, 1.15] }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.5 }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Plan Smarter Solar Sharing
        </h1>
        <p className="mt-4 max-w-md sm:max-w-xl text-base sm:text-lg md:text-xl text-gray-300 font-light">
          Shadow Grid helps you simulate solar production and optimize
          peer-to-peer energy sharing between homes — before installation even
          begins.
        </p>
        <Link to="/dashboard">
          <button className="mt-6 sm:mt-8 px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl text-lg transition shadow-lg cursor-pointer hover:text-white">
            Start Planning
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
