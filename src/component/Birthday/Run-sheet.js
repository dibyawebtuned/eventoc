"use client";

import { motion } from "framer-motion";
import { Cinzel, Montserrat } from "next/font/google";
import { useState } from "react";


const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });


const runSheet = [
    { time: "Arrival & Drinks", desc: "Guests arrive, welcome drinks served." },
    { time: "Welcome Toast", desc: "Host gives a welcome toast." },
    { time: "Service 1", desc: "First course of dinner served." },
    { time: "Speeches", desc: "Special speeches by guests." },
    { time: "Cake & Reveal", desc: "Cake cutting and reveal moment." },
    { time: "Dance Floor", desc: "Music and dance for guests." },
    { time: "Nightcap", desc: "Drinks and goodbyes." },
];

export const RunSheetNew = () => {
    const brandGold = "#c9a72b";

    return (
        <section className="container mx-auto relative py-24 text-white overflow-hidden">
            {/* Section title */}
            <h2
                className={`text-2xl sm:text-3xl md:text-4xl font-[400] mb-10 tracking-wide text-[#BE9545] ${cinzel.className} text-center`}
            >
                Event Timeline
            </h2>

            {/* Timeline Container */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 px-6 md:px-0 relative">
                {runSheet.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className="flex flex-col items-center relative group"
                    >
                        {/* Step Circle */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#BE9545] to-[#BE9545] border-2 border-black shadow-xl flex items-center justify-center text-black font-bold text-lg z-10">
                            {idx + 1}
                        </div>

                        {/* Connector Line */}
                        {idx !== runSheet.length - 1 && (
                            <div className="hidden md:block w-1 h-32 bg-gradient-to-b from-transparent via-[#c9a72b60] to-transparent absolute top-14 left-1/2 -translate-x-1/2"></div>
                        )}
                        {idx !== runSheet.length - 1 && (
                            <div className="block md:hidden w-1 h-24 bg-gradient-to-r from-transparent via-[#c9a72b60] to-transparent absolute top-14 left-1/2 -translate-x-1/2"></div>
                        )}

                        {/* Card */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="mt-6 bg-[#111] border border-gray-700 rounded-3xl p-6 shadow-xl group-hover:shadow-[0_0_30px_rgba(201,167,43,0.7)] transition-all duration-300 max-w-xs text-center"
                        >
                            <h3
                                className="text-lg font-semibold mb-2"
                                style={{ color: brandGold, textShadow: "0 0 6px rgba(201,167,43,0.8)" }}
                            >
                                {item.time}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>


            {/* Horizontal Gradient Overlay */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#c9a72b40] to-transparent hidden md:block"></div>
            </div>
        </section>
    );
};
x