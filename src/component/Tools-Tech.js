"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, MonitorSmartphone, Camera } from "lucide-react";

const techTools = [
    {
        icon: ClipboardList,
        title: "Project Clarity",
        desc: "Timelines, supplier matrix, and guest-flow maps for flawless coordination.",
        tools: ["Notion", "Trello", "Slack"],
    },
    {
        icon: MonitorSmartphone,
        title: "Visualisation",
        desc: "Concept decks, mood boards, floor plans — and lighting pre-vis for complex shows.",
        tools: ["Canva Pro", "Miro", "Adobe Suite"],
    },
    {
        icon: Camera,
        title: "Content Readiness",
        desc: "Shot lists and social touch-points — ensuring content immersion from start to finish.",
        tools: ["Google Workspace", "Notion", "Adobe Suite"],
    },
];

export default function TechnologyTools() {
    return (
        <section className="relative px-6 py-28 overflow-hidden bg-[#0a0a0a]">
            {/* Ambient Background Layers */}
            <div className="absolute inset-0 -z-10">
                {/* Subtle gold ambient blobs */}
                <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#BE9545]/15 blur-[140px] animate-pulse"></div>
                <div className="absolute bottom-[-200px] right-[-100px] w-[450px] h-[450px] rounded-full bg-[#BE9545]/10 blur-[120px] animate-pulse"></div>

                {/* Center vignette */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#111]/50 to-[#0a0a0a] opacity-90"></div>

                {/* Floating shimmer particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-[2px] h-[2px] bg-[#BE9545]/60 rounded-full"
                            initial={{
                                opacity: Math.random() * 0.4 + 0.3,
                                x: Math.random() * 1600 - 800,
                                y: Math.random() * 800 - 400,
                            }}
                            animate={{
                                y: ["0%", "-200%"],
                                opacity: [0.6, 0, 0.6],
                            }}
                            transition={{
                                duration: Math.random() * 8 + 6,
                                repeat: Infinity,
                                delay: Math.random() * 4,
                                ease: "linear",
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Title */}
            <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-[36px] font-[400] text-[#BE9545] mb-4 tracking-wide"
                    style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                    Technology & Tools
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-gray-400 text-[16px] leading-[1.8]"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    Precision meets creativity — every phase powered by platforms that ensure structure,
                    clarity, and seamless collaboration.
                </motion.p>
            </div>

            {/* Cards */}
            <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {techTools.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.7 }}
                        className="relative bg-[#1a1a1a]/80 backdrop-blur-md border border-[#BE9545]/10 
                       hover:border-[#BE9545]/40 rounded-2xl p-8 shadow-[0_0_35px_-8px_rgba(190,149,69,0.25)] 
                       hover:shadow-[0_0_45px_-6px_rgba(190,149,69,0.35)] transition-all duration-500 group"
                    >
                        {/* Ambient card glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent to-[#BE9545]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#BE9545]/10 rounded-full text-[#BE9545]">
                                <item.icon size={24} />
                            </div>
                            <h3
                                className="text-[#BE9545] text-xl font-semibold"
                                style={{ fontFamily: "var(--font-cinzel-regular)" }}
                            >
                                {item.title}
                            </h3>
                        </div>

                        <p
                            className="text-gray-300 text-[15px] leading-[1.8] mb-6 relative z-10"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            {item.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {item.tools.map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 text-sm border border-[#BE9545]/20 text-gray-400 rounded-full
                             hover:border-[#BE9545]/50 hover:text-[#BE9545] transition-all duration-300"
                                    style={{ fontFamily: "var(--font-montserrat)" }}
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative Glow Line (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#BE9545]/30 to-transparent"></div>

        </section>
    );
}
