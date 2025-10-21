"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Event_OC_Logo from "/public/assets/img/EventOC_Logo.png";
import Left_heading_line from "/public/assets/img/Left.png";
import Right_heading_line from "/public/assets/img/Right.png";
import { Gift, Umbrella, Sparkles, Music, Users, Building2, UtensilsCrossed, Headphones, Flower2, Camera, } from "lucide-react";
import { Dialog } from "@headlessui/react";
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


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        contact: "",
        eventType: "",
        location: "",
    });

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 60);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const menuItems = [
        { href: "/events/birthday", label: "Birthday", icon: Gift },
        // { href: "/events/workshops", label: "Beach & Pool", icon: Umbrella },
        // { href: "/events/festivals", label: "Brand Launch", icon: Sparkles },
        // { href: "/events/musicnight", label: "Music Night", icon: Music },
        // { href: "/events/festivals", label: "Custom Events", icon: Users },
    ];

    const servicemenusItems = [
        { href: "/services/venuesourcing", label: "Venue Sourcing", icon: Building2 },
        // { href: "/services/catering", label: "Catering", icon: UtensilsCrossed },
        // { href: "/services/entertainment", label: "Audio & Visuals", icon: Headphones },
        // { href: "/services/design", label: "Style & Designs", icon: Sparkles },
        // { href: "/services/floral", label: "Floral", icon: Flower2 },
        // { href: "/services/photographs", label: "Photographs", icon: Camera },
    ];


    // Step navigation
    const nextStep = () => setStep((prev) => (prev < 3 ? prev + 1 : prev));
    const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking data:", formData);

        // Close modal and reset form
        setIsModalOpen(false);
        setStep(1);
        setFormData({
            firstName: "",
            email: "",
            contact: "",
            eventType: "",
            location: "",
        });
    };

    return (
        <>
            <div className="container">
                {/* Main Navbar */}
                {!isScrolled && (
                    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
                        <div className="mx-auto transition-all duration-300 ease-in-out bg-black backdrop-blur-md py-5 shadow-2xl">
                            <div className="mx-auto px-6 relative">
                                {/* Desktop */}
                                <div className={`flex items-center justify-between sm:px-[70px] py-[8px] ${montserrat.className}`}>
                                    <ul className="hidden md:flex items-center gap-8 text-white text-[16px] font-medium">
                                        {/* Events */}
                                        <li className="relative group">
                                            <Link href="/" className="flex items-center gap-1">
                                                Events
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3 mt-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </Link>

                                            {/* Desktop Dropdown */}
                                            <ul className="w-[260px] border border-[#7A5E39] absolute left-0 top-full mt-2 bg-[#0A0A0A]/95 backdrop-blur-sm rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                                                {menuItems.map((item, index) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="px-4 py-2 border-b border-[#7A5E39]/60 last:border-b-0 hover:bg-[#7A5E39]/10 transition-all duration-300">
                                                            <Link
                                                                href={item.href}
                                                                className="flex flex-row items-center gap-3 text-white hover:text-[#7A5E39] transition-colors">
                                                                <Icon
                                                                    className="w-5 h-5 text-[#7A5E39]"
                                                                    strokeWidth={1} />
                                                                <span className="text-[14px] font-light tracking-wide">
                                                                    {item.label}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>

                                        {/* Services */}
                                        <li className="relative group">
                                            <Link href="/" className="flex items-center gap-1">
                                                Services
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3 mt-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </Link>

                                            {/* Desktop Dropdown */}
                                            <ul className="w-[260px] border border-[#7A5E39] absolute left-0 top-full mt-2 bg-[#0A0A0A]/95 backdrop-blur-sm rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                                                {servicemenusItems.map((item, index) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="px-4 py-2 border-b border-[#7A5E39]/60 last:border-b-0 hover:bg-[#7A5E39]/10 transition-all duration-300"
                                                        >
                                                            <Link
                                                                href={item.href}
                                                                className="flex flex-row items-center gap-3 text-white hover:text-[#7A5E39] transition-colors"
                                                            >
                                                                <Icon
                                                                    className="w-5 h-5 text-[#7A5E39]"
                                                                    strokeWidth={1}
                                                                />
                                                                <span className="text-[14px] font-light tracking-wide">
                                                                    {item.label}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>

                                        {/* Gallery */}
                                        <li>
                                            <Link href="/gallery">Gallery</Link>
                                        </li>

                                        {/* About */}
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                    </ul>

                                    <div className="md:hidden">
                                        <button
                                            aria-label="Toggle menu"
                                            aria-expanded={mobileOpen}
                                            onClick={() => setMobileOpen((s) => !s)}
                                            className="p-2 rounded hover:bg-white/10 text-white transition"
                                        >
                                            {mobileOpen ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 8h16M4 16h16"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    </div>

                                    <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none "
                                        style={{ zIndex: 51 }}>
                                        <Link href="/" className="pointer-events-auto">
                                            <Image
                                                src={Event_OC_Logo}
                                                alt="Logo"
                                                width={160}
                                                height={95}
                                                priority
                                                className="object-contain"
                                            />
                                        </Link>
                                    </div>

                                    <ul className="hidden md:flex items-center gap-6 text-white text-[16px] font-medium">
                                        {/* Portfolio */}
                                        <li>
                                            <Link href="/portfolio">Portfolio</Link>
                                        </li>

                                        {/* FAQ */}
                                        <li>
                                            <Link href="/faq">FAQ</Link>
                                        </li>

                                        {/* Contact */}
                                        <li>
                                            <Link href="/contact">Contact</Link>
                                        </li>

                                        {/* Button */}
                                        <li>
                                            <button
                                                onClick={() => setIsModalOpen(true)}
                                                className="inline-block px-6 py-2 rounded-md transition-shadow shadow-sm bg-gradient-to-b from-[#BE9545] to-[#7A5E39] text-white" >
                                                Book Now
                                            </button>
                                        </li>
                                    </ul>

                                    {/* Mobile Toggle */}
                                    {/* <div className="md:hidden">
                                        <button
                                            aria-label="Toggle menu"
                                            onClick={() => setMobileOpen((s) => !s)}
                                            className="p-2 rounded hover:bg-white/10 text-white transition"
                                        >
                                            {mobileOpen ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                                                </svg>
                                            )}
                                        </button>
                                    </div> */}
                                </div>

                                {/* Booking Modal */}
                                <Dialog
                                    open={isModalOpen}
                                    onClose={() => setIsModalOpen(false)}
                                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                                >
                                    <Dialog.Panel className="bg-[#000000] rounded-lg max-w-2xl w-full p-6 relative border border-[#D7B26A]/50">

                                        {/* Logo & Title */}
                                        <div className="flex flex-col items-center justify-center">
                                            <div>
                                                <Image src={Event_OC_Logo} alt="Logo" />
                                            </div>

                                            <div className="flex items-center gap-[15px]">
                                                <div>
                                                    <Image src={Left_heading_line} alt="Left_heading_line" />
                                                </div>
                                                <span
                                                    className="text-[#D7B26A] text-[26px] text-center uppercase"
                                                    style={{
                                                        fontFamily: "var(--font-cinzel-regular)",
                                                        lineHeight: "1.2",
                                                    }}
                                                >
                                                    Excited to Engage <br /> with our Team?
                                                </span>
                                                <div>
                                                    <Image src={Right_heading_line} alt="Right_heading_line" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Step Progress Indicator */}
                                        <div className="flex items-center justify-center mb-8 mt-8">
                                            {[
                                                { step: 1, label: "Basic Details" },
                                                { step: 2, label: "Contact Details" },
                                                { step: 3, label: "Verification" },
                                            ].map((item, index, arr) => (
                                                <div key={item.step} className="flex items-center">
                                                    {/* Step Circle */}
                                                    <div
                                                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all duration-300 
                                                                    ${step === item.step
                                                                ? "bg-[#D7B26A] text-black shadow-[0_0_10px_#D7B26A]"
                                                                : step > item.step
                                                                    ? "bg-[#D7B26A]/80 text-black"
                                                                    : "border border-[#D7B26A]/40 text-[#D7B26A]/60"
                                                            }`}
                                                    >
                                                        {item.step}
                                                    </div>

                                                    {/* Label */}
                                                    <span
                                                        className={`ml-2 text-sm font-medium ${step === item.step
                                                            ? "text-[#D7B26A]"
                                                            : "text-[#D7B26A]/60"
                                                            }`}
                                                    >
                                                        {item.label}
                                                    </span>

                                                    {/* Connecting Line */}
                                                    {index < arr.length - 1 && (
                                                        <div
                                                            className={`w-16 h-[2px] mx-2 transition-all duration-300 ${step > item.step ? "bg-[#D7B26A]" : "bg-[#D7B26A]/30"
                                                                }`}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Booking Form */}
                                        <form onSubmit={handleSubmit} onKeyDown={(e) => e.key === "Enter" && e.preventDefault()} className="space-y-4">
                                            {step === 1 && (
                                                <>
                                                    {/* Form Fields */}
                                                    <div className="space-y-2 flex flex-col gap-4">
                                                        <div>
                                                            <label className="block text-sm font-medium text-[#D7B26A] mb-2">
                                                                Full Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="firstName"
                                                                value={formData.firstName}
                                                                onChange={handleChange}
                                                                required
                                                                className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                                                            />
                                                        </div>

                                                        <div className="flex gap-4">
                                                            <div className="w-1/2">
                                                                <label className="block text-sm font-medium text-[#D7B26A] mb-2">
                                                                    Email
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="email"
                                                                    value={formData.email}
                                                                    onChange={handleChange}
                                                                    required
                                                                    className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                                                                />
                                                            </div>

                                                            <div className="w-1/2">
                                                                <label className="block text-sm font-medium text-[#D7B26A] mb-2">
                                                                    Contact Number
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="contact"
                                                                    value={formData.contact}
                                                                    onChange={handleChange}
                                                                    required
                                                                    className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {step === 2 && (
                                                <div className="space-y-2 flex flex-col gap-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-[#D7B26A] mb-2">
                                                            Event Type
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="eventType"
                                                            value={formData.eventType}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-[#D7B26A] mb-2">
                                                            Location
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="location"
                                                            value={formData.location}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {step === 3 && (
                                                <div className="text-center text-[#D7B26A]">
                                                    <p className="mb-4 text-lg font-medium">
                                                        Review & Verify Your Details
                                                    </p>
                                                    <p className="text-sm opacity-70">
                                                        Once confirmed, our team will contact you shortly.
                                                    </p>
                                                </div>
                                            )}

                                            {/* Navigation Buttons */}
                                            <div className="flex justify-between mt-6">
                                                {step > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={prevStep}
                                                        className="px-4 py-2 bg-[#D7B26A]/10 text-[#D7B26A] rounded-md border border-[#D7B26A]/40 hover:bg-[#D7B26A]/20 transition"
                                                    >
                                                        Back
                                                    </button>
                                                )}
                                                {step < 3 ? (
                                                    <button
                                                        type="button"
                                                        onClick={nextStep}
                                                        className="px-4 py-2 bg-[#D7B26A] text-black rounded-md hover:bg-[#D7B26A]/90 transition"
                                                    >
                                                        Next
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="submit"
                                                        className="px-4 py-2 bg-[#D7B26A] text-black rounded-md hover:bg-[#D7B26A]/90 transition"
                                                    >
                                                        Submit
                                                    </button>
                                                )}
                                            </div>
                                        </form>

                                        {/* Close Button */}
                                        <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-6 text-[#D7B26A]/60 text-2xl hover:text-[#D7B26A] cursor-pointer transition-colors duration-300">
                                            ✕
                                        </button>
                                    </Dialog.Panel>
                                </Dialog>

                                {/* Mobile Menu */}
                                <div
                                    className={`md:hidden mt-3 transition-all duration-200 ${mobileOpen ? "block" : "hidden"
                                        }`}
                                >
                                    <div className="bg-black/95 rounded-lg p-4 shadow-lg border border-gray-800/40">
                                        <ul className="flex flex-col gap-2 text-white text-base font-medium">
                                            {/* Events with Submenu */}
                                            <li>
                                                <button
                                                    className="w-full text-left flex justify-between items-center"
                                                    onClick={() => setEventsOpen(!eventsOpen)}
                                                >
                                                    Events
                                                    <span>{eventsOpen ? "-" : "+"}</span>
                                                </button>
                                                {eventsOpen && (
                                                    <ul className="flex flex-col gap-2 mt-2 text-sm text-gray-300">
                                                        {menuItems.map((item, index) => {
                                                            const Icon = item.icon;
                                                            return (
                                                                <li
                                                                    key={index}
                                                                    className="px-4 py-2 border-b border-[#7A5E39]/60 last:border-b-0 hover:bg-[#7A5E39]/10 transition-all duration-300"
                                                                >
                                                                    <Link
                                                                        href={item.href}
                                                                        className="flex flex-row items-center gap-3 text-white hover:text-[#7A5E39] transition-colors"
                                                                    >
                                                                        <Icon
                                                                            className="w-5 h-5 text-[#7A5E39]"
                                                                            strokeWidth={1}
                                                                        />
                                                                        <span className="text-[14px] font-light tracking-wide">
                                                                            {item.label}
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                )}
                                            </li>

                                            {/* Services with Submenu */}
                                            <li>
                                                <button
                                                    className="w-full text-left flex justify-between items-center"
                                                    onClick={() => setServicesOpen(!servicesOpen)}
                                                >
                                                    Services
                                                    <span>{servicesOpen ? "-" : "+"}</span>
                                                </button>
                                                {servicesOpen && (
                                                    <ul className="flex flex-col gap-2 mt-2 text-sm text-gray-300">
                                                        {servicemenusItems.map((item, index) => {
                                                            const Icon = item.icon;
                                                            return (
                                                                <li
                                                                    key={index}
                                                                    className="px-4 py-2 border-b border-[#7A5E39]/60 last:border-b-0 hover:bg-[#7A5E39]/10 transition-all duration-300"
                                                                >
                                                                    <Link
                                                                        href={item.href}
                                                                        className="flex flex-row items-center gap-3 text-white hover:text-[#7A5E39] transition-colors"
                                                                    >
                                                                        <Icon
                                                                            className="w-5 h-5 text-[#7A5E39]"
                                                                            strokeWidth={1}
                                                                        />
                                                                        <span className="text-[14px] font-light tracking-wide">
                                                                            {item.label}
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                )}
                                            </li>

                                            {/* Other links */}
                                            <li>
                                                <Link href="/">Gallery</Link>
                                            </li>
                                            <li>
                                                <Link href="/">About</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Portfolio</Link>
                                            </li>
                                            <li>
                                                <Link href="/">FAQ</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Contact</Link>
                                            </li>

                                            {/* Button */}
                                            <li>
                                                <Link
                                                    href="/book"
                                                    className="block text-center px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white"
                                                >
                                                    Book Now
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                )}

                {/* Floating Navbar */}
                {isScrolled && (
                    <nav className={`fixed top-3 left-1/2 z-50 w-[95%] max-w-[1064px] bg-black/85 backdrop-blur-md rounded-xl shadow-lg border border-[#7A5E39] transform -translate-x-1/2 transition-all duration-300 ${montserrat.className}`}>
                        <div className="flex items-center justify-between px-4 py-2 gap-4">
                            {/* LOGO */}
                            <div className="relative w-40 h-16">
                                <Image src={Event_OC_Logo} alt="Logo" fill className="object-contain" priority />
                            </div>

                            {/* Left Menu */}
                            <ul className="hidden md:flex items-center gap-6 text-white font-medium">
                                {/* Events */}
                                <li className="relative group">
                                    {/* Events */}
                                    <Link href="/" className="flex items-center gap-1">
                                        Events
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 mt-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    <ul className="w-[260px] border border-[#7A5E39] absolute left-0 top-full mt-2 bg-[#0A0A0A]/95 backdrop-blur-sm rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                                        {menuItems.map((item, index) => {
                                            const Icon = item.icon;
                                            return (
                                                <li
                                                    key={index}
                                                    className="px-4 py-2 border-b border-[#7A5E39]/60 last:border-b-0 hover:bg-[#7A5E39]/10 transition-all duration-300"
                                                >
                                                    <Link
                                                        href={item.href}
                                                        className="flex flex-row items-center gap-3 text-white hover:text-[#7A5E39] transition-colors"
                                                    >
                                                        <Icon className="w-5 h-5 text-[#7A5E39]" strokeWidth={1} />
                                                        <span className="text-[14px] font-light tracking-wide">
                                                            {item.label}
                                                        </span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>

                                {/* Services */}
                                <li className="relative group">
                                    <Link href="/" className="flex items-center gap-1">
                                        Services
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 mt-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </Link>

                                    {/* Desktop Dropdown */}
                                    <ul className="w-[260px] border border-[#7A5E39] absolute left-0 top-full mt-2 bg-[#0A0A0A]/95 backdrop-blur-sm rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                                        {servicemenusItems.map((item, index) => {
                                            const Icon = item.icon;
                                            return (
                                                <li
                                                    key={index}
                                                    className="px-4 py-2 border-b border-[#7A5E39]/60 last:border-b-0 hover:bg-[#7A5E39]/10 transition-all duration-300"
                                                >
                                                    <Link
                                                        href={item.href}
                                                        className="flex flex-row items-center gap-3 text-white hover:text-[#7A5E39] transition-colors"
                                                    >
                                                        <Icon className="w-5 h-5 text-[#7A5E39]" strokeWidth={1} />
                                                        <span className="text-[14px] font-light tracking-wide">
                                                            {item.label}
                                                        </span>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>

                                <li>
                                    <Link href="/gallery">Gallery</Link>
                                </li>

                                <li>
                                    <Link href="/about">About</Link>
                                </li>

                                <li>
                                    <Link href="/portfolio">Portfolio</Link>
                                </li>

                                <li>
                                    <Link href="/faq">FAQ</Link>
                                </li>

                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>

                            {/* Mobile Toggle */}
                            <div className="md:hidden">
                                <button
                                    aria-label="Toggle menu"
                                    aria-expanded={mobileOpen}
                                    onClick={() => setMobileOpen((s) => !s)}
                                    className="p-2 rounded hover:bg-white/10 text-white transition"
                                >
                                    {mobileOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 8h16M4 16h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {/* Right Menu */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="hidden sm:inline-block px-6 py-2 rounded-md font-medium transition-shadow shadow-sm bg-gradient-to-b from-[#BE9545] to-[#7A5E39] text-white">
                                Book Now
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        <div className={`md:hidden mt-2 transition-all duration-200 ${mobileOpen ? "block" : "hidden"}`}>
                            <div className="bg-black/95 rounded-lg p-4 shadow-lg border border-gray-800/40">
                                <ul className="flex flex-col gap-2 text-white text-sm font-medium">
                                    {/* Events with Submenu */}
                                    <li>
                                        <button className="w-full text-left flex justify-between items-center" onClick={() => setEventsOpen(!eventsOpen)}>
                                            Events
                                            <span>{eventsOpen ? "-" : "+"}</span>
                                        </button>
                                        {eventsOpen && (
                                            <ul className="flex flex-col gap-2 mt-2 text-sm text-gray-300">
                                                {menuItems.map((item, index) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="px-4 py-2 border-b border-[#7A5E39]/60 last:border-b-0 hover:bg-[#7A5E39]/10 transition-all duration-300"
                                                        >
                                                            <Link
                                                                href={item.href}
                                                                className="flex flex-row items-center gap-3 text-white hover:text-[#7A5E39] transition-colors"
                                                            >
                                                                <Icon
                                                                    className="w-5 h-5 text-[#7A5E39]"
                                                                    strokeWidth={1}
                                                                />
                                                                <span className="text-[14px] font-light tracking-wide">
                                                                    {item.label}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </li>

                                    {/* Services with Submenu */}
                                    <li>
                                        <button
                                            className="w-full text-left flex justify-between items-center"
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                        >
                                            Services
                                            <span>{servicesOpen ? "-" : "+"}</span>
                                        </button>
                                        {servicesOpen && (
                                            <ul className="flex flex-col gap-2 mt-2 text-sm text-gray-300">
                                                {servicemenusItems.map((item, index) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <li
                                                            key={index}
                                                            className="px-4 py-2 border-b border-[#7A5E39]/60 last:border-b-0 hover:bg-[#7A5E39]/10 transition-all duration-300"
                                                        >
                                                            <Link
                                                                href={item.href}
                                                                className="flex flex-row items-center gap-3 text-white hover:text-[#7A5E39] transition-colors"
                                                            >
                                                                <Icon
                                                                    className="w-5 h-5 text-[#7A5E39]"
                                                                    strokeWidth={1}
                                                                />
                                                                <span className="text-[14px] font-light tracking-wide">
                                                                    {item.label}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </li>

                                    {/* Other links */}
                                    <li><Link href="/">Gallery</Link></li>
                                    <li><Link href="/">About</Link></li>
                                    <li><Link href="/">Portfolio</Link></li>
                                    <li><Link href="/">FAQ</Link></li>
                                    <li><Link href="/">Contact</Link></li>

                                    <li>
                                        <Link href="/book" className="block text-center px-3 py-1 rounded-md font-semibold bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white">
                                            Book Now
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </>
    );
}