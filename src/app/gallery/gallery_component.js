"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/component/Title";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Example images
import GalleryImg1 from "/public/assets/img/content_image/2283609.jpg";
import GalleryImg2 from "/public/assets/img/content_image/5e4c014e-45f2-4d0e-bc46-c7474b26b367.jpg";
import GalleryImg3 from "/public/assets/img/content_image/6347dab01e23fef85fb0d3f8_63457b651fc7f5b5a272591f_See+how+to+stop+slow+nights+with+these+restaurant+and+bar+event+ideas.jpg";
import GalleryImg4 from "/public/assets/img/content_image/81z6UCSU5YL.jpg";
import GalleryImg5 from "/public/assets/img/content_image/a-microphone-in-focus-with-blurred-bokeh-lights-in-the-background-creating-a-vibrant-nightlife-atmosphere.-16727451-scaled-e1737059691145.jpg";
import GalleryImg6 from "/public/assets/img/content_image/2283609.jpg";

import { Cinzel, Montserrat } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-cinzel",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
});

const GalleryComponent = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery data
  const galleryData = {
    all: [GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4, GalleryImg5, GalleryImg6, GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4, GalleryImg5, GalleryImg6],
    events: [GalleryImg1, GalleryImg3],
    products: [GalleryImg2],
    wedding: [GalleryImg1],
  };

  // Convert Next.js image imports to plain URLs for lightbox
  const gallerySrc = galleryData[activeTab].map((img) => img.src);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="mt-[100px] container mx-auto px-6 py-[60px]">
      <SectionHeader title="Gallery" />

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-14">
        {["all", "events", "products", "wedding"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 cursor-pointer
              ${activeTab === tab
                ? "text-black"
                : "bg-gray-800 text-gray-300 hover:bg-[#BE9545]/20"
              }`}
            style={{
              fontFamily: "var(--font-montserrat)",
              background: activeTab === tab
                ? "linear-gradient(to bottom, #BE9545, #7A5E39)"
                : undefined
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 auto-rows-[220px]">
        {galleryData[activeTab].map((img, idx) => (
          <motion.div
            key={idx}
            className={`relative overflow-hidden rounded-2xl shadow-md group cursor-pointer ${idx === 0
              ? "md:col-span-2 md:row-span-2"
              : "md:col-span-1 md:row-span-1"
              }`}
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(idx)}
          >
            <Image
              src={img}
              alt={`Gallery ${idx}`}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              placeholder="blur"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-white bg-black/40 backdrop-blur-sm text-white font-semibold text-lg transition-transform duration-300">
                View
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentIndex}
          slides={gallerySrc.map((src) => ({ src }))}
          on={{ view: ({ index }) => setCurrentIndex(index) }}
        />
      )}
    </div>
  );
};

export default GalleryComponent;
