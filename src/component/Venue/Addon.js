"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Hotel, Car, MapPin, Users } from "lucide-react";

const addons = [
    { icon: Car, label: "Guest Transfers & Valet", desc: "Seamless guest arrivals with premium transfers." },
    { icon: Hotel, label: "Accommodation Blocks", desc: "Curated stays for comfort and convenience." },
    { icon: ShieldCheck, label: "Security & Crowd Flow", desc: "Discreet, professional, and perfectly coordinated." },
    { icon: MapPin, label: "Wayfinding Signage", desc: "Elegant direction systems designed for clarity." },
    { icon: Users, label: "Cloak & Green Rooms", desc: "Private zones crafted for comfort and calm." },
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

export default function AddonsSection() {
    return (
        <section className="relative py-28 bg-gradient-to-b from-[#0b0b09] via-[#1a1a14] to-black overflow-hidden">
            {/* Ambient golden gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,210,120,0.12)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,180,70,0.10)_0%,transparent_70%)]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`${cinzel.className} text-[36px] font-[400] mb-2 text-white tracking-wide`}
                >
                    Add Ons
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg"
                >
                    Our signature add-ons go beyond logistics — they elevate experiences into effortless luxury.
                </motion.p>

                {/* Add-on cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10 place-items-center">
                    {addons.map((addon, i) => {
                        const Icon = addon.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="relative group bg-gradient-to-b from-[#2a2415]/40 to-black/50 border border-[#a0823c]/30 rounded-2xl p-8 text-center backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:shadow-[0_0_50px_rgba(255,210,120,0.18)] transition-all duration-500"
                            >
                                {/* Golden glow hover overlay */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFD87A]/10 via-[#BE9545]/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />

                                {/* Icon */}
                                <div className="relative flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#FFD87A]/10 via-[#BE9545]/10 to-transparent backdrop-blur-md border border-[#a0823c]/30 mb-5 transition-transform duration-500">
                                    <Icon className="w-10 h-10 text-[#FFD87A]" />
                                </div>

                                {/* Label */}
                                <h3 className="text-white text-lg font-semibold mb-2">
                                    {addon.label}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{addon.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Floating golden shimmer line */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute left-0 right-0 bottom-[25%] h-[2px] bg-gradient-to-r from-[#FFD87A] via-[#BE9545] to-transparent bg-[length:200%_200%] opacity-10"
            />
        </section>
    );
}
