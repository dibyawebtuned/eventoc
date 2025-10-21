"use client";

import { motion } from "framer-motion";
import { FaGlassCheers, FaRocket, FaBolt } from "react-icons/fa";

export default function BudgetsTimelines() {
    const items = [
        {
            title: "Private Events",
            color: "#BE9545",
            lead: "Lead Time: 4 to 8 weeks",
            desc: "Designed for elegance and intimacy with flexible scaling options.",
            icon: <FaGlassCheers />,
        },
        {
            title: "Brand Launches",
            color: "#BE9545",
            lead: "Lead Time: 6 to 10+ weeks",
            desc: "Tailored reveal timelines with full production coordination.",
            icon: <FaRocket />,
        },
        {
            title: "Rush Options",
            color: "#BE9545",
            lead: "Based on supplier availability",
            desc: "Accelerated turnarounds available upon review and feasibility.",
            icon: <FaBolt />,
        },
    ];

    return (
        <section className="relative py-24 bg-gradient-to-b from-[#0B0B0B] via-[#141414] to-[#0B0B0B] text-white overflow-hidden">
            {/* Radial background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(190,149,69,0.15),transparent_80%)] pointer-events-none"></div>

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-[36px] font-[400] text-[#BE9545] mb-2 tracking-wide"
                    style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                    Budgets & Timelines
                </motion.h2>

                {/* Intro Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-[16px] leading-relaxed max-w-3xl mx-auto mb-10"
                >
                    We can cost-engineer to your number or scale up for impact. Typical lead times are{" "}
                    <span className="text-[#BE9545] font-semibold">4 to 8 weeks for private events</span> and{" "}
                    <span className="text-[#BE9545] font-semibold">6 to 10+ weeks for brand launches or complex builds</span>.{" "}
                    Rush options may be possible subject to supplier availability.
                </motion.p>

                {/* Timeline */}
                <div className="relative border-l border-gray-700/60 ml-6 md:ml-10 space-y-16">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative pl-10 md:pl-16"
                        >
                            {/* Timeline dot */}
                            <span
                                className="absolute left-[-10px] top-1 w-5 h-5 rounded-full border-4 border-[#0B0B0B]"
                                style={{ backgroundColor: item.color }}
                            ></span>

                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 blur-3xl"
                                style={{
                                    background: `radial-gradient(circle at left, ${item.color}33, transparent 70%)`,
                                }}
                            ></div>

                            {/* Card content */}
                            <div className="relative z-10 bg-[#111]/60 border border-gray-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(190,149,69,0.3)] transition-all duration-300">
                                <div
                                    className="flex items-center gap-4 text-3xl mb-3"
                                    style={{ color: item.color }}
                                >
                                    {item.icon}
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-2 text-left">{item.lead}</p>
                                <p className="text-gray-300 text-sm leading-relaxed text-left">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
