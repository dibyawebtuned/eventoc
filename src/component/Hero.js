"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    // Variants for text
    const textVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: (custom = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.3, duration: 0.8, ease: "easeOut" },
        }),
    };

    // Variants for buttons
    const buttonVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="bg-black mt-[83px]">
            <div className="container mx-auto">
                <section className="relative w-full h-[85vh] overflow-hidden">
                    {/* Video Background */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-t-none rounded-b-[20px]"
                        src="/assets/videos/hero.mp4"
                        autoPlay
                        muted
                        loop>
                    </video>

                    {/* Overlay for better text visibility */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/60 rounded-t-none rounded-b-[20px]"></div>

                    {/* Hero Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                        <motion.h1 className="text-white text-4xl md:text-[78px] font-bold mb-4" style={{ fontFamily: "var(--font-cormorant)" }}
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                            custom={0}>
                            Where events become <br /> experiences
                        </motion.h1>
                        <motion.p className="text-gray-200 text-lg md:text-[16px] mb-8 max-w-2xl" style={{ fontFamily: "var(--font-montserrat)" }}
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                            custom={1}>
                            Birthdays , beach & pool parties, brand launches, hens, live music-planned end-to-end.
                        </motion.p>
                        <div className="flex gap-4">
                            <Link
                                href="#services"
                                className="relative inline-block text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden"
                                style={{
                                    background: "linear-gradient(to bottom, #BE9546, #7A5E39)",
                                }}
                            >
                                <span className="relative z-10">Book Now</span>
                                <span className="absolute inset-0 bg-gradient-to-b from-[#7A5E39] to-[#BE9546] opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
                            </Link>

                            <Link
                                href="#contact"
                                className="relative inline-block text-white px-6 py-3 rounded-lg font-semibold border border-white overflow-hidden transition-all duration-300 hover:border-transparent"
                            >
                                <span className="relative z-10">Contact Organiser</span>
                                {/* Hover Gradient Overlay */}
                                <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#BE9546] to-[#7A5E39] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                            </Link>


                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
