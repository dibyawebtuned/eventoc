"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Left_heading_line from "/public/assets/img/Left.png";
import Right_heading_line from "/public/assets/img/Right.png";
import ServiceOne from "/public/assets/img/content_image/service_one .jpg";
import ServiceTwo from "/public/assets/img/content_image/service_two.jpg";
import ServiceThree from "/public/assets/img/content_image/service_three.jpg";
import ServiceFour from "/public/assets/img/content_image/service_four.jpg";
import ServiceFive from "/public/assets/img/content_image/a-microphone-in-focus-with-blurred-bokeh-lights-in-the-background-creating-a-vibrant-nightlife-atmosphere.-16727451-scaled-e1737059691145.jpg";

import { Cinzel, Montserrat } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "700", "900"],
  variable: "--font-cinzel",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "700", "900"],
  variable: "--font-montserrat",
});

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
  { src: ServiceOne, title: "Gold Coast", link: "/services/venuesourcing" },
  { src: ServiceTwo, title: "Byron Bays", link: "/services/venuesourcing" },
  { src: ServiceThree, title: "Sunshine Coast", link: "/services/venuesourcing" },
  { src: ServiceFour, title: "Gold Coast", link: "/services/venuesourcing" },
  { src: ServiceFive, title: "Emerald Lounge", link: "/services/venuesourcing" },
];
const cateringImages = [
  { src: ServiceOne, title: "Gold Coast", link: "/public/assets/img/Event of OC/Music/DJ.jpg" },
  { src: ServiceTwo, title: "Byron Bays", link: "/public/assets/img/Event of OC/Music/Concert.jpg" },
];

