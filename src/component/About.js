"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import Left_heading_line from "/public/assets/img/Left.png";
import Right_heading_line from "/public/assets/img/Right.png";
import Img1 from "/public/assets/img/service/service_one.png";
import Img2 from "/public/assets/img/service/service_two.png";
import Img3 from "/public/assets/img/service/service_three.png";
import Img4 from "/public/assets/img/service/service_five.png";
import Img5 from "/public/assets/img/service/service_five.png";

export default function About() {
    const images = [Img1, Img2, Img3, Img4, Img5];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Animation setup (center image first, then outward)
    const centerIndex = Math.floor(images.length / 2);
    const order = [2, 1, 3, 0, 4]; // Animate center -> sides

    const heights = ["312px", "424px", "536px", "424px", "312px"];
    const radii = ["50% / 33%", "50% / 25%", "50% / 20%", "50% / 25%", "50% / 33%"];

    const variants = {
        hidden: { opacity: 0, y: 80 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: order.indexOf(i) * 0.2, // Staggered from center outward
                ease: "easeOut",
            },
        }),
    };

    return (
        <section id="services" className="py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center flex flex-col gap-16">
                {/* Title */}
                <div className="flex flex-row items-center gap-5 justify-center">
                    <Image src={Left_heading_line} alt="Left Line" />
                    <h2
                        className="text-4xl md:text-[36px] font-light text-[#D7B26A] uppercase"
                        style={{
                            fontFamily: "var(--font-cinzel-regular)",
                            lineHeight: "120%",
                        }}
                    >
                        Events OC
                    </h2>
                    <Image src={Right_heading_line} alt="Right Line" />
                </div>

                {/* Description */}
                <p className="text-white text-[21px] w-[85%] mx-auto leading-[160%]">
                    EventOC plans high-energy celebrations across the Byron Bays,
                    Sunshine Coast & Gold Coast — birthdays, brand openings, hens nights,
                    beach & pool parties, private and community events, and live music.
                    We handle venues, catering, entertainment, AV, styling, florals, and
                    photographers, or we'll plug in your preferred vendors. One organiser,
                    one plan, zero stress.
                </p>

                {/* Image Row (Animated) */}
                <div
                    ref={ref}
                    className="flex flex-nowrap justify-center items-center gap-[15px]"
                >
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
                            style={{
                                width: "199px",
                                height: heights[index],
                                borderRadius: radii[index],
                                flexShrink: 0,
                            }}
                            variants={variants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            custom={index}
                        >
                            <Image
                                src={src}
                                alt={`Event ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
