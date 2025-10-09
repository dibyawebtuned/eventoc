"use client";

import React from "react";
import Image from "next/image";
import Left_heading_line from "/public/assets/img/Left.png";
import Right_heading_line from "/public/assets/img/Right.png";
import BannerBg from "/public/assets/img/Banner.png";

export default function Banner() {
    return (
        <section className="relative w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src={BannerBg}
                alt="Luxury Event Banner"
                fill
                className="object-cover brightness-[0.7]"
                priority
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-[10px] items-center justify-center text-center px-4 py-[95px]">
                {/* Title with Diamond Lines */}
                <div className="flex gap-[20px] items-center justify-center">
                    <Image
                        src={Left_heading_line}
                        alt="left connector"
                    />
                    <h2
                        className="text-4xl md:text-[36px] font-light text-[#D7B26A] uppercase"
                        style={{ fontFamily: "var(--font-cinzel-regular)", lineHeight: "120%", }}>
                        Events of the Century
                    </h2>
                    <Image
                        src={Right_heading_line}
                        alt="right connector"
                    />
                </div>

                {/* Subtitle */}
                <p className="text-white text-[21px] w-[85%] mx-auto leading-[160%]">
                    Luxe details, seamless logistics, unforgettable moments.
                </p>

                {/* CTA Button */}
                <button className="px-8 py-3 border border-white text-white text-lg font-light rounded-md hover:bg-white hover:text-black transition duration-300 mt-[20px]">
                    Book Now
                </button>
            </div>
        </section>
    );
}
