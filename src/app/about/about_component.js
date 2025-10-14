"use client";
import React from "react";
import Link from "next/link";
import SectionHeader from "@/component/Title";
import PolaroidGallery from "@/component/PolaroidGallery";

const about_component = () => {
  return (
    <div className="mt-[100px] container mx-auto px-4 py-10">
      {/* Header */}
      <SectionHeader title="About Us" />

      {/* About Page Content */}
      <div>
        {/* Hero Section */}
        <div className="flex flex-col gap-6 items-center w-[60%] mx-auto text-center">
          <div className="flex flex-col gap-3">
            {/* Title */}
            <div>
              <span
                className="text-white text-[38px] leading-[1.2]"
                style={{ fontFamily: "var(--font-cinzel-regular)" }}
              >
                We don’t just plan parties,
                <br /> We craft moments that live forever.
              </span>
            </div>

            {/* Description */}
            <div>
              <span
                className="text-gray-400"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                From intimate coastal dinners to bold, high-energy nightlife
                experiences, from luxury corporate gatherings to full-scale
                festivals — we deliver events that feel larger than life yet
                deeply personal. Think luxury meets wild freedom, wrapped in a
                Gen Z edge and finished with a touch of coastal elegance.
              </span>
            </div>
          </div>

          {/* Book Now Button */}
          <div>
            <Link
              href="/book"
              className="inline-block px-6 py-2 rounded-md font-normal transition-shadow shadow-sm bg-gradient-to-b from-[#BE9545] to-[#7A5E39] text-white"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Polaroid Gallery */}
        <PolaroidGallery />

        {/* Mission & Vision Section */}
        <section className="mt-20">
          <div className="w-full mx-auto grid md:grid-cols-2 gap-16 text-gray-200">

            {/* Mission */}
            <div className="group flex flex-col items-start gap-6 bg-gradient-to-b from-[#1a1a1a] to-[#111] p-10 rounded-2xl shadow-[0_0_40px_-10px_rgba(190,149,69,0.2)] transition-transform duration-500 hover:-translate-y-1">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#BE9545]/10 border border-[#BE9545]/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-[#BE9545]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2m-4-8a9 9 0 11-9 9 9 9 0 019-9z"
                  />
                </svg>
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-[30px] text-[#BE9545] mb-3 tracking-[0.02em]"
                  style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                  Our Mission
                </h3>
                <div
                  className="text-gray-400 leading-[1.9] text-[17px]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  To craft extraordinary, immersive experiences that go far beyond the
                  ordinary — blending luxury, creativity, and emotion into moments that
                  live forever. At Events OC, our mission is to celebrate individuality
                  through bespoke event design — where every detail, from the music to
                  the mood, tells your story and captivates every guest.
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group flex flex-col items-start gap-6 bg-gradient-to-b from-[#1a1a1a] to-[#111] p-10 rounded-2xl shadow-[0_0_40px_-10px_rgba(190,149,69,0.2)] transition-transform duration-500 hover:-translate-y-1">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#BE9545]/10 border border-[#BE9545]/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-[#BE9545]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-[30px] text-[#BE9545] mb-3 tracking-[0.02em]"
                  style={{ fontFamily: "var(--font-cinzel-regular)" }}
                >
                  Our Vision
                </h3>
                <div
                  className="text-gray-400 leading-[1.9] text-[17px]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  To redefine what an event can be — transforming gatherings into art
                  forms that inspire, connect, and set the new global standard for
                  celebration. We envision a world where every event we create feels like
                  stepping into a cinematic experience — one that reflects your essence,
                  ignites emotion, and truly earns the title “Event of the Century.”
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* Video Section */}
        <div className="relative w-full h-[600px] overflow-hidden rounded-2xl shadow-lg mt-20">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Bottom-left text overlay */}
          <div className="absolute bottom-10 left-10 text-left px-4 max-w-[600px]">
            <span
              className="text-white text-[38px] tracking-[0.03em] leading-[1.3]"
              style={{ fontFamily: "var(--font-cinzel-regular)" }}
            >
              Beyond Ordinary Experiences
            </span>
            <p
              className="text-white mt-3 text-[16px] leading-[1.8]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              We create the best you can possibly get — an event that reflects
              you, stuns your guests, and sets the standard others can’t touch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about_component;
