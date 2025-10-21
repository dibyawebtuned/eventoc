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
            <Image src={BannerBg} alt="Luxury Event Banner" fill className="object-cover brightness-[0.7]" priority />

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-[10px] items-center justify-center text-center px-4 py-[95px]">
                {/* Title with Diamond Lines */}
                <div className="flex gap-[20px] items-center justify-center">
                    <Image src={Left_heading_line} alt="left connector" />
                    <h2 className="text-3xl sm:text-4xl md:text-[36px] lg:text-[40px] font-light text-[#D7B26A]" style={{ fontFamily: "var(--font-cinzel-regular)", lineHeight: "1.2" }}>
                        Events of the century
                    </h2>
                    <Image src={Right_heading_line} alt="right connector" />
                </div>

                {/* Subtitle */}
                <p className="text-white text-base sm:text-lg md:text-[21px] leading-[1.6] w-full sm:w-11/12 md:w-10/12 lg:w-9/12 mx-auto text-center px-4 sm:px-0"
                    style={{ fontFamily: "var(--font-montserrat)" }}>
                    Luxe details, seamless logistics, unforgettable moments.
                </p>

                {/* CTA Button */}
                <button className="inline-block px-6 py-2 border border-white text-white text-lg font-light rounded-md 
                transition-all duration-500 ease-in-out 
                hover:bg-white hover:text-black hover:shadow-lg mt-[20px] cursor-pointer">
                    Book Now
                </button>
            </div>
        </section >
    );
}
