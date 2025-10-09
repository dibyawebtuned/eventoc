import Image from "next/image";
import Navbar from "../component/Nav";
import Hero from "../component/Hero";
import Service from "../component/Service";
import About from "../component/About";
import Marquee from "../component/Marquee";
import Banner from "../component/Banner";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Marquee />
      <Banner />
      <Footer />
    </div>
  );
}
