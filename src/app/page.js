import Image from "next/image";
import Link from "next/link";
import Navbar from "../component/Nav";
import Hero from "../component/Hero";
import ServiceSection from "../component/Service";
import About from "../component/About";
import Marquee from "../component/Marquee";
import Banner from "../component/Banner";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceSection />
      <About />
      <Marquee />
      <Banner />
      <Footer />
    </div>
  );
}
