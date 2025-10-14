"use client";
import React from "react";
import Image from "next/image";
import TopLogo from "/public/assets/img/logo_page.png";

const SectionHeader = ({ title, subtitle, logo = TopLogo }) => {
    return (
        <div className="flex flex-col items-center gap-4 mb-12">
            {/* Top Logo */}
            <div>
                <Image src={logo} alt="Logo" className="w-[250px]" />
            </div>

            {/* Title */}
            <span className="text-[40px] font-light text-[#D7B26A] text-center" style={{ fontFamily: "var(--font-cinzel-regular)", lineHeight: "1.2" }} >
                {title}
            </span>

            {/* Bottom Logo (flipped) */}
            <div>
                <Image src={logo} alt="Logo" className="w-[250px] transform scale-y-[-1]" />
            </div>
        </div>
    );
};

export default SectionHeader;
