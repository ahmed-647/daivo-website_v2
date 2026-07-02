import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import CaseStudy from "../components/CaseStudy";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <CaseStudy />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}