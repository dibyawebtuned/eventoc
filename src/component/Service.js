"use client";

import React, { useState } from "react";
import Image from "next/image";
import Left_heading_line from "/public/assets/img/Left.png";
import Right_heading_line from "/public/assets/img/Right.png";
import ServiceOne from "/public/assets/img/service/service_one.png";
import ServiceTwo from "/public/assets/img/service/service_two.png";
import ServiceThree from "/public/assets/img/service/service_three.png";
import ServiceFour from "/public/assets/img/service/service_five.png";


const tabs = [
    { name: "Venue" },
    { name: "Catering" },
    { name: "Entertainment" },
    { name: "Audio & Visual" },
    { name: "Style & Design" },
    { name: "Photographs" },
    { name: "Floral" },
];

const venueImages = [
    { src: ServiceOne, title: "Crystal Ballroom" },
    { src: ServiceTwo, title: "The Marble Courtyard" },
    { src: ServiceThree, title: "Skyline Atrium" },
    { src: ServiceFour, title: "Emerald Lounge" },
];

export default function Service() {
    const [activeTab, setActiveTab] = useState("Venue");
    return (
        <section id="services" className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#685736]">
            <div className="max-w-7xl mx-auto px-4 text-center flex flex-col gap-[50px]">
                {/* Title Content */}
                <div className="flex flex-row items-center gap-[20px] justify-center">
                    {/* Left_heading_line */}
                    <div>
                        <Image
                            src={Left_heading_line}
                            alt="Services"
                            className=""
                        />
                    </div>
                    {/* Title */}
                    <h2 className="text-4xl md:text-[36px] font-light text-[#D7B26A]" style={{ fontFamily: "var(--font-cinzel-regular)", lineHeight: "120%" }}>
                        SERVICES
                    </h2>
                    {/* Right_heading_line */}
                    <div>
                        <Image
                            src={Right_heading_line}
                            alt="Services"
                            className=""
                        />
                    </div>
                </div>


                <div className="flex flex-col gap-[30px]">
                    {/* Tabs Contents */}
                    <div className="flex flex-wrap justify-center gap-6 ">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`py-2 px-4 text-lg font-light transition-all duration-300 cursor-pointer ${activeTab === tab.name
                                    ? "text-[#D7B26A]"
                                    : "text-white hover:text-[#D7B26A]"
                                    }`}
                                style={{ fontFamily: "var(--font-montserrat)", lineHeight: "120%", letterSpacing: "-3%" }}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div>
                        {activeTab === "Venue" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {venueImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.title}
                                            width={400}
                                            className="w-full h-[352px] object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                                            <h3 className="text-white text-lg font-light" style={{ fontFamily: "var(--font-cinzel-regular)" }}>{image.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* You can add more tab contents here */}
                        {activeTab === "Catering" && <div className="text-center">Catering content goes here.</div>}
                        {activeTab === "Entertainment" && <div className="text-center">Entertainment content goes here.</div>}
                        {activeTab === "Audio & Visual" && <div className="text-center">Audio & Visual content goes here.</div>}
                        {activeTab === "Style & Design" && <div className="text-center">Style & Design content goes here.</div>}
                        {activeTab === "Photographs" && <div className="text-center">Photographs content goes here.</div>}
                        {activeTab === "Floral" && <div className="text-center">Floral content goes here.</div>}
                    </div>
                </div>
            </div>
        </section>
    );
}
