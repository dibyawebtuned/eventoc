"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function EventCategoryPage() {
    const { category } = useParams();

    const allEvents = {
        birthday: ["Birthday Bash 1", "Kids Birthday Party", "Surprise Party"],
        workshops: ["Beach Party", "Pool Party"],
        "brand-launch": ["Product Launch 1", "Brand Opening 2"],
        "music-night": ["Rock Concert", "Jazz Night"],
        custom: ["Corporate Retreat", "Charity Gala"],
    };

    const events = allEvents[category] || [];

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-4xl font-bold mb-8 capitalize text-[#7A5E39]">
                {category?.replace("-", " ")} Events
            </h1>

            {events.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <li
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-800"
                        >
                            {event}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-lg">No events found for this category.</p>
            )}

            <div className="mt-8">
                <Link href="/events" className="text-[#D7B26A] hover:underline">
                    ← Back to all categories
                </Link>
            </div>
        </div>
    );
}
