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

  const steps = [
    { step: 1, label: "Basic Info" },
    { step: 2, label: "Event Details" },
    { step: 3, label: "Preferences" },
    { step: 4, label: "Verification" },
  ];

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <Dialog.Panel className="bg-black rounded-lg w-full max-w-md sm:max-w-2xl p-4 sm:p-6 relative border border-[#D7B26A]/50 shadow-lg">
        {/* Logo & Title */}
        <div className="flex flex-col items-center justify-center">
          <Image src={Event_OC_Logo} alt="Logo" className="w-24 h-auto sm:w-32 mb-2" />
          <div className="flex items-center gap-2 sm:gap-4 mt-4 flex-wrap justify-center">
            <Image src={Left_heading_line} alt="Left line" className="w-6 sm:w-10 h-auto" />
            <span
              className="text-[#D7B26A] text-[20px] sm:text-[26px] text-center uppercase"
              style={{ fontFamily: "var(--font-cinzel-regular)", lineHeight: "1.2" }}
            >
              Excited to Engage <br /> with our Team?
            </span>
            <Image src={Right_heading_line} alt="Right line" className="w-6 sm:w-10 h-auto" />
          </div>
        </div>

        {/* Step Progress Indicator */}
        <div className="flex items-center justify-center mb-6 mt-6 flex-wrap gap-2 sm:gap-4">
          {steps.map((item, index) => (
            <div key={item.step} className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full text-sm font-semibold transition-all duration-300 ${
                  step === item.step
                    ? "bg-[#D7B26A] text-black shadow-[0_0_10px_#D7B26A]"
                    : step > item.step
                    ? "bg-[#D7B26A]/80 text-black"
                    : "border border-[#D7B26A]/40 text-[#D7B26A]/60"
                }`}
              >
                {item.step}
              </div>
              <span className={`ml-1 sm:ml-2 text-xs sm:text-sm font-medium ${step === item.step ? "text-[#D7B26A]" : "text-[#D7B26A]/60"}`}>
                {item.label}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`w-10 sm:w-16 h-[2px] mx-1 sm:mx-2 transition-all duration-300 ${
                    step > item.step ? "bg-[#D7B26A]" : "bg-[#D7B26A]/30"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="text-center text-black dark:text-white text-base sm:text-lg mb-6 space-y-4">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-2 flex flex-col gap-3">
              <div>
                <label className="block text-sm sm:text-base font-medium text-[#D7B26A] mb-1 text-start">
                  Full Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full border border-[#D7B26A] px-2 sm:px-3 py-2 rounded-md bg-transparent text-white text-sm sm:text-base"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <label className="block text-sm sm:text-base font-medium text-[#D7B26A] mb-1 text-start">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    required
                    className="w-full border border-[#D7B26A] px-2 sm:px-3 py-2 rounded-md bg-transparent text-white text-sm sm:text-base"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm sm:text-base font-medium text-[#D7B26A] mb-1 text-start">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    className="w-full border border-[#D7B26A] px-2 sm:px-3 py-2 rounded-md bg-transparent text-white text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-2 flex flex-col gap-3">
              <div>
                <label className="block text-sm sm:text-base font-medium text-[#D7B26A] mb-1 text-start">
                  Event Type
                </label>
                <input
                  type="text"
                  name="eventType"
                  required
                  className="w-full border border-[#D7B26A] px-2 sm:px-3 py-2 rounded-md bg-transparent text-white text-sm sm:text-base"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1">
                  <label className="block text-sm sm:text-base font-medium text-[#D7B26A] mb-1 text-start">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    required
                    className="w-full border border-[#D7B26A] px-2 sm:px-3 py-2 rounded-md bg-transparent text-white text-sm sm:text-base"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm sm:text-base font-medium text-[#D7B26A] mb-1 text-start">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    className="w-full border border-[#D7B26A] px-2 sm:px-3 py-2 rounded-md bg-transparent text-white text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm sm:text-base font-medium text-[#D7B26A] mb-1 text-start">
                  Select Budget
                </label>
                <select className="w-full border border-[#D7B26A] px-2 sm:px-3 py-2 rounded-md bg-transparent text-[#D7B26A] text-sm sm:text-base">
                  <option value="">Select Budget</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm sm:text-base font-medium text-[#D7B26A] mb-1 text-start">
                  Your Message
                </label>
                <textarea
                  placeholder="Special Requests..."
                  rows={3}
                  className="w-full border border-[#D7B26A] px-2 sm:px-3 py-2 rounded-md bg-transparent text-white text-sm sm:text-base"
                />
              </div>

              <div>
                <p className="block text-sm sm:text-base font-medium text-[#D7B26A] mb-1 text-start">
                  I need a:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-[#D7B26A]">
                  {["Venue", "Catering", "Entertainment", "AV"].map((service) => (
                    <label key={service} className="flex items-center gap-1">
                      <input type="checkbox" className="mr-1" /> {service}
                    </label>
                  ))}
                  {["Style/Design", "Floral", "Photographer"].map((service) => (
                    <label key={service} className="flex items-center gap-1">
                      <input type="checkbox" className="mr-1" /> {service}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-4">
              <p className="block text-sm sm:text-base font-medium text-[#D7B26A] mb-1 text-start">
                Preferred Contact Method:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base text-[#D7B26A]">
                {["Email", "Call", "SMS"].map((method) => (
                  <label key={method} className="flex items-center gap-1">
                    <input type="checkbox" className="mr-1" /> {method}
                  </label>
                ))}
              </div>

              {/* Terms */}
              <div>
                <label className="flex items-center text-sm sm:text-base font-medium text-[#D7B26A] gap-1">
                  <input type="checkbox" className="mr-1" />
                  I agree to the{" "}
                  <Link href="/terms-and-conditions" className="underline ml-1">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-4 py-2 rounded border border-[#D7B26A] ${
              step === 1
                ? "bg-gray-300 text-black cursor-not-allowed"
                : "bg-transparent text-[#D7B26A] hover:bg-[#D7B26A] hover:text-black transition-colors"
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
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-6 text-[20px] sm:text-[22px] text-[#D7B26A] hover:text-[#ffda8f] cursor-pointer"
        >
          ✕
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
