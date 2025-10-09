"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import DiamondConnector from "/public/assets/img/Diamond.png";

export default function ElegantMarquee() {
    const texts = [
        "Beach Parties",
        "Corporate Events",
        "Hens Nights",
        "Brand Openings",
        "Private Celebrations",
        "Live Music",
        "Community Events",
    ];

    return (
        <section className="py-6 overflow-hidden bg-gradient-to-r from-[#7B5F3A] to-[#D7B26A]">
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
                {texts.map((text, i) => (
                    <div key={i} className="flex items-center">
                        <span
                            className="text-[#0A0A0A] text-[24px] font-light tracking-wider uppercase"
                            style={{ fontFamily: "var(--font-cinzel-regular)" }}
                        >
                            {text}
                        </span>

                        {/* Always show connector after text */}
                        <div className="mx-8 flex-shrink-0">
                            <Image
                                src={DiamondConnector}
                                alt="Connector"
                                width={160}
                                height={20}
                                className="opacity-90"
                            />
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}
