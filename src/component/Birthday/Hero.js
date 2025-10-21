"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BirthdayHeroImg from "/public/assets/img/content_image/2283609.jpg";
import { Cinzel, Montserrat } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

export const BirthdayHeroSection = () => {
  return (
    <section className="relative overflow-hidden mt-[100px] py-[50px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#111111] to-[#0B0B0B]" />

      {/* Ambient Glows */}
      <div className="absolute -top-36 -left-36 w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-[#BE9545]/20 blur-[120px] md:blur-[180px] rounded-full" />
      <div className="absolute -bottom-36 -right-36 w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-[#BE9545]/10 blur-[120px] md:blur-[180px] rounded-full" />

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left"
        >
          <span
            className="uppercase tracking-[0.2em] text-[#BE9545] text-xs sm:text-sm font-semibold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Celebrate in Style
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] leading-tight text-white font-semibold mt-3 mb-4 md:mb-5"
            style={{ fontFamily: "var(--font-cinzel-regular)" }}
          >
            Magical <span className="text-[#BE9545]">Birthday Events</span> for Everyone
          </h2>

          <p
            className="text-gray-400 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.7] mb-6 md:mb-8 text-justify"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            From intimate private gatherings to grand celebrations, we curate unforgettable birthday experiences with exquisite décor, premium catering, live entertainment, and seamless logistics.
          </p>

          {/* Highlight Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
            {[
              { title: "Curated Themes", desc: "Unique birthday themes tailored to your style and mood." },
              { title: "Premium Venues", desc: "Handpicked venues that match your vision and guest count." },
              { title: "Entertainment", desc: "Live DJs, performers, and interactive experiences." },
              { title: "Seamless Planning", desc: "End-to-end event coordination for stress-free celebrations." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="border-l-4 border-[#BE9545] pl-3 sm:pl-4 py-2"
              >
                <h4
                  className="text-white text-sm sm:text-[16px] md:text-[17px] font-semibold mb-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-gray-400 text-xs sm:text-[14px] md:text-[15px]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-row flex-wrap gap-4 justify-start">
            <motion.button
              className="px-6 sm:px-8 py-2 sm:py-3 bg-[#BE9545] text-black rounded-full font-medium tracking-wide hover:bg-[#A67C33] transition-all duration-300 cursor-pointer text-sm sm:text-base"
            >
              Book Your Event Now
            </motion.button>

            <motion.button
              className="px-6 sm:px-8 py-2 sm:py-3 border border-[#BE9545] text-[#BE9545] rounded-full font-medium tracking-wide hover:bg-[#FFD700]/10 transition-all duration-300 cursor-pointer text-sm sm:text-base"
            >
              Explore Packages
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT: Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center w-full"
        >
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[25px] md:rounded-[30px] border border-[#FFD700]/30 shadow-2xl group w-full max-w-full md:max-w-[500px]">
            <Image
              src={BirthdayHeroImg}
              alt="Birthday Celebration"
              className="object-cover w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] transition-transform duration-700 group-hover:scale-105 rounded-[20px] sm:rounded-[25px] md:rounded-[30px]"
              quality={100}
              placeholder="blur"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-4 sm:p-6">
              <div>
                <h4
                  className="text-white text-lg sm:text-xl md:text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                  Sunset Rooftop Party
                </h4>
                <p
                  className="text-[#BE9545] text-xs sm:text-sm md:text-base"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Downtown · 100 Guests · Premium Experience
                </p>
              </div>
            </div>
          </div>

          {/* Floating Glow Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute -bottom-6 -right-6 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 bg-[#FFD700]/40 blur-2xl rounded-full"
          />
        </motion.div>

      </div>
    </section>
  );
};
