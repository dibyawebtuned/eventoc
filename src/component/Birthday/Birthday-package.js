"use client";

import React from "react";
import { Cinzel, Montserrat } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-cinzel",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});


const packages = [
  {
    name: "Package One",
    price: "$600",
    desc: "Short description",
    color: "#4E67E5",
    bg: "#080C23",
    hover: "#8a9dfc",
    features: ["First Feature", "Second Feature"],
  },
  {
    name: "Package Two",
    price: "$1500",
    desc: "Short Description",
    color: "#9967FF",
    bg: "#120d1d",
    hover: "#BB99FF",
    features: ["First Feature", "Second Feature", "Third Feature"],
  },
  {
    name: "Package Three",
    price: "$1800",
    desc: "Short Description",
    color: "#F7E16F",
    bg: "#19170d",
    hover: "#fdf2bb",
    features: [
      "First Feature",
      "Second Feature",
      "Third Feature",
      "Fourth Feature",
      "Fifth Feature",
    ],
  },
];

export const PackagesComponent = () => {
  return (
    <section className="mt-28 max-w-7xl mx-auto px-6">
      <h1 className={`text-center text-6xl max-sm:text-5xl font-bold text-white`}>
        Packages
      </h1>

      <div className="flex flex-col sm:flex-row sm:space-x-6 max-sm:space-y-6 mt-14">
        {packages.map((pkg, i) => (
          <article
            key={i}
            className="flex-1 rounded-xl border p-10 w-full transition-all shadow-lg hover:shadow-2xl"
            style={{
              backgroundColor: pkg.bg,
              borderColor: `${pkg.color}40`,
            }}
          >
            <div className="text-2xl font-semibold mb-3" style={{ color: pkg.color }}>
              {pkg.name}
            </div>
            <div className="text-6xl my-5 font-light text-white">{pkg.price}</div>
            <div className="text-gray-300 mb-5">{pkg.desc}</div>
            <button
              className="my-5 w-full text-black p-5 max-sm:p-3 rounded-3xl text-xl font-semibold transition-all"
              style={{ backgroundColor: pkg.color }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = pkg.hover)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = pkg.color)}
            >
              Purchase
            </button>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
