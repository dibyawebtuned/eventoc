"use client";

import React from "react";
import Header from "@/component/Nav";
import Footer from "@/component/Footer";

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow px-6 md:px-16 lg:px-32 py-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#D7B26A] mb-6">
                    Terms & Conditions
                </h1>

                <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-300">
                    <p>
                        These Terms and Conditions (“Terms”) apply to all services provided
                        by <span className="text-[#D7B26A]">Events of The Century</span>
                        {" "} (we, us, or our). By booking our services, the client (you)
                        agrees to the following:
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold text-[#D7B26A] mb-2">
                            Bookings & Payments
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                A non-refundable deposit of <strong>[X amount]</strong> is
                                required to secure your event date.
                            </li>
                            <li>
                                If payment is not received on time, we reserve the right to
                                cancel services.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[#D7B26A] mb-2">
                            Changes & Amendments
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                Additional costs may apply for changes, rescheduling, or extra
                                services.
                            </li>
                            <li>
                                Any requests to change event details (e.g., date, time,
                                location, or services required) must be submitted ahead of time.
                            </li>
                            <li>
                                We will make reasonable efforts to accommodate changes, but
                                availability cannot be guaranteed.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[#D7B26A] mb-2">
                            Cancellations & Refunds
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                Cancellations made within 48 hours of the event will not be
                                refunded.
                            </li>
                            <li>
                                Cancellations made more than 2 days before the event may be
                                eligible for a partial refund (excluding the deposit).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[#D7B26A] mb-2">
                            Liability
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                We are not liable for loss, damage, injury, or expense arising
                                from your event except where caused by our proven negligence.
                            </li>
                            <li>
                                You are responsible for the safety and conduct of guests at the
                                event.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[#D7B26A] mb-2">
                            Acceptance of Terms
                        </h2>
                        <p>
                            By confirming your booking and paying the deposit, you acknowledge
                            that you have read, understood, and agree to these Terms &
                            Conditions.
                        </p>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Page;
