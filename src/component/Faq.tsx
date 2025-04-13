import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does ShadowGrid work?",
    answer:
      "ShadowGrid simulates solar energy sharing before installation. It analyzes sunlight, consumption, and home placement to recommend the most efficient setup.",
  },
  {
    question: "Can I use ShadowGrid without solar panels installed yet?",
    answer:
      "Yes! ShadowGrid is designed to help you plan *before* any panels are installed so you know where and how to place them for optimal sharing.",
  },
  {
    question: "What data do I need to use ShadowGrid?",
    answer:
      "You'll need the GPS location of each home, their roof orientation, and an estimate of daily energy consumption.",
  },
  {
    question: "What makes ShadowGrid different from regular solar planning tools?",
    answer:
      "We simulate peer-to-peer sharing and suggest solar hubs, making your solar community more efficient before installation.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white font-sans"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-2">Got Questions?</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Here’s everything you need to know before planning your solar setup with ShadowGrid.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-xl bg-gray-900 overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left px-5 py-4 focus:outline-none hover:bg-gray-800 transition"
            >
              <span className="text-sm md:text-base font-medium text-white">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-yellow-400 w-5 h-5" />
              ) : (
                <ChevronDown className="text-yellow-400 w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <motion.div
                className="px-5 pb-4 text-sm text-gray-400"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
