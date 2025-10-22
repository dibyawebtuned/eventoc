"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import * as Icons from "react-icons/fa";
import { Cinzel, Montserrat } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function SignatureIdeas({ title = "Signature Birthday Concepts", ideas = [] }) {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="relative py-[80px] bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a] text-white overflow-visible">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(190,149,69,0.08),transparent_70%)]" />

            <div className="relative max-w-6xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-[400] mb-10 tracking-wide text-[#BE9545] ${cinzel.className}`}
                >
                    {title}
                </h2>

                {/* Idea Selector */}
                <div className="flex flex-wrap justify-center gap-6 relative z-10">
                    {ideas.map((idea) => {
                        const Icon = Icons[idea.icon] || Icons.FaCocktail; // fallback icon
                        return (
                            <div key={idea.id} className="relative flex flex-col items-center">
                                <motion.button
                                    onMouseEnter={() => setHoveredId(idea.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    whileHover={{ scale: 1.05, rotate: 1.5 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`group relative flex flex-col items-center justify-center w-[140px] sm:w-[150px] md:w-[160px] h-[140px] sm:h-[150px] md:h-[160px] rounded-2xl border transition-all duration-300
                                    bg-[#1b1b1b] border-[#333] text-[#BE9545] hover:border-[#BE9545]/60 hover:bg-[#262626]`}
                                >
                                    <div className="text-4xl mb-3">
                                        <Icon />
                                    </div>
                                    <span
                                        className={`font-semibold text-sm sm:text-base md:text-[16px] ${montserrat.className}`}
                                    >
                                        {idea.label}
                                    </span>
                                </motion.button>

                                {/* Hover Image Beneath the Card */}
                                <AnimatePresence>
                                    {hoveredId === idea.id && (
                                        <motion.img
                                            src={idea.image}
                                            alt={idea.label}
                                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 10, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute top-[100px] left-[50px] w-[120px] sm:w-[140px] md:w-[300px] h-[80px] sm:h-[90px] md:h-[200px] rounded-2xl shadow-xl object-cover z-50 pointer-events-none"
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
