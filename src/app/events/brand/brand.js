"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGlassCheers, FaMusic, FaStar, FaMapMarkerAlt, FaBirthdayCake } from "react-icons/fa";
import SignatureIdeas from "@/component/Birthday/Signature-ideas";
import { PackagesComponent } from "@/component/Birthday/Birthday-package";
import { RunSheetNew } from "@/component/Birthday/Run-sheet";
import { BirthdayHeroSection } from "@/component/Birthday/Hero";
import { Cinzel, Montserrat } from "next/font/google";
import { HeroSection } from "@/component/Birthday/Hero";

import BirthdayImg from "/public/assets/img/Event of OC/Conference/Conference1.jpg";



const beachIdeas = [
  {
    id: "golden",
    label: "Check-in",
    icon: "FaCocktail",
    image: "/assets/img/Event of OC/Music/Concert2.jpg",
  },
  {
    id: "villa",
    label: "Social impression",
    icon: "FaBirthdayCake",
    image: "/assets/img/Event of OC/Music/Music.jpg",
  },
  {
    id: "lounge",
    label: " Content volum",
    icon: "FaMask",
    image: "/assets/img/Event of OC/Music/Concert1.jpg",
  },
  {
      id: "beach",
      label: "Lead capture",
      icon: "FaCocktail",
      image: "/assets/img/content_image/beach.jpg",
  },
];

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

export default function BrandPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "Can you align with our brand guidelines?", a: "Yes—fonts, colours, tone and styling are matched precisely; we’ll integrate assets you supply" },
    { q: "Do you manage media and influencers?", a: "We can coordinate RSVPs, briefing notes and content flow; or work with your PR team" },
    { q: "What about staging the ‘reveal’?", a: "We design the moment—lighting cues, audio sting, drape drop or LED content sync" },
    // { q: "Is glass allowed poolside or on the sand?", a: "We offer premium polycarbonate options that look like glass and keep areas safe" },
    // { q: "Noise restrictions?", a: "We design audio to suit venue rules and nearby residents, with agreed cut-off times." },
    // { q: "Do you provide bar service?", a: "Yes—RSA-certified staff with cocktail packages or BYO management." },
    // { q: "What happens if it rains?", a: "We build a weather-safe Plan B (marquee/indoor switch) into every outdoor brief." },
    // { q: "Accessibility considerations?", a: "We’ll ensure access, seating and amenities suit your guests’ needs." },
  ];

  const packages = [
    { name: "Essential", desc: "Venue shortlist, core styling, DJ, basic lighting, photographer (2–3 hrs)", color: "#86489B" },
    { name: "Signature", desc: "Full concept, premium styling/florals, chef menu, DJ + sax, photographer (4–5 hrs)", color: "#F9A825" },
    { name: "Luxe", desc: "Private venue/villa, immersive lighting, feature install, live entertainment, full media team", color: "#A7F3D0" },
  ];

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <HeroSection
        topLabel="Celebrate in Style"
        title="Brand"
        highlightedText="Launch Events"
        description="From product reveals to pop-up brand worlds, we design launch experiences that turn attentioninto advocacy. Expect crisp sound, cinematic lighting, on-brand styling and content capture that lives on long after doors close."
        features={[
          { title: "Curated Themes", desc: "Unique birthday themes tailored to your style and mood." },
          { title: "Premium Venues", desc: "Handpicked venues that match your vision and guest count." },
          { title: "Entertainment", desc: "Live DJs, performers, and interactive experiences." },
          { title: "Seamless Planning", desc: "End-to-end event coordination for stress-free celebrations." },
        ]}
        ctaButtons={[
          { text: "Book Your Event Now", type: "primary" },
          // { text: "Explore Packages", type: "secondary" },
        ]}
        imageSrc={BirthdayImg}
        imageAlt="Birthday Celebration"
        overlayTitle="Sunset Rooftop Party"
        overlayDesc="Downtown · 100 Guests · Premium Experience" />

      {/* WHAT WE HANDLE */}
      <section className="container mx-auto px-6 py-[80px]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`text-[36px] font-[400] text-center mb-10 text-[#BE9545] ${cinzel.className}`}
        >
          What We Handle
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <FaMapMarkerAlt />, title: "Venue Sourcing", text: "Rooftops, waterfront spaces, private villas, boutique bars (Gold Coast & surrounds)." },
            { icon: <FaBirthdayCake />, title: "Catering", text: "Grazing islands, chef-led stations, sit-down courses, late-night snacks." },
            { icon: <FaMusic />, title: "Audio & Visuals", text: "DJ/MC, speech mics, ambient lighting, LED moments, live performers." },
            { icon: <FaStar />, title: "Style & Design", text: "Concepting, mood boards, tablescapes, signage, balloons/installs." },
            { icon: <FaGlassCheers />, title: "Floral & Decor", text: "Coastal luxe arrangements, sculptural pieces, photo-worthy backdrops." },
            { icon: <FaStar />, title: "Photography", text: "Documentary-style coverage, portrait set-ups, highlight reels." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.03,
                rotate: 2,
              }}
              transition={{
                scale: { duration: 0.5, ease: "easeInOut" },
                rotate: { duration: 0 },
              }}
              className="relative p-8 rounded-2xl flex flex-col items-center justify-center text-center
              bg-gradient-to-br from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B] shadow-lg transform-gpu
              hover:shadow-[0_0_30px_rgba(255,209,125,0.2)] transition-all duration-500 ease-in-out border border-[#BE9545]/20"
            >
              {/* Ambient light effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#BE9545]/10 via-[#FFD700]/10 to-[#BE9545]/5 blur-2xl pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-[#BE9545] flex justify-center">{item.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 text-white ${montserrat.className}`}>{item.title}</h3>
                <p className={`text-gray-200 text-sm leading-relaxed ${montserrat.className}`}>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SIGNATURE IDEAS */}
      <SignatureIdeas title="Signature Beach Concepts" ideas={beachIdeas} />

      {/* PACKAGES */}
      {/* <PackagesComponent /> */}

      {/* RunSheet */}
      {/* <RunSheetNew /> */}

      {/* FAQ SECTION */}
      <section className="py-20 bg-[#0B0B0B] text-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-14 text-[#D7B26A]"
            style={{ fontFamily: "var(--font-cinzel-regular)" }}
          >
            FAQs
          </motion.h2>

          {/* Two per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-xl p-6 hover:border-[#D7B26A] transition-all duration-300 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {/* Question Button */}
                <div className="w-full text-left flex justify-between items-center">
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <span className="text-xl">{openFaq === index ? "−" : "+"}</span>
                </div>

                {/* Smooth Expandable Answer */}
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden mt-3"
                    >
                      <motion.p
                        initial={{ y: -6 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400 text-sm leading-relaxed"
                      >
                        {faq.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
