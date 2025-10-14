"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace with your actual asset
import VenueImg from "/public/assets/img/service/service_two.png";

const VenueSourcingComponent = () => {
  return (
    <section className="relative overflow-hidden mt-[100px] py-[120px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#111111] to-[#0B0B0B]" />
      {/* Ambient Glows */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-[#BE9545]/20 blur-[180px] rounded-full" />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-[#BE9545]/10 blur-[180px] rounded-full" />

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span
            className="uppercase tracking-[0.3em] text-[#BE9545] text-sm font-semibold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Our Expertise
          </span>

          <h2
            className="text-[36px] md:text-[48px] leading-tight text-white font-semibold mt-3 mb-5"
            style={{ fontFamily: "var(--font-cinzel-regular)" }}
          >
            Venue <span className="text-[#BE9545]">Sourcing</span> Made Effortless
          </h2>

          <p
            className="text-gray-400 text-[16px] md:text-[17px] leading-[1.8] mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            From royal palaces to minimalist rooftops — our expert venue scouts
            specialize in finding spaces that perfectly reflect your event’s
            purpose, tone, and style. We handle every detail, from initial research
            to final negotiations, ensuring a seamless and stress-free process.
          </p>

          <p
            className="text-gray-400 text-[16px] md:text-[17px] leading-[1.8] mb-8"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Our curated list of exclusive venues includes hidden gems, 5-star
            hotels, private estates, and cultural landmarks — all vetted for
            ambience, accessibility, and service quality.
          </p>

          {/* Highlight Features */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: "500+ Venues", desc: "Across luxury, corporate & outdoor" },
              { title: "24/7 Support", desc: "Dedicated event specialists" },
              { title: "Custom Packages", desc: "Tailored to your style & budget" },
              { title: "Exclusive Access", desc: "Private & premium spaces" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="border-l-4 border-[#BE9545] pl-4"
              >
                <h4
                  className="text-white text-[17px] font-semibold"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-gray-400 text-[15px]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-[#BE9545] text-white rounded-full font-medium tracking-wide hover:bg-[#a7843e] transition-all duration-300"
            >
              Explore Venues
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-[#BE9545] text-[#BE9545] rounded-full font-medium tracking-wide hover:bg-[#BE9545]/10 transition-all duration-300"
            >
              Contact Our Team
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT: Image Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[30px] border border-[#BE9545]/30 shadow-2xl group">
            <Image
              src={VenueImg}
              alt="Venue Sourcing"
              className="object-cover w-full h-[500px] transition-transform duration-700 group-hover:scale-105"
              quality={100}
              placeholder="blur"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
              <div>
                <h4
                  className="text-white text-xl font-semibold"
                  style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                  Grand Royal Ballroom
                </h4>
                <p
                  className="text-[#BE9545] text-sm"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Downtown · 800 Guests · 5-Star Rated
                </p>
              </div>
            </div>
          </div>

          {/* Floating Glow Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute -bottom-8 -right-8 w-28 h-28 bg-[#BE9545]/40 blur-2xl rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSourcingComponent;
