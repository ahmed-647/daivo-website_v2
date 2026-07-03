import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/whyus";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import CaseStudy from "../components/CaseStudy";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Portfolio />
      <CaseStudy />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}