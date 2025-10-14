"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/component/Title";

// Project images
import Project1 from "/public/assets/img/service/service_one.png";
import Project2 from "/public/assets/img/service/service_two.png";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A modern e-commerce platform with a sleek interface, secure payments, and a smooth shopping experience.",
    image: Project1,
  },
  {
    title: "Portfolio Website",
    description:
      "A clean, responsive portfolio site that highlights creativity, minimalism, and elegant design principles.",
    image: Project2,
  },
];

const PortfolioComponent = () => {
  return (
    <div className="mt-[100px] container mx-auto px-6 py-[60px]">
      {/* Header */}
      <SectionHeader title="Portfolio" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-md bg-[#111] hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.02 }}
          >
            {/* Image */}
            <div className="relative w-full h-[360px]">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                quality={100}
                placeholder="blur"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Text overlay (bottom) */}
            <div className="absolute bottom-0 left-0 p-6 text-white transition-all duration-500 group-hover:translate-y-[-10px]">
              <h3
                className="text-[26px] font-semibold mb-2 tracking-wide"
                style={{ fontFamily: "var(--font-cinzel-regular)" }}
              >
                {project.title}
              </h3>
              <p
                className="text-gray-300 text-[15px] leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {project.description}
              </p>
            </div>

            {/* Subtle gradient border on hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-[#D7B26A]/60 rounded-2xl transition-all duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioComponent;
