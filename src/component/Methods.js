"use client";

import React from "react";
import { motion } from "framer-motion";

const OCMethodTimeline = () => {
    const steps = [
        { number: "01", title: "Discover", desc: "Mood, purpose, guest profile, budget guardrails." },
        { number: "02", title: "Design", desc: "Concept & mood, floor plan, palette, hero moments." },
        { number: "03", title: "Build", desc: "Lock venue and suppliers, confirm menus, signage." },
        { number: "04", title: "Rehearse", desc: "Cue-to-cue for reveals, speeches, lighting." },
        { number: "05", title: "Showtime", desc: "Producers run the floor; you live in the moment." },
        { number: "06", title: "Afterglow", desc: "Highlights, gallery, and post-event debrief." },
    ];

    return (
        <div className="relative bg-gradient-to-b from-[#0B0B0B] via-[#101010] to-[#0B0B0B] text-gray-200 py-[80px] overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 text-center">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[36px] font-[400] text-[#BE9545] mb-2 tracking-wide"
                    style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                    The OC Method
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

                {/* Timeline */}
                <div className="relative flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center w-full lg:w-auto max-w-[220px]"
                        >
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[50%] right-[-50%] w-[100%] h-[1px] bg-gradient-to-r from-[#BE9545]/60 via-[#BE9545]/20 to-transparent"></div>
                            )}

                            {/* Step Number */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 blur-xl bg-[#BE9545]/20 rounded-full"></div>
                                <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#0F0F0F] border border-[#BE9545]/40 text-[#BE9545] font-bold text-2xl shadow-[0_0_15px_rgba(190,149,69,0.15)]">
                                    {step.number}
                                </div>
                            </div>

                            {/* Title */}
                            <h3
                                className="text-[#BE9545] text-lg font-semibold mb-2"
                                style={{ fontFamily: "var(--font-cinzel-regular)" }}
                            >
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p
                                className="text-gray-400 text-sm leading-relaxed max-w-[240px]"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Glow Line (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#BE9545]/30 to-transparent"></div>
        </div>
    );
};

export default OCMethodTimeline;
