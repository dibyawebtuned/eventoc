"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "@/component/Title";

const faqData = [
  {
    question: "What is the purpose of this application?",
    answer:
      "This application automatically generates educational questions, helping students study and practice efficiently with minimal manual effort.",
  },
  {
    question: "Which technologies are used?",
    answer:
      "The project is built using Next.js for the frontend, Django for the backend, and MySQL for structured database management.",
  },
  {
    question: "Is it mobile responsive?",
    answer:
      "Yes, the application is fully optimized for all devices — ensuring a seamless experience across mobile, tablet, and desktop screens.",
  },
  {
    question: "Can I customize the generated questions?",
    answer:
      "Absolutely. You can define specific parameters and preferences to tailor the generated questions to your subject, difficulty, and format needs.",
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-[100px] container mx-auto px-4 py-10">
      <SectionHeader title="Frequently Asked Questions" />

      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold text-white tracking-wide">
                {item.question}
              </span>
              <span className="text-[#BE9545] transition-transform duration-300">
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-gray-300 text-[15px] leading-relaxed border-t border-gray-700">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
