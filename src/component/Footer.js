"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

import Logo from "/public/assets/img/EventOC_Logo.png";

const Footer = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out",
            offset: 100,
        });
    }, []);


    return (
        <footer className="bg-black text-gray-300 pt-10 pb-4">
            {/* Logo and tagline */}
            <div className="text-center mb-10" data-aos="fade-down">
                <div className="flex justify-center mb-[15px]">
                    <Image
                        src={Logo}
                        alt="EventsOC Logo"
                        width={160}
                        height={95}
                        className="mx-auto"
                        priority
                    />
                </div>
                <p className="text-[#D7B26A] text-[16px]">
                    We are more than event planning service
                </p>
                <div className="flex justify-center gap-[40px] text-[#D7B26A] text-lg my-[30px]">
                    <Link href="#" aria-label="Instagram" className="text-[20px] hover:scale-110 transition">
                        <FaInstagram />
                    </Link>
                    <Link href="#" aria-label="Twitter / X" className="text-[20px] hover:scale-110 transition">
                        <FaXTwitter />
                    </Link>
                    <Link href="#" aria-label="Facebook" className="text-[20px] hover:scale-110 transition">
                        <FaFacebookF />
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#FFF4DE]/30 max-w-6xl mx-auto mb-10" data-aos="fade-up"></div>

            {/* Footer content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6 text-sm">
                {/* Quick Links */}
                <div>
                    <h3 className="text-[#D7B26A] font-serif text-[24px] mb-4 tracking-wide">
                        QUICK LINKS
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/"
                                className="text-[16px] relative hover:text-[#D7B26A] transition duration-300 
                                after:content-[''] after:absolute after:left-0 after:-bottom-[4px] 
                                after:w-0 after:h-[1px] after:bg-[#D7B26A] after:transition-all after:duration-300 
                                hover:after:w-full">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/about" className="text-[16px] relative hover:text-[#D7B26A] transition duration-300 
                            after:content-[''] after:absolute after:left-0 after:-bottom-[4px] 
                            after:w-0 after:h-[1px] after:bg-[#D7B26A] after:transition-all after:duration-300 
                            hover:after:w-full">About Us</Link>
                        </li>

                        <li>
                            <Link href="/gallery" className="text-[16px] relative hover:text-[#D7B26A] transition duration-300 
                            after:content-[''] after:absolute after:left-0 after:-bottom-[4px] 
                            after:w-0 after:h-[1px] after:bg-[#D7B26A] after:transition-all after:duration-300 
                            hover:after:w-full">Gallery</Link>
                        </li>

                        <li>
                            <Link href="/faq" className="text-[16px] relative hover:text-[#D7B26A] transition duration-300 
                            after:content-[''] after:absolute after:left-0 after:-bottom-[4px] 
                            after:w-0 after:h-[1px] after:bg-[#D7B26A] after:transition-all after:duration-300 
                            hover:after:w-full">FAQs</Link>
                        </li>
                    </ul>
                </div>

                {/* Popular Services */}
                <div>
                    <h3 className="text-[#D7B26A] font-serif text-[24px] mb-4 tracking-wide">
                        POPULAR SERVICES
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/services/venuesourcing" className="text-[16px] relative hover:text-[#D7B26A] transition duration-300 
                            after:content-[''] after:absolute after:left-0 after:-bottom-[4px] 
                            after:w-0 after:h-[1px] after:bg-[#D7B26A] after:transition-all after:duration-300 
                            hover:after:w-full">Venue Sourcing</Link>
                        </li>

                        <li>
                            <Link href="/services/catering" className="text-[16px] relative hover:text-[#D7B26A] transition duration-300 
                            after:content-[''] after:absolute after:left-0 after:-bottom-[4px] 
                            after:w-0 after:h-[1px] after:bg-[#D7B26A] after:transition-all after:duration-300 
                            hover:after:w-full">Catering</Link>
                        </li>

                        <li>
                            <Link href="/services/style" className="text-[16px] relative hover:text-[#D7B26A] transition duration-300 
                            after:content-[''] after:absolute after:left-0 after:-bottom-[4px] 
                            after:w-0 after:h-[1px] after:bg-[#D7B26A] after:transition-all after:duration-300 
                            hover:after:w-full">Styles & Designs</Link>
                        </li>

                        <li>
                            <Link href="/services/floral" className="text-[16px] relative hover:text-[#D7B26A] transition duration-300 
                            after:content-[''] after:absolute after:left-0 after:-bottom-[4px] 
                            after:w-0 after:h-[1px] after:bg-[#D7B26A] after:transition-all after:duration-300 
                            hover:after:w-full">Floral</Link>
                        </li>
                    </ul>
                </div>

                {/* Terms and policies Pages */}
                <div>
                    <h3 className="text-[#D7B26A] font-serif text-[24px] mb-4 tracking-wide">
                        TERMS & POLICIES
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/terms-and-conditions" className="text-[16px] relative hover:text-[#D7B26A] transition duration-300 
                            after:content-[''] after:absolute after:left-0 after:-bottom-[4px] 
                            after:w-0 after:h-[1px] after:bg-[#D7B26A] after:transition-all after:duration-300 
                            hover:after:w-full">Terms & Conditions</Link>
                        </li>

                        <li>
                            <Link href="/terms-and-conditions" className="text-[16px] relative hover:text-[#D7B26A] transition duration-300 
                            after:content-[''] after:absolute after:left-0 after:-bottom-[4px] 
                            after:w-0 after:h-[1px] after:bg-[#D7B26A] after:transition-all after:duration-300 
                            hover:after:w-full">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-[#D7B26A] font-serif text-[24px] mb-4 tracking-wide">
                        CONTACT
                    </h3>
                    <ul className="space-y-3">
                        <li>
                            <a className="flex items-center gap-2 hover:text-[#D7B26A] transition duration-300">
                                <FaPhoneAlt className="text-[#D7B26A] w-4 h-4" />
                                <span className="text-[16px]">0426006760</span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="mailto:the.events.oc@gmail.com"
                                className="flex items-center gap-2 hover:text-[#D7B26A] transition duration-300"
                                aria-label="Send an email to the.events.oc@gmail.com"
                            >
                                <FaEnvelope className="text-[#D7B26A] w-4 h-4" />
                                <span className="text-[16px]">the.events.oc@gmail.com</span>
                            </a>
                        </li>

                        <li className="flex items-center gap-2">
                            <FaPaperPlane className="text-[#D7B26A]" /> <span className="text-[16px]">Gold Coast</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#FFF4DE]/30 mt-10 mb-4 max-w-6xl mx-auto"></div>

            {/* Copyright */}
            <div className="text-center text-gray-400 text-[16px]">
                2025 Copyright © <span className="text-[#D7B26A]">EventsOC</span> - Events of the Century. Crafted by{" "}
                <span className="text-[#D7B26A]">Murphys Technology</span>
            </div>
        </footer>
    );
};

export default Footer;
