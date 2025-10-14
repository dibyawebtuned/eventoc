"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Event_OC_Logo from "/public/assets/img/EventOC_Logo.png";
import {
  Gift,
  Umbrella,
  Sparkles,
  Music,
  Users,
  Building2,
  UtensilsCrossed,
  Headphones,
  Flower2,
  Camera,
} from "lucide-react";
import { Dialog } from "@headlessui/react";

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
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { href: "/events/birthday", label: "Birthday", icon: Gift },
  ];

  const servicemenusItems = [
    { href: "/services/venuesourcing", label: "Venue Sourcing", icon: Building2 },
  ];

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data:", formData);
    setIsModalOpen(false);
    setStep(1);
    setFormData({ firstName: "", lastName: "", email: "", phone: "" });
  };

  return (
    <>
      <div className="container">
        {/* Main Navbar */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 ${
            isScrolled ? "bg-black/85 backdrop-blur-md rounded-xl shadow-lg border border-[#7A5E39]" : "bg-black"
          }`}
        >
          <div className="mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="relative w-40 h-16">
              <Link href="/">
                <Image src={Event_OC_Logo} alt="Logo" fill className="object-contain" priority />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6 text-white font-medium">
              <li className="relative group">
                <Link href="/" className="flex items-center gap-1">
                  Events
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <ul className="absolute left-0 top-full mt-2 w-[260px] bg-[#0A0A0A]/95 border border-[#7A5E39] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index} className="px-4 py-2 border-b border-[#7A5E39]/60 last:border-b-0 hover:bg-[#7A5E39]/10 transition-all duration-300">
                        <Link href={item.href} className="flex items-center gap-3 text-white hover:text-[#7A5E39]">
                          <Icon className="w-5 h-5 text-[#7A5E39]" strokeWidth={1} />
                          <span className="text-[14px] font-light">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>

              <li className="relative group">
                <Link href="/" className="flex items-center gap-1">
                  Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <ul className="absolute left-0 top-full mt-2 w-[260px] bg-[#0A0A0A]/95 border border-[#7A5E39] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                  {servicemenusItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index} className="px-4 py-2 border-b border-[#7A5E39]/60 last:border-b-0 hover:bg-[#7A5E39]/10 transition-all duration-300">
                        <Link href={item.href} className="flex items-center gap-3 text-white hover:text-[#7A5E39]">
                          <Icon className="w-5 h-5 text-[#7A5E39]" strokeWidth={1} />
                          <span className="text-[14px] font-light">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>

              <li><Link href="/">Gallery</Link></li>
              <li><Link href="/">About</Link></li>
              <li><Link href="/">Portfolio</Link></li>
              <li><Link href="/">FAQ</Link></li>
              <li><Link href="/">Contact</Link></li>

              {/* Book Now Button */}
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block px-6 py-2 rounded-md font-normal transition-shadow shadow-sm bg-gradient-to-b from-[#BE9545] to-[#7A5E39] text-white"
                >
                  Book Now
                </button>
              </li>
            </ul>

            {/* Mobile Toggle */}
            <div className="md:hidden">
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
            </div>
          </div>
        </nav>
      </div>

      {/* Booking Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <Dialog.Panel className="bg-white rounded-lg max-w-md w-full p-6 relative">
          <Dialog.Title className="text-xl font-semibold mb-4">Book Your Event</Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 && (
              <div className="space-y-2">
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded-md"
                />
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-2">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded-md"
                />
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-200 rounded-md">
                  Back
                </button>
              )}
              {step < 2 ? (
                <button type="button" onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded-md">
                  Next
                </button>
              ) : (
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">
                  Submit
                </button>
              )}
            </div>

            <div className="mt-4 text-center text-sm text-gray-500">
              Step {step} of 2
            </div>
          </form>

          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
