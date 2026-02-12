import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Games from "@/components/Games";
import About from "@/components/About";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Games />
      <About />
      <Manifesto />
      <Footer />
      <ScrollAnimations />
    </>
  );
}
