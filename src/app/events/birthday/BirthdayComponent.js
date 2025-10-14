"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Example images (replace with yours)
import BirthdayImg from "/public/assets/img/service/service_one.png";

const BirthdayComponent = () => {
  return (
    <section className="relative overflow-hidden mt-[100px] py-[120px]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      <div className="absolute -top-52 -left-40 w-[400px] h-[400px] bg-[#BE9545]/20 blur-[180px] rounded-full" />
      <div className="absolute -bottom-52 -right-40 w-[400px] h-[400px] bg-[#BE9545]/10 blur-[180px] rounded-full" />

      {/* Floating Accent Lights */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-10 h-10 bg-[#BE9545]/30 blur-lg rounded-full"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-[#BE9545]/20 blur-2xl rounded-full"
      />

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-16 items-center container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[30px] shadow-2xl border border-[#BE9545]/30 group">
            <Image
              src={BirthdayImg}
              alt="Luxury Birthday Event"
              className="object-cover w-full h-[480px] transition-transform duration-700 ease-in-out group-hover:scale-105"
              quality={100}
              placeholder="blur"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
              <div>
                <h4
                  className="text-white text-xl font-semibold"
                  style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                  Golden Hour Celebration
                </h4>
                <p
                  className="text-[#BE9545] text-sm"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Beachfront · 120 Guests · Live Music
                </p>
              </div>
            </div>
          </div>

          {/* Glow Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute -top-8 -left-8 w-24 h-24 bg-[#BE9545]/40 blur-xl rounded-full"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span
            className="uppercase tracking-[0.3em] text-[#BE9545] text-sm font-semibold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Special Occasions
          </span>

          <h2
            className="text-[36px] md:text-[48px] leading-tight text-white font-semibold mt-3 mb-5"
            style={{ fontFamily: "var(--font-cinzel-regular)" }}
          >
            Birthday <span className="text-[#BE9545]">Celebrations</span>
          </h2>

          <p
            className="text-gray-400 leading-[1.8] text-[16px] md:text-[17px] mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Whether it’s an intimate gathering or a high-energy night under the stars,
            we craft birthday experiences that are vibrant, elegant, and deeply
            personal. From concept to confetti, our team ensures your celebration
            reflects who you are — bold, joyful, and unforgettable.
          </p>

          <p
            className="text-gray-400 leading-[1.8] text-[16px] md:text-[17px] mb-10"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Our creative planners handle every detail — theme design, entertainment,
            catering, and decor — while you focus on making memories that last a
            lifetime.
          </p>

          {/* Feature Highlights */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: "Custom Themes", desc: "From glam to boho & neon" },
              { title: "Entertainment", desc: "DJs, live bands & dancers" },
              { title: "Luxury Decor", desc: "Bespoke setups & lighting" },
              { title: "360° Planning", desc: "We handle every detail" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
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
              Plan My Event
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-[#BE9545] text-[#BE9545] rounded-full font-medium tracking-wide hover:bg-[#BE9545]/10 transition-all duration-300"
            >
              View Gallery
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdayComponent;
