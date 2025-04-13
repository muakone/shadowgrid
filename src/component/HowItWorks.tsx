import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import home from "../assets/home.webp";
import solar from "../assets/solar.jpeg";
import p2p from "../assets/p2p-sharing.png";
import sharing from "../assets/solar-saving.jpeg";
import { Map, Sun, House, ChartColumnIncreasing } from "lucide-react";

const steps = [
  {
    icon: Map,
    title: "Place Homes on Map",
    text: "Simulate your neighborhood by placing homes directly on the map using real GPS locations.",
    image: home,
  },
  {
    icon: Sun,
    title: "Simulate Output",
    text: "Estimate the solar power each home will generate using irradiance data and panel size.",
    image: solar,
  },
  {
    icon: House,
    title: "Connect Homes",
    text: "Automatically suggest which homes should share energy and form a solar-sharing cluster.",
    image: p2p,
  },
  {
    icon: ChartColumnIncreasing,
    title: "View Insights",
    text: "Analyze potential savings, energy efficiency, and export data for installers or planners.",
    image: sharing,
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      id="how"
      ref={ref}
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        How It Works
      </motion.h2>

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Step List */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              layout
              onClick={() => setActive(i)}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className={`rounded-xl p-5 border cursor-pointer transition-all duration-300 ${
                active === i
                  ? "bg-yellow-400/10 border-yellow-400 text-yellow-200"
                  : "bg-gray-800/40 border-gray-700 text-gray-300"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 mb-1">
                <step.icon className="w-6 h-6" />
                <h4 className="text-base font-semibold">{step.title}</h4>
              </div>
              <p className="text-sm">{step.text}</p>

              <div className="lg:hidden mt-4">
                <AnimatePresence>
                  {active === i && (
                    <motion.img
                      key={step.image}
                      src={step.image}
                      alt={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-xl w-full object-contain max-h-[300px] border border-gray-700"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={steps[active].image}
              src={steps[active].image}
              alt={steps[active].title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl w-full max-h-[400px] object-contain border border-gray-700"
            />
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
