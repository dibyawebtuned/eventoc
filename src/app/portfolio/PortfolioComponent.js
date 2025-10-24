"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/component/Title";
// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Project images
import Project1a from "/public/assets/img/Event of OC/Conference/Conference.jpg";
import Project1b from "/public/assets/img/Event of OC/Music/DJ.jpg";
import Project1c from "/public/assets/img/Event of OC/Places/Opera-House.jpg";
import Project1d from "/public/assets/img/Event of OC/Anniversary/Wine.jpg";
import Project1e from "/public/assets/img/Event of OC/Birthday/Birthday Celebration.jpg";

import { Cinzel, Montserrat } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "700", "900"],
  variable: "--font-cinzel",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "700", "900"],
  variable: "--font-montserrat",
});

const projects = [
  {
    title: "Private Birthday at The Island Rooftop",
    short_description:
      "Events OC secured a private rooftop space at The Island for a client’s birthday, accommodating up to 20 guests. The booking was confirmed within a single day, even on a weekend",
    description:
      "Events OC secured a private rooftop space at The Island for a client’s birthday, accommodating up to 20 guests. The booking was confirmed within a single day, even on a weekend, and included complimentary arrival shots for the group, negotiated as part of the package. The celebration was seamless, and guests left with an unforgettable experience.",
    images: [Project1a, Project1b, Project1c, Project1d, Project1e, Project1e],
    reviews: [
      {
        name: "John Doe",
        rating: 5,
        comment: "Amazing experience! Everything was perfect.",
      },
      {
        name: "Jane Smith",
        rating: 4.5,
        comment: "Very smooth booking and great venue.",
      },
    ],
    date: "June 2025",
  },
];

const PortfolioComponent = () => {
  const [activeTabs, setActiveTabs] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);

  const handleTabClick = (index, tab) => {
    setActiveTabs((prev) => ({ ...prev, [index]: tab }));
  };

  const openLightbox = (images, index) => {
    setLightboxImages(images.map((img) => ({ src: img.src || img })));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="mt-[80px] container mx-auto px-6 py-[60px]">
      <SectionHeader title="Portfolio" />

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        index={lightboxIndex}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
      />

      <div className="flex flex-col gap-16 mt-12 items-center">
        {projects.map((project, index) => {
          const activeTab = activeTabs[index] || "Description";
          const isHovered = hoveredCard === index;

          return (
            <div
              key={index}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl shadow-2xl bg-[#111] transition-all duration-500"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main image */}
              <div className="relative w-full h-[320px] md:h-[360px] lg:h-[400px]">
                <Image
                  src={project.images[1]}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-3xl transition-transform duration-500"
                  quality={100}
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw,
                          (max-width: 768px) 100vw,
                          (max-width: 1024px) 800px,
                          1200px"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-3xl" />

                {/* Overlay with tabs */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 bg-black/90 flex flex-col justify-start p-6 z-20 rounded-3xl border border-[#7A5E39] backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Tabs */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        {["Description", "Images", "Reviews"].map((tab) => (
                          <motion.button
                            key={tab}
                            onClick={() => handleTabClick(index, tab)}
                            className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === tab
                              ? "bg-[#D7B26A] text-black shadow-lg"
                              : "bg-gray-700 text-gray-300"
                              }`}
                          >
                            {tab}
                          </motion.button>
                        ))}
                      </div>

                      {/* Tab content */}
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                        className="text-white mt-2 text-[15px] md:text-[16px] font-montserrat overflow-auto"
                      >
                        {activeTab === "Description" && <p className={`${montserrat.className} text-justify`}>{project.description}</p>}

                        {activeTab === "Images" && (
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-2">
                            {project.images.map((img, idx) => (
                              <div
                                key={idx}
                                className="w-full aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer"
                                onClick={() => openLightbox(project.images, idx)}
                              >
                                <Image
                                  src={img}
                                  alt={`${project.title} image ${idx + 1}`}
                                  className="object-cover w-full h-full"
                                  placeholder="blur"
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        {activeTab === "Reviews" && (
                          <div className="flex flex-col gap-4 mt-2">
                            {project.reviews.map((review, idx) => (
                              <motion.div
                                key={idx}
                                className="bg-gray-800/70 p-4 rounded-xl shadow-lg flex flex-col md:flex-row items-start md:items-center gap-4 hover:bg-gray-700/80 transition-colors duration-300"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                              >
                                {/* Avatar / Initials */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D7B26A] text-black font-semibold text-lg">
                                  {review.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </div>

                                {/* Review Content */}
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <h4 className={`font-semibold text-white ${montserrat.className}`}>{review.name}</h4>
                                    <div className="flex items-center gap-1">
                                      {Array.from({ length: 5 }).map((_, starIdx) => (
                                        <svg
                                          key={starIdx}
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill={
                                            starIdx < Math.floor(review.rating)
                                              ? "#FFD700"
                                              : starIdx < review.rating
                                                ? "url(#halfStar)"
                                                : "#555"
                                          }
                                          className="w-4 h-4"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.18 3.625a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.18 3.625c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.784.57-1.838-.197-1.539-1.118l1.18-3.625a1 1 0 00-.364-1.118L2.15 9.052c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.18-3.625z" />
                                        </svg>
                                      ))}
                                    </div>
                                  </div>
                                  <p className={`text-gray-200 text-sm ${montserrat.className}`}>{review.comment}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}

                      </motion.div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Text overlay (bottom) */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10 bg-gradient-to-t from-black/90 to-transparent rounded-b-3xl transition-all duration-500">
                {/* Date */}
                <div className="flex items-center mt-2 gap-1 text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-[#D7B26A]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 7.5h18M4.5 7.5v11.25a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V7.5M4.5 7.5h15"
                    />
                  </svg>
                  <span className={`text-[#D7B26A] ${montserrat.className}`}>{project.date}</span>
                </div>

                {/* Title */}
                <h3 className={`text-[26px] md:text-[28px] font-medium mb-1 tracking-wide`}
                  style={{ fontFamily: "var(--font-cinzel-regular)" }} >
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className={`text-gray-300 text-[14px] md:text-[15px] ${montserrat.className}`}>
                  {project.short_description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioComponent;
