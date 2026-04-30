import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import StylingServices from "@/sections/HairStyling";
import Portfolio from "@/sections/Portfolio";
import Testimonials from "@/sections/Testimonials";
import Location from "@/sections/Location";
import Contact from "@/sections/Contact";
import Social from "@/sections/Social";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <StylingServices />
      <Portfolio />
      <Testimonials />
      <Location />
      <Contact />
      <Social />
    </main>
  );
}
