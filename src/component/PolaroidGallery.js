"use client";
import Image from "next/image";
import React from "react";

const PolaroidGallery = () => {
    const photos = [
        {
            src: "/assets/img/content_image/2283609.jpg",
            caption: "GRAVITY IS A TEACHER",
            rotate: "-rotate-6",
        },
        {
            src: "/assets/img/content_image/2283609.jpg",
            caption: "YOU ARE NOT A MACHINE",
            rotate: "-rotate-3",
        },
        {
            src: "/assets/img/content_image/2283609.jpg",
            caption: "MUSCLES HOLD MEMORY",
            rotate: "rotate-1",
        },
        {
            src: "/assets/img/content_image/2283609.jpg",
            caption: "SPIRALS, NOT STRAIGHT LINES",
            rotate: "rotate-3",
        },
        {
            src: "/assets/img/content_image/2283609.jpg",
            caption: "THE SHAPE OF SOFTNESS",
            rotate: "rotate-6",
        },
    ];

    return (
        <section className="relative flex flex-wrap justify-center items-center gap-[-40px] py-20 overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[-40px]">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`relative bg-white rounded-lg shadow-xl p-3 mx-[-25px] transform ${photo.rotate} hover:scale-105 transition-all duration-500`}
                        style={{ width: 300, height: 400 }}
                    >
                        <div className="relative w-full h-[340px] rounded-md overflow-hidden">
                            <Image
                                src={photo.src}
                                alt={photo.caption}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        <p className="text-center text-gray-700 font-medium mt-3 tracking-wide text-sm">
                            {photo.caption}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PolaroidGallery;
