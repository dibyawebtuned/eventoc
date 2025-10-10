// MobileMenuList.jsx
import Link from "next/link";

export default function MobileMenuList({ eventsOpen, setEventsOpen, servicesOpen, setServicesOpen, menuItems, serviceMenuItems }) {
    return (
        <ul className="flex flex-col gap-2 text-white text-sm font-medium">
            {/* Events with Submenu */}
            <li>
                <button className="w-full text-left flex justify-between items-center" onClick={() => setEventsOpen(!eventsOpen)}>
                    Events
                    <span>{eventsOpen ? "-" : "+"}</span>
                </button>
                {eventsOpen && (
                    <ul className="flex flex-col gap-2 mt-2 ml-4 text-sm text-gray-300">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>

            {/* Services with Submenu */}
            <li>
                <button className="w-full text-left flex justify-between items-center" onClick={() => setServicesOpen(!servicesOpen)}>
                    Services
                    <span>{servicesOpen ? "-" : "+"}</span>
                </button>
                {servicesOpen && (
                    <ul className="flex flex-col gap-2 mt-2 ml-4 text-sm text-gray-300">
                        {serviceMenuItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>

            {/* Other links */}
            <li><Link href="/">Gallery</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Portfolio</Link></li>
            <li><Link href="/">FAQ</Link></li>
            <li><Link href="/">Contact</Link></li>

            {/* Button */}
            <li>
                <Link href="/book" className="block text-center px-3 py-1 rounded-md font-semibold bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white">
                    Book Now
                </Link>
            </li>
        </ul>
    );
}
