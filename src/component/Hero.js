"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Cinzel, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-cormorant",
});

const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
    variable: "--font-cinzel",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
    variable: "--font-montserrat",
});

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
                        <motion.h1 className={`text-white text-4xl md:text-[78px] font-semibold mb-4 ${cormorant.className}`}
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                            custom={0}>
                            Where events become <br /> experiences
                        </motion.h1>
                        <motion.span className={`font-medium text-gray-300 text-lg md:text-[16px] mb-8 max-w-2xl ${montserrat.className}`}
                            variants={textVariant}
                            initial="hidden"
                            animate="visible"
                            custom={1}>
                            Birthdays , beach & pool parties, brand launches, hens, live music-planned end-to-end.
                        </motion.span>
                        <div className="flex gap-4">
                            {/* Book Now */}
                            <Link
                                href="#services"
                                className="relative inline-flex items-center justify-center text-white px-6 py-3 rounded-lg font-normal transition-all duration-300 overflow-hidden"
                                style={{
                                    background: "linear-gradient(to bottom, #BE9546, #7A5E39)",
                                }}>
                                <span className="relative z-10">Book Now</span>
                                <span className="absolute inset-0 bg-gradient-to-b from-[#7A5E39] to-[#BE9546] opacity-0 hover:opacity-20 rounded-lg transition-opacity duration-300"></span>
                            </Link>

                            {/* Contact Organiser */}
                            <Link
                                href="#contact"
                                className="group relative inline-flex items-center justify-center text-white px-6 py-2 rounded-lg font-normal border border-white hover:border-[#BE9546] overflow-hidden transition-all duration-300"
                            >
                                <span className="relative z-10">Contact Organiser</span>

                                {/* Smooth Hover Gradient Overlay */}
                                <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#BE9546] to-[#7A5E39] 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>

                                {/* Border disappears smoothly on hover */}
                                <span className="absolute inset-0 rounded-lg border border-transparent group-hover:border-transparent transition-all duration-300"></span>
                            </Link>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
