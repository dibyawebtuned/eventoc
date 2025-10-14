"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import Left_heading_line from "/public/assets/img/Left.png";
import Right_heading_line from "/public/assets/img/Right.png";
import Img1 from "/public/assets/img/content_image/a-microphone-in-focus-with-blurred-bokeh-lights-in-the-background-creating-a-vibrant-nightlife-atmosphere.-16727451-scaled-e1737059691145.jpg";
import Img2 from "/public/assets/img/content_image/2283609.jpg";
import Img3 from "/public/assets/img/content_image/6347dab01e23fef85fb0d3f8_63457b651fc7f5b5a272591f_See+how+to+stop+slow+nights+with+these+restaurant+and+bar+event+ideas.jpg";
import Img4 from "/public/assets/img/content_image/81z6UCSU5YL.jpg";
import Img5 from "/public/assets/img/content_image/5e4c014e-45f2-4d0e-bc46-c7474b26b367.jpg";

export default function About() {
    const images = [Img1, Img2, Img3, Img4, Img5];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Animation setup (center image first, then outward)
    const centerIndex = Math.floor(images.length / 2);
    const order = [2, 1, 3, 0, 4];

    const heights = ["312px", "424px", "536px", "424px", "312px"];
    const radii = ["50% / 33%", "50% / 25%", "50% / 20%", "50% / 25%", "50% / 33%"];

    const variants = {
        hidden: { opacity: 0, y: 80 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: order.indexOf(i) * 0.2,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section id="services" className="py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center flex flex-col gap-8 md:gap-16">
                {/* Title */}
                <div className="flex flex-row items-center gap-5 justify-center">
                    <Image src={Left_heading_line} alt="Left Line" />
                    <h2 className="text-3xl sm:text-4xl md:text-[36px] lg:text-[40px] font-light text-[#D7B26A]" style={{ fontFamily: "var(--font-cinzel-regular)", lineHeight: "1.2" }} >
                        Events OC
                    </h2>
                    <Image src={Right_heading_line} alt="Right Line" />
                </div>

                {/* Description */}
                <p className="text-white text-base sm:text-lg md:text-[21px] leading-[1.6] w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto text-center px-4 sm:px-0"
                    style={{ fontFamily: "var(--font-montserrat)" }}>
                    EventOC plans high-energy celebrations across the Byron Bays, Sunshine Coast & Gold Coast — birthdays, brand openings, hens nights, beach & pool parties, private and community events, and live music. We handle venues, catering, entertainment, AV, styling, florals, and photographers, or we will plug in your preferred vendors. One organiser, one plan, zero stress.
                </p>


                {/* Image Row (Animated) */}
                <div ref={ref} className="flex flex-nowrap justify-center items-center gap-[15px] responsive-images">
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
                            <Image src={src} alt={`Event ${index + 1}`} fill className="object-cover" />
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
}
