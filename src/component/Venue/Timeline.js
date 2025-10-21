"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const timelineSteps = [
    { step: "Discovery", duration: "48 hrs" },
    { step: "Shortlist", duration: "3–5 days" },
    { step: "Site Tours & Holds", duration: "1 week" },
    { step: "Contracting", duration: "2–5 days" },
    { step: "Floor Plan & Run Sheet", duration: "2–3 days" },
];

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

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

export default function TimelineSection() {
    return (
        <section className="relative py-20 bg-black overflow-hidden">
            {/* Ambient background lights */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(215,178,106,0.1)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,210,120,0.08)_0%,transparent_70%)]" />

            {/* Animated subtle shimmer */}
            <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    background:
                        "radial-gradient(circle at 30% 50%, rgba(255,200,120,0.12), transparent 70%)",
                    backgroundSize: "200% 200%",
                }}
            />

            <div className="container mx-auto px-4 relative">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`${cinzel.className} text-center text-[36px] font-[400] mb-2 text-white tracking-wide`}
                >
                    Typical <span className="text-[#D7B26A]">Timeline</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-400 text-[16px] mb-10 text-center"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    How we bring vision to reality — structured, seamless, and soulful.
                </motion.p>

                {/* Timeline Container */}
                <motion.div
                    className="relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-0"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Flow line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D7B26A]/40 to-transparent" />

                    {timelineSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="relative flex flex-col items-center text-center group md:w-1/5"
                        >
                            {/* Step Indicator */}
                            <div className="relative mb-6">
                                {/* Outer glow ring */}
                                <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#D7B26A]/30 to-transparent blur-md animate-pulse" />
                                {/* Inner circle */}
                                <div className="relative w-12 h-12 bg-gradient-to-b from-[#D7B26A] to-[#BE9545] rounded-full flex items-center justify-center text-black font-bold text-lg shadow-[0_0_25px_rgba(215,178,106,0.5)]">
                                    {i + 1}
                                </div>
                            </div>

                            {/* Step Card */}
                            <div className="relative bg-gradient-to-b from-[#1A160E]/80 to-black/70 border border-[#9b7e40]/40 rounded-3xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(215,178,106,0.2)] transition-all duration-500 ease-out backdrop-blur-md group-hover:scale-[1.03]">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Circle className="w-4 h-4 text-[#D7B26A]" strokeWidth={1.2} />
                                    <h3 className="text-white font-semibold text-lg">
                                        {step.step}
                                    </h3>
                                </div>
                                <p className="text-[#D7B26A]/90 text-sm tracking-wide">
                                    {step.duration}
                                </p>

                                {/* Hover shimmer overlay */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#D7B26A]/10 via-[#FFD87A]/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                            </div>

                            {/* Connector line (mobile) */}
                            {i < timelineSteps.length - 1 && (
                                <div className="md:hidden w-[2px] h-16 bg-gradient-to-b from-[#D7B26A]/40 to-transparent my-4" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom glow fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0b0b09] to-transparent"></div>
        </section>
    );
}
