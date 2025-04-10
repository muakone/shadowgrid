import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
          Ready to Plan Smarter Solar Sharing?
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8">
        Don’t just install solar, optimize it!. Start building smarter, connected solar communities with ShadowGrid today.
        </p>

        <a
          href="#how"
          className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl text-base md:text-lg hover:bg-yellow-500 hover:text-white transition duration-300 shadow-md"
        >
          Start Planning Now
        </a>
      </motion.div>
    </section>
  );
};

export default CTASection;
