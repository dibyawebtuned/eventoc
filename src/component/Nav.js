"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 60);
        onScroll(); // initial check
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Main Navbar */}
            {!isScrolled && (
                <nav className="fixed top-0 left-0 w-full z-50">
                    <div className="mx-auto transition-all duration-300 ease-in-out bg-black/80 backdrop-blur-md mt-4 rounded-2xl w-[95%] py-5 shadow-2xl border border-gray-800/60">
                        <div className="max-w-7xl mx-auto px-6 relative">
                            <div className="flex items-center justify-between">
                                <ul className="hidden md:flex items-center gap-8 text-white text-lg font-medium">
                                    <li><Link href="/">Events</Link></li>
                                    <li><Link href="/">Services</Link></li>
                                    <li><Link href="/">Gallery</Link></li>
                                    <li><Link href="/">About</Link></li>
                                </ul>

                                <div className="md:hidden">
                                    <button
                                        aria-label="Toggle menu"
                                        aria-expanded={mobileOpen}
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
                                </div>

                                <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none top-3" style={{ zIndex: 51 }}>
                                    <Link href="/" className="pointer-events-auto">
                                        <Image src="/logo.png" alt="Logo" width={150} height={60} priority className="object-contain" />
                                    </Link>
                                </div>

                                <ul className="hidden md:flex items-center gap-6 text-white text-lg font-medium">
                                    <li><Link href="/">Portfolio</Link></li>
                                    <li><Link href="/">FAQ</Link></li>
                                    <li><Link href="/">Contact</Link></li>
                                    <li>
                                        <Link href="/book" className="inline-block px-6 py-2 rounded-md font-semibold transition-shadow shadow-sm bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white">
                                            Book Now
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Mobile Menu */}
                            <div className={`md:hidden mt-3 transition-all duration-200 ${mobileOpen ? "block" : "hidden"}`}>
                                <div className="bg-black/95 rounded-lg p-4 shadow-lg border border-gray-800/40">
                                    <ul className="flex flex-col gap-3 text-white text-base font-medium">
                                        <li><Link href="/">Events</Link></li>
                                        <li><Link href="/">Services</Link></li>
                                        <li><Link href="/">Gallery</Link></li>
                                        <li><Link href="/">About</Link></li>
                                        <li><Link href="/">Portfolio</Link></li>
                                        <li><Link href="/">FAQ</Link></li>
                                        <li><Link href="/">Contact</Link></li>
                                        <li>
                                            <Link href="/book" className="block text-center px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white">
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
                <nav className="fixed top-3 right-5 left-5 md:left-auto md:right-10 z-50 w-auto bg-black/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 transition-all duration-300">
                    <div className="flex items-center justify-between px-4 py-2 gap-4">
                        <ul className="hidden md:flex items-center gap-6 text-white font-medium">
                            <li><Link href="/">Events</Link></li>
                            <li><Link href="/">Services</Link></li>
                            <li><Link href="/">Gallery</Link></li>
                            <li><Link href="/">About</Link></li>
                        </ul>
                        <div className="md:hidden">
                            <button
                                aria-label="Toggle menu"
                                aria-expanded={mobileOpen}
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
                        </div>
                        <Link
                            href="/book"
                            className="hidden md:inline-block px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden mt-2 transition-all duration-200 ${mobileOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col gap-2 text-white text-sm font-medium">
                            <li><Link href="/">Events</Link></li>
                            <li><Link href="/">Services</Link></li>
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
                </nav>
            )}
        </>
    );
}
