"use client";

import { motion } from "framer-motion";

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
        <section className="relative py-24 bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] text-white overflow-hidden">
            {/* Section title */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: brandGold }}>
                Event Timeline
            </h2>

            {/* Horizontal Timeline Wrapper */}
            <div className="overflow-x-auto md:overflow-x-hidden px-6">
                <div className="flex md:flex-col lg:flex-row items-start gap-10 md:gap-16 lg:gap-20 relative">
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
                            <div
                                className={`w-12 h-12 rounded-full bg-[#111] border-4 border-[#c9a72b] shadow-lg flex items-center justify-center text-black font-bold z-10`}
                            >
                                {idx + 1}
                            </div>

                            {/* Connector Line */}
                            {idx !== runSheet.length - 1 && (
                                <div
                                    className="w-1 md:h-24 lg:h-0 lg:w-24 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-[#c9a72b40] to-transparent absolute top-12 left-1/2 md:left-1/2 lg:top-1/2 lg:left-12 transform -translate-x-1/2 md:translate-x-0 md:translate-y-0"
                                />
                            )}

                            {/* Card */}
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="mt-6 bg-[#111] border border-gray-700 rounded-2xl p-6 shadow-lg group-hover:shadow-[0_0_25px_rgba(201,167,43,0.5)] transition-all duration-300 max-w-xs text-center"
                            >
                                <h3 className="text-lg font-semibold mb-2" style={{ color: brandGold }}>
                                    {item.time}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
