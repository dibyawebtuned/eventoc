"use client";

import { motion } from "framer-motion";
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

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function VenueStyles({
  title = "Venue Styles We Love",
  subtitle = "How we bring vision to reality — structured, seamless, and soulful.",
  venues = [],
}) {
  return (
    <section className="relative py-[80px] overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0B0B0A] via-[#141312] to-[#0A0908]" />

      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle at 25% 35%, rgba(220,190,130,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(230,200,150,0.06) 0%, transparent 70%)",
            "radial-gradient(circle at 70% 25%, rgba(220,190,130,0.08) 0%, transparent 60%), radial-gradient(circle at 30% 80%, rgba(230,200,150,0.06) 0%, transparent 70%)",
            "radial-gradient(circle at 25% 35%, rgba(220,190,130,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(230,200,150,0.06) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent -z-10" />

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`${cinzel.className} text-[36px] font-[400] mb-2 text-white tracking-wide`}
        >
          {title.split(" ").map((word, i) =>
            word.toLowerCase() === "styles" ? (
              <span key={i} className="text-[#D8B46E]">{` ${word} `}</span>
            ) : (
              ` ${word} `
            )
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-[16px] mb-10"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {subtitle}
        </motion.p>

        {/* Venue Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {venues.map(({ name, icon: Icon }, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-2xl bg-gradient-to-b from-[#1A1A18]/80 to-[#0E0E0D]/70 border border-[#CBAE75]/20 hover:border-[#D8B46E]/60 transition-all duration-300 p-8 flex flex-col items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-[0_0_20px_rgba(216,180,110,0.15)] backdrop-blur-sm"
            >
              <Icon className="w-10 h-10 mb-4 text-[#D8B46E]" strokeWidth={1.4} />
              <p
                className={`${montserrat.className} text-lg font-medium tracking-wide text-[#F6F2E7]`}
              >
                {name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
