"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

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

const EVENTS = [
    {
        id: "birthday",
        title: "Birthday: Rooftop Golden Hour",
        subtitle: "Sax + DJ • Champagne Tower • Sparkler Cake Reveal",
        bullets: [
            "Golden-hour rooftop ambiance with sunset tones",
            "Live saxophonist and DJ performance",
            "Champagne tower & sparkler cake reveal",
        ],
        img: "/assets/img/content_image/5e4c014e-45f2-4d0e-bc46-c7474b26b367.jpg",
    },
    {
        id: "beach",
        title: "Beach & Pool: Cabana Club",
        subtitle: "Hydration Bar • Sunset Portraits • Weather-rated Audio",
        bullets: [
            "Luxury cabanas and lounge zones",
            "Hydration & mocktail bar with signature station",
            "Weather-rated audio and discreet power setup",
            "Sunset portraits with dedicated lighting kit",
        ],
        img: "/assets/img/content_image/6347dab01e23fef85fb0d3f8_63457b651fc7f5b5a272591f_See+how+to+stop+slow+nights+with+these+restaurant+and+bar+event+ideas.jpg",
    },
    {
        id: "brand",
        title: "Brand Launch: LED Reveal",
        subtitle: "Hero Product • Choreographed Reveal • Media Moments",
        bullets: [
            "Synchronized LED visuals and launch cues",
            "Hero product platform for perfect reveal moments",
            "Media-friendly lighting and press content staging",
        ],
        img: "/assets/img/content_image/81z6UCSU5YL.jpg",
    },
    {
        id: "music",
        title: "Music Night: Engineered Performance",
        subtitle: "Lighting • PA • Artist Rider Management",
        bullets: [
            "Engineered PA & lighting systems",
            "Stage design for live artists and DJs",
            "Artist rider management & logistics",
        ],
        img: "/assets/img/content_image/a-microphone-in-focus-with-blurred-bokeh-lights-in-the-background-creating-a-vibrant-nightlife-atmosphere.-16727451-scaled-e1737059691145.jpg",
    },
    {
        id: "custom",
        title: "Custom Events: Immersive Worlds",
        subtitle: "Secret Suppers • Island Decks • One-Night Worlds",
        bullets: [
            "Immersive design concepts tailored to themes",
            "Secret supper clubs & curated dining experiences",
            "Island-deck builds and pop-up environments",
        ],
        img: "/assets/img/content_image/2283609.jpg",
    },
];

export default function EventsDesign() {
    const [openId, setOpenId] = useState(null);
    const active = openId ? EVENTS.find((x) => x.id === openId) ?? null : null;

    return (
        <section className="relative py-20 bg-[#0B0B0B] text-white overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 -z-10">
                {/* Radial light glows */}
                <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#C8A2FF]/20 blur-[140px] animate-pulse"></div>
                <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] rounded-full bg-[#F9A825]/10 blur-[120px] animate-pulse"></div>

                {/* Floating shimmer particles */}
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
                        initial={{
                            x: Math.random() * 1600 - 800,
                            y: Math.random() * 800 - 400,
                            opacity: Math.random() * 0.3 + 0.2,
                        }}
                        animate={{
                            y: ["0%", "-200%"],
                            opacity: [0.2, 0, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 6,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-[36px] font-[400] text-[#BE9545] mb-2 tracking-wide"
                    style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                    A Taste of What We Create
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-400 text-[16px] mb-10"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    How we bring vision to reality — structured, seamless, and soulful.
                </motion.p>


                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {EVENTS.map((ev, i) => (
                        <motion.div
                            key={ev.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            // whileHover={{ scale: 1.05, y: -5 }}
                            onClick={() => setOpenId(ev.id)}
                            className="relative group rounded-2xl overflow-hidden bg-[#111]/70 border border-gray-800 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-500"
                        >
                            {/* Card Image */}
                            <div className="relative w-full h-60 overflow-hidden">
                                <Image
                                    src={ev.img}
                                    alt={ev.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Card Content */}
                            <div className="relative z-10 p-6 text-left">
                                <h3 className={`text-xl font-semibold mb-1 ${montserrat.className}`}>{ev.title}</h3>
                                <p className={`text-gray-400 text-sm ${montserrat.className}`}>{ev.subtitle}</p>
                            </div>

                            {/* Hover ambient glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(200,162,255,0.1),transparent_80%)]"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {active && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6 pt-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpenId(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="relative bg-[#111]/90 border border-gray-700 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl backdrop-blur-lg"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setOpenId(null)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white z-20"
                                >
                                    <FaTimes className="text-xl" />
                                </button>

                                {/* Modal Image */}
                                <div className="relative w-full h-64">
                                    <Image
                                        src={active.img}
                                        alt={active.title}
                                        fill
                                        className="object-cover rounded-t-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                </div>

                                {/* Modal Content */}
                                <div className="p-8 text-left">
                                    <h3 className={`text-3xl font-bold mb-3 text-[#F9A825] ${montserrat.className}`}>
                                        {active.title}
                                    </h3>
                                    <p className={`text-gray-400 mb-6 text-sm`}>{active.subtitle}</p>
                                    <ul className={`space-y-2 list-disc pl-5 text-gray-300`}>
                                        {active.bullets.map((b, i) => (
                                            <li key={i} className="leading-relaxed">{b}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