export default function Service() {
  const [activeTab, setActiveTab] = useState("Venue");

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#685736]">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col gap-[25px] sm:gap-[50px]">
        {/* Title Content */}
        <div className="flex flex-row items-center gap-[20px] justify-center">
          <div>
            <Image src={Left_heading_line} alt="Services" />
          </div>
          <p
            className={`text-3xl sm:text-4xl md:text-[36px] lg:text-[36px] font-light text-[#D7B26A] ${cinzel.className}`}
          >
            SERVICES
          </p>
          <div>
            <Image src={Right_heading_line} alt="Services" />
          </div>
        </div>

        <div className="flex flex-col gap-[15px] md:gap-[30px]">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-0 sm:gap-0">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`
                relative py-2 px-3 sm:py-2 sm:px-4 text-base transition-all duration-300 cursor-pointer
                ${activeTab === tab.name ? "text-[#D7B26A] font-semibold" : "text-white hover:text-[#D7B26A] font-normal"}
                `}
                style={{ fontFamily: "var(--font-montserrat)", lineHeight: "1.2", letterSpacing: "-0.03em" }}
              >
                {tab.name}

                {/* Short right border */}
                {index !== tabs.length - 1 && (
                  <span className="absolute top-1/4 right-0 h-1/2 border-r border-white/50"></span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {/* Venue */}
            {activeTab === "Venue" && (
              <div className="relative">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} bg-[#D7B26A] w-3 h-3 rounded-full mx-1 inline-block"></span>`;
                    },
                  }}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {venueImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        href={image.link}
                        className="block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={400}
                          height={352}
                          className="w-full h-[352px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                          <h3
                            className="text-white text-lg font-light"
                            style={{ fontFamily: "var(--font-cinzel-regular)" }}
                          >
                            {image.title}
                          </h3>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation */}
                <button className="custom-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8592;
                </button>
                <button className="custom-next absolute top-1/2 right-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8594;
                </button>

                {/* Custom pagination */}
                <div className="custom-pagination flex justify-center mt-4"></div>
              </div>
            )}

            {/* Catering */}
            {activeTab === "Catering" && (
              <div className="relative">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} bg-[#D7B26A] w-3 h-3 rounded-full mx-1 inline-block"></span>`;
                    },
                  }}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {cateringImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        href={image.link}
                        className="block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={400}
                          height={352}
                          className="w-full h-[352px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                          <h3
                            className="text-white text-lg font-light"
                            style={{ fontFamily: "var(--font-cinzel-regular)" }}
                          >
                            {image.title}
                          </h3>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation */}
                <button className="custom-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8592;
                </button>
                <button className="custom-next absolute top-1/2 right-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8594;
                </button>

                {/* Custom pagination */}
                <div className="custom-pagination flex justify-center mt-4"></div>
              </div>
            )}

            {/* Entertainment */}
            {activeTab === "Entertainment" && (
              <div className="relative">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} bg-[#D7B26A] w-3 h-3 rounded-full mx-1 inline-block"></span>`;
                    },
                  }}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {cateringImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        href={image.link}
                        className="block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={400}
                          height={352}
                          className="w-full h-[352px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                          <h3
                            className="text-white text-lg font-light"
                            style={{ fontFamily: "var(--font-cinzel-regular)" }}
                          >
                            {image.title}
                          </h3>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation */}
                <button className="custom-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8592;
                </button>
                <button className="custom-next absolute top-1/2 right-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8594;
                </button>

                {/* Custom pagination */}
                <div className="custom-pagination flex justify-center mt-4"></div>
              </div>
            )}

            {/* Audio & Visual */}
            {activeTab === "Audio & Visual" && (
              <div className="relative">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} bg-[#D7B26A] w-3 h-3 rounded-full mx-1 inline-block"></span>`;
                    },
                  }}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {cateringImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        href={image.link}
                        className="block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={400}
                          height={352}
                          className="w-full h-[352px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                          <h3
                            className="text-white text-lg font-light"
                            style={{ fontFamily: "var(--font-cinzel-regular)" }}
                          >
                            {image.title}
                          </h3>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation */}
                <button className="custom-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8592;
                </button>
                <button className="custom-next absolute top-1/2 right-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8594;
                </button>

                {/* Custom pagination */}
                <div className="custom-pagination flex justify-center mt-4"></div>
              </div>
            )}

            {/* Style & Design */}
            {activeTab === "Style & Design" && (
              <div className="relative">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} bg-[#D7B26A] w-3 h-3 rounded-full mx-1 inline-block"></span>`;
                    },
                  }}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {cateringImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        href={image.link}
                        className="block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={400}
                          height={352}
                          className="w-full h-[352px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                          <h3
                            className="text-white text-lg font-light"
                            style={{ fontFamily: "var(--font-cinzel-regular)" }}
                          >
                            {image.title}
                          </h3>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation */}
                <button className="custom-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8592;
                </button>
                <button className="custom-next absolute top-1/2 right-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8594;
                </button>

                {/* Custom pagination */}
                <div className="custom-pagination flex justify-center mt-4"></div>
              </div>)}

            {/* Photographs */}
            {activeTab === "Photographs" && (
              <div className="relative">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} bg-[#D7B26A] w-3 h-3 rounded-full mx-1 inline-block"></span>`;
                    },
                  }}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {cateringImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        href={image.link}
                        className="block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={400}
                          height={352}
                          className="w-full h-[352px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                          <h3
                            className="text-white text-lg font-light"
                            style={{ fontFamily: "var(--font-cinzel-regular)" }}
                          >
                            {image.title}
                          </h3>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation */}
                <button className="custom-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8592;
                </button>
                <button className="custom-next absolute top-1/2 right-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8594;
                </button>

                {/* Custom pagination */}
                <div className="custom-pagination flex justify-center mt-4"></div>
              </div>
            )}

            {/* Floral */}
            {activeTab === "Floral" && (
              <div className="relative">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} bg-[#D7B26A] w-3 h-3 rounded-full mx-1 inline-block"></span>`;
                    },
                  }}
                  navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {cateringImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        href={image.link}
                        className="block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          width={400}
                          height={352}
                          className="w-full h-[352px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
                          <h3
                            className="text-white text-lg font-light"
                            style={{ fontFamily: "var(--font-cinzel-regular)" }}
                          >
                            {image.title}
                          </h3>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation */}
                <button className="custom-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8592;
                </button>
                <button className="custom-next absolute top-1/2 right-0 -translate-y-1/2 z-10 p-3 bg-[#D7B26A] rounded-full shadow-lg hover:bg-yellow-600 transition-all">
                  &#8594;
                </button>

                {/* Custom pagination */}
                <div className="custom-pagination flex justify-center mt-4"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
