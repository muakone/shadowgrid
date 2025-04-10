import React from "react";
import { motion } from "framer-motion";
import { BrainCog, Share2, Wallet, LineChart } from "lucide-react";

const reasons = [
  {
    icon: BrainCog,
    title: "Smarter Solar Planning",
    text: "Simulate energy output and installation strategy before placing a single panel, reducing guesswork and improving accuracy.",
  },
  {
    icon: Share2,
    title: "Peer-to-Peer Energy Sharing",
    text: "Connect homes intelligently into microgrids that reduce energy waste and allow for shared solar power across neighborhoods.",
  },
  {
    icon: Wallet,
    title: "Cost Efficient Installs",
    text: "ShadowGrid helps avoid overbuying or poor placement of panels, saving on hardware, labor, and long-term maintenance.",
  },
  {
    icon: LineChart,
    title: "Insightful Energy Analytics",
    text: "Track simulated performance, export installer-ready plans, and make informed choices backed by clean solar data.",
  },
];

const WhyShadowGrid = () => {
  return (
    <section
      id="why"
      className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-yellow-400 mb-16 text-center"
      >
        Why ShadowGrid?
      </motion.h2>

      <div className="relative border-l-2 border-yellow-400/20 pl-6 sm:pl-8 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto space-y-12">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[34px] sm:-left-[38px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 bg-yellow-400/10 border border-yellow-400/40 rounded-full flex items-center justify-center text-yellow-300">
              <reason.icon className="w-4 h-4" />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-yellow-300 mb-1">
                {reason.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyShadowGrid;
