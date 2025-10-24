"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/component/Title";
import AOS from "aos";
import "aos/dist/aos.css";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Example images
import GalleryImg1 from "/public/assets/img/Event of OC/Anniversary/Champagne.jpg";
import GalleryImg2 from "/public/assets/img/Event of OC/Birthday/Birthday celebration 2.jpg";
import GalleryImg3 from "/public/assets/img/Event of OC/Music/Concert.jpg";
import GalleryImg4 from "/public/assets/img/Event of OC/Anniversary/Pink-Wine.jpg";
import GalleryImg5 from "/public/assets/img/Event of OC/Places/Opera-House.jpg";
import GalleryImg6 from "/public/assets/img/Event of OC/Wedding/Bottle opening.jpg";

import annivarsary_one from "/public/assets/img/Event of OC/Anniversary/Drink.jpg";
import annivarsary_two from "/public/assets/img/Event of OC/Anniversary/Champagne.jpg";
import annivarsary_three from "/public/assets/img/Event of OC/Anniversary/Drinks.jpg";
import annivarsary_four from "/public/assets/img/Event of OC/Anniversary/Pink-Wine.jpg";


import birthday_one from "/public/assets/img/Event of OC/Birthday/Birthday Celebration 1.jpg";
import birthday_two from "/public/assets/img/Event of OC/Birthday/Birthday celebration 2.jpg";
import birthday_three from "/public/assets/img/Event of OC/Birthday/Birthday celebration 3.jpg";
import birthday_four from "/public/assets/img/Event of OC/Birthday/Birthday Celebration.jpg";


import conference_one from "/public/assets/img/Event of OC/Conference/Conference.jpg";
import conference_two from "/public/assets/img/Event of OC/Conference/Conference1.jpg";




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

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // Gallery data
  const galleryData = {
    all: [annivarsary_one, annivarsary_two, annivarsary_three, annivarsary_four, birthday_one, birthday_two, birthday_three, birthday_four, conference_one, conference_two],
    Anniversary: [annivarsary_one, annivarsary_two, annivarsary_three, annivarsary_four],
    Birthday: [birthday_one, birthday_two, birthday_three, birthday_four],
    Conference: [conference_one, conference_two],
  };

  // Convert Next.js image imports to plain URLs for lightbox
  const gallerySrc = galleryData[activeTab.toLowerCase()]?.map((img) => img.src) || [];


  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="mt-[100px] container mx-auto px-6 py-[60px]">
      <div data-aos="fade-up" data-aos-delay="100">
        <SectionHeader title="Gallery" />
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-14"
        data-aos="fade-up"
        data-aos-delay="200">
        {["All", "Anniversary", "Birthday", "Conference"].map((tab) => (
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
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 auto-rows-[220px]"
        data-aos="fade-up"
        data-aos-delay="300">
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
