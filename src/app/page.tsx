import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import Services from "../components/Services";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import CaseStudy from "../components/CaseStudy";
import WhyUs from "../components/whyus"; 
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-x-hidden pt-24 md:pt-28">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Process />
      <Portfolio />
      <CaseStudy />
      <WhyUs />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}