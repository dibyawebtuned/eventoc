"use client";

import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Event_OC_Logo from "/public/assets/img/EventOC_Logo.png";
import Left_heading_line from "/public/assets/img/Left.png";
import Right_heading_line from "/public/assets/img/Right.png";

export default function FourStepModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
            <Dialog.Panel className="bg-black rounded-lg max-w-2xl w-full p-6 relative border border-[#D7B26A]/50 shadow-lg">
                {/* Logo & Title */}
                <div className="flex flex-col items-center justify-center">
                    <Image src={Event_OC_Logo} alt="Logo" />
                    <div className="flex items-center gap-[15px] mt-4">
                        <Image src={Left_heading_line} alt="Left_heading_line" />
                        <span
                            className="text-[#D7B26A] text-[26px] text-center uppercase"
                            style={{ fontFamily: "var(--font-cinzel-regular)", lineHeight: "1.2" }}
                        >
                            Excited to Engage <br /> with our Team?
                        </span>
                        <Image src={Right_heading_line} alt="Right_heading_line" />
                    </div>
                </div>

                {/* Step Progress Indicator */}
                <div className="flex items-center justify-center mb-8 mt-8">
                    {[{ step: 1, label: "Basic Info" }, { step: 2, label: "Event Details" }, { step: 3, label: "Preferences" }, { step: 4, label: "Verification" }].map(
                        (item, index, arr) => (
                            <div key={item.step} className="flex items-center">
                                <div
                                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-all duration-300 ${step === item.step
                                        ? "bg-[#D7B26A] text-black shadow-[0_0_10px_#D7B26A]"
                                        : step > item.step
                                            ? "bg-[#D7B26A]/80 text-black"
                                            : "border border-[#D7B26A]/40 text-[#D7B26A]/60"
                                        }`}
                                >
                                    {item.step}
                                </div>
                                <span className={`ml-2 text-sm font-medium ${step === item.step ? "text-[#D7B26A]" : "text-[#D7B26A]/60"}`}>
                                    {item.label}
                                </span>
                                {index < arr.length - 1 && (
                                    <div
                                        className={`w-16 h-[2px] mx-2 transition-all duration-300 ${step > item.step ? "bg-[#D7B26A]" : "bg-[#D7B26A]/30"
                                            }`}
                                    />
                                )}
                            </div>
                        )
                    )}
                </div>

                {/* Step Content */}
                <div className="text-center text-black dark:text-white text-lg mb-6 space-y-4">
                    {step === 1 && (
                        <>
                            {/* Form Fields */}
                            <div className="space-y-2 flex flex-col gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                                    />
                                </div>

                                <div className="flex gap-[20px]">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            required
                                            className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                                        />
                                    </div>

                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                                            Contact Number
                                        </label>
                                        <input
                                            type="text"
                                            name="contact"
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
                                <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                                    Event Type
                                </label>
                                <input
                                    type="text"
                                    name="eventType"
                                    required
                                    className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                                />
                            </div>

                            <div className="flex gap-[20px]">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        required
                                        className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                                    />
                                </div>

                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                                        Contact Number
                                    </label>
                                    <input
                                        type="text"
                                        name="contact"
                                        required
                                        className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                                    Select Budget
                                </label>
                                <select className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-[#D7B26A] text-sm">
                                    <option value="">Select Budget</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                                    Your Message
                                </label>
                                <textarea placeholder="Special Requests..." rows={3} className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white text-sm" />
                            </div>

                            <div>
                                <p className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">I need a:</p>
                                <div className="flex gap-4">
                                    {/* First Column */}
                                    <div className="flex flex-col items-start gap-2 w-1/2 text-sm text-[#D7B26A]">
                                        {["Venue", "Catering", "Entertainment", "AV"].map((service) => (
                                            <label key={service}>
                                                <input type="checkbox" className="mr-1" /> {service}
                                            </label>
                                        ))}
                                    </div>

                                    {/* Second Column */}
                                    <div className="flex flex-col items-start gap-2 w-1/2 text-sm text-[#D7B26A]">
                                        {["Style/Design", "Floral", "Photographer"].map((service) => (
                                            <label key={service}>
                                                <input type="checkbox" className="mr-1" /> {service}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-4">
                            <p className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">Preferred Contact Method:</p>
                            <div className="flex gap-4 text-sm text-[#D7B26A]">
                                {["Email", "Call", "SMS"].map((method) => (
                                    <label key={method}>
                                        <input type="checkbox" className="mr-1" /> {method}
                                    </label>
                                ))}
                            </div>

                            {/* Terms and Conditions Checkbox */}
                            <div>
                                <label className="flex items-center text-sm font-medium text-[#D7B26A]">
                                    <input type="checkbox" className="mr-1 block text-sm font-medium text-[#D7B26A] text-start" /> I agree to the <Link href="#" className="underline block text-sm font-medium text-[#D7B26A] ml-2 ">Terms and Conditions</Link>
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                    <button
                        onClick={prevStep}
                        disabled={step === 1}
                        className={`px-4 py-2 rounded border border-[#D7B26A] ${step === 1
                            ? "bg-gray-300 text-black cursor-not-allowed"
                            : "bg-transparent text-[#D7B26A] hover:bg-[#D7B26A] hover:text-white transition-colors"
                            }`}
                    >
                        Back
                    </button>

                    {step < 4 ? (
                        <button
                            onClick={nextStep}
                            className="px-4 py-2 rounded bg-[#D7B26A] text-black hover:bg-[#b89652] transition-colors cursor-pointer"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-[#D7B26A] text-black hover:bg-[#b89652] transition-colors cursor-pointer"
                        >
                            Finish
                        </button>
                    )}
                </div>

                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-6 text-[22px] text-[#D7B26A] hover:text-[#ffda8f] cursor-pointer">
                    ✕
                </button>
            </Dialog.Panel>
        </Dialog>
    );
}
