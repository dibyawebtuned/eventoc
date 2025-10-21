"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Event_OC_Logo from "/public/assets/img/EventOC_Logo.png";
import Left_heading_line from "/public/assets/img/Left.png";
import Right_heading_line from "/public/assets/img/Right.png";

export default function ThreeStepModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <Dialog.Panel className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full p-6 relative border border-[#D7B26A]/50 shadow-lg">
        {/* Logo & Title */}
        <div className="flex flex-col items-center justify-center">
          <Image src={Event_OC_Logo} alt="Logo" />
          <div className="flex items-center gap-[15px] mt-4">
            <Image src={Left_heading_line} alt="Left_heading_line" />
            <span
              className="text-[#D7B26A] text-[26px] text-center uppercase"
              style={{
                fontFamily: "var(--font-cinzel-regular)",
                lineHeight: "1.2",
              }}
            >
              Excited to Engage <br /> with our Team?
            </span>
            <Image src={Right_heading_line} alt="Right_heading_line" />
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
              <span
                className={`ml-2 text-sm font-medium ${step === item.step ? "text-[#D7B26A]" : "text-[#D7B26A]/60"
                  }`}
              >
                {item.label}
              </span>
              {index < arr.length - 1 && (
                <div
                  className={`w-16 h-[2px] mx-2 transition-all duration-300 ${step > item.step ? "bg-[#D7B26A]" : "bg-[#D7B26A]/30"
                    }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content Placeholder */}
        <div className="text-center text-black dark:text-white text-lg mb-6">
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

              <div>
                <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  className="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <>
              <div className="flex gap-[20px]">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                    Date
                  </label>
                  <input
                    type="date"
                    id="event-date"
                    name="event-date"
                    class="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-sm font-medium text-[#D7B26A] mb-2 text-start">
                    Event Type
                  </label>
                  <select id="event-type" name="event-type" class="w-full border border-[#D7B26A] px-3 py-2 rounded-md bg-transparent text-white">
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate</option>
                    <option value="birthday">Birthday</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="budget" class="block mb-1 font-semibold">Budget</label>
                <select id="budget" name="budget" class="w-full p-2 rounded border border-[#D7B26A] bg-black text-[#D7B26A]">
                  <option value="">Select budget</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <p class="font-semibold mb-2">I need a</p>
                <div class="grid grid-cols-2 gap-2">
                  <label><input type="checkbox" name="services" value="venue" class="mr-1" /> Venue</label>
                  <label><input type="checkbox" name="services" value="catering" class="mr-1" /> Catering</label>
                  <label><input type="checkbox" name="services" value="entertainment" class="mr-1" /> Entertainment</label>
                  <label><input type="checkbox" name="services" value="av" class="mr-1" /> AV</label>
                  <label><input type="checkbox" name="services" value="style" class="mr-1" /> Style/Design</label>
                  <label><input type="checkbox" name="services" value="floral" class="mr-1" /> Floral</label>
                  <label><input type="checkbox" name="services" value="photographer" class="mr-1" /> Photographer</label>
                </div>
              </div>

              <div>
                <label for="special-request" class="block mb-1 font-semibold">Special Request</label>
                <textarea id="special-request" name="special-request" rows="4" class="w-full p-2 rounded border border-[#D7B26A] bg-black text-[#D7B26A]" placeholder="Write any special requests here..."></textarea>
              </div>

              <div>
                <p class="font-semibold mb-2">Please indicate your preferred method of contact.</p>
                <div class="flex gap-4">
                  <label><input type="checkbox" name="contact-method" value="email" class="mr-1" /> Email</label>
                  <label><input type="checkbox" name="contact-method" value="call" class="mr-1" /> Call</label>
                  <label><input type="checkbox" name="contact-method" value="sms" class="mr-1" /> SMS</label>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-4 py-2 rounded ${step === 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            Back
          </button>

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Finish
            </button>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </Dialog.Panel>
    </Dialog>
  );
}
