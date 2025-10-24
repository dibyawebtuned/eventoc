"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
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

const beliefs = [
    { title: "Personal over template", desc: "Your story first, theme second." },
    { title: "Flow beats clutter", desc: "Guest journey and timing make the magic." },
    { title: "Sound & light are design", desc: "AV isn’t an add-on — it’s atmosphere." },
    { title: "Details are memories", desc: "Styling, scent, signage and pacing create recall." },
];

export default function WhatWeBelievePage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#0b0b0b] via-[#111111] to-[#0b0b0b] text-gray-200 py-[80px] flex flex-col">
            <div>
                {/* Header */}
                <section className="text-center mb-12"
                    data-aos="fade-up"
                    data-aos-delay="100">
                    <h1 className={`mb-2 text-[36px] font-[400] text-center text-[#BE9545] ${cinzel.className}`}>
                        What We Believe
                    </h1>
                    <p
                        className={`text-gray-400 text-[16px] max-w-[700px] mx-auto leading-relaxed ${montserrat.className}`}
                    >
                        Our principles guide how we create, connect, and deliver — ensuring every event feels meaningful,
                        thoughtful, and timeless.
                    </p>
                </section>

                {/* Beliefs List - Flex Layout */}
                <section className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-5">
                        {beliefs.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                className="flex flex-col items-start gap-2.5 p-4 border border-[#BE9545]/20 rounded-xl bg-[#0f0f0f]/60 
                         shadow-[0_0_12px_rgba(190,149,69,0.05)] hover:shadow-[0_0_18px_rgba(190,149,69,0.25)] 
                         hover:border-[#BE9545]/60 transition-all duration-300
                         flex-[1_1_280px] max-w-[350px]"
                                data-aos="zoom-in-up"
                                data-aos-delay={index * 150}
                            >
                                <CheckCircle2 className="text-[#BE9545] w-6 h-6 flex-shrink-0" />
                                <h3
                                    className="text-[#BE9545] text-[19px] font-semibold tracking-wide"
                                    style={{ fontFamily: "var(--font-cinzel-regular)" }}
                                >
                                    {item.title}
                                </h3>
                                <p className={`text-gray-400 text-[15.5px] leading-snug ${montserrat.className}`}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Decorative Glow Line (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#BE9545]/30 to-transparent"></div>

        </main>
    );
}
