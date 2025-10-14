"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/component/Title";

// Example images
import GalleryImg1 from "/public/assets/img/service/service_one.png";
import GalleryImg2 from "/public/assets/img/service/service_two.png";
import GalleryImg3 from "/public/assets/img/service/service_three.png";
import GalleryImg4 from "/public/assets/img/service/service_three.png";
import GalleryImg5 from "/public/assets/img/service/service_three.png";
import GalleryImg6 from "/public/assets/img/service/service_two.png";
import GalleryImg7 from "/public/assets/img/service/service_one.png";
import GalleryImg8 from "/public/assets/img/service/service_three.png";
import GalleryImg9 from "/public/assets/img/content_image/2283609.jpg";
import GalleryImg10 from "/public/assets/img/content_image/5e4c014e-45f2-4d0e-bc46-c7474b26b367.jpg";
import GalleryImg11 from "/public/assets/img/content_image/81z6UCSU5YL.jpg";
import GalleryImg12 from "/public/assets/img/content_image/a-microphone-in-focus-with-blurred-bokeh-lights-in-the-background-creating-a-vibrant-nightlife-atmosphere.-16727451-scaled-e1737059691145.jpg";

const GalleryComponent = () => {
  const [activeTab, setActiveTab] = useState("all");

  const galleryData = {
    all: [GalleryImg1, GalleryImg2, GalleryImg3, GalleryImg4, GalleryImg5, GalleryImg6, GalleryImg7, GalleryImg8, GalleryImg9, GalleryImg10, GalleryImg11, GalleryImg12],
    events: [GalleryImg1, GalleryImg3, GalleryImg4],
    products: [GalleryImg2],
    wedding: [GalleryImg5],
  };

  return (
    <div className="mt-[100px] container mx-auto px-6 py-[60px]">
      {/* Title */}
      <SectionHeader title="Gallery" />

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-14">
        {["all", "events", "products", "wedding"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 text-sm md:text-base rounded-full transition-all duration-300 font-medium tracking-wide ${activeTab === tab
              ? "bg-[#D7B26A] text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* ✨ Bento Grid - Modern Balanced Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 auto-rows-[220px]">
        {galleryData[activeTab].map((img, idx) => (
          <motion.div
            key={idx}
            className={`relative overflow-hidden rounded-2xl shadow-md group ${idx === 0
              ? "md:col-span-2 md:row-span-2"
              : idx === 1
                ? "md:col-span-1 md:row-span-1"
                : idx === 2
                  ? "md:col-span-2 md:row-span-1"
                  : idx === 3
                    ? "md:col-span-1 md:row-span-2"
                    : idx === 4
                      ? "md:col-span-2 md:row-span-1"
                      : "md:col-span-1 md:row-span-1"
              }`}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={img}
              alt={`Gallery ${idx}`}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              quality={100}
              placeholder="blur"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <h3
                  className="text-white text-lg font-medium mb-1"
                  style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                  Timeless Elegance
                </h3>
                <p
                  className="text-gray-200 text-sm"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Crafted with perfection
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
