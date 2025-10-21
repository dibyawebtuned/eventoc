"use client";
import { motion } from "framer-motion";

const teamMembers = [
    { name: "Aarav Sharma", role: "Producer", image: "/assets/img/content_image/2283609.jpg" },
    { name: "Maya Kapoor", role: "Stylist", image: "/assets/img/content_image/2283609.jpg" },
    { name: "Rohan Verma", role: "AV Engineer", image: "/assets/img/content_image/2283609.jpg" },
    { name: "Neha Singh", role: "Florist", image: "/assets/img/content_image/2283609.jpg" },
    { name: "Priya Das", role: "Photographer", image: "/assets/img/content_image/2283609.jpg" },
];

const OurTeamSection = () => {
    return (
        <section className="relative px-6 py-[80px] text-gray-200 overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-[-100px] left-[-50px] w-[300px] h-[300px] bg-[#BE9545]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-[-80px] right-[-60px] w-[250px] h-[250px] bg-[#BE9545]/5 rounded-full blur-2xl -z-10"></div>

            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[36px] font-[400] text-[#BE9545] mb-2"
                    style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                    Our Team
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-400 text-[16px] mb-10 sm:w-[60%] mx-auto"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                >
                    Producers, stylists, AV engineers, florists and photographers who care about craft. We collaborate with a trusted network of caterers, artists and technicians — always paying fairly, delivering safely and protecting the venue like it’s our own.
                </motion.p>
            </div>

            {/* Team members grid with overlapping effect */}
            <div className="relative max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
                {teamMembers.map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        className="group relative w-[200px] sm:w-[220px] cursor-pointer"
                    >
                        {/* Profile image with hover scale */}
                        <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-[0_0_40px_-5px_rgba(190,149,69,0.4)] transition-shadow duration-500">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-[260px] object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Gold overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#BE9545]/20 via-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                        </div>

                        {/* Name & Role */}
                        <div className="mt-4 text-center">
                            <h3 className="text-[#BE9545] font-semibold text-lg" style={{ fontFamily: "var(--font-cinzel-regular)" }}>
                                {member.name}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                                {member.role}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OurTeamSection;
