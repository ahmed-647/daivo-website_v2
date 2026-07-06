"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// About key links to why-us safely
const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#why-us" },
  { name: "Case Study", href: "#case-study" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bgdark/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] py-3"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 group">
          <Image src="/logo.png" alt="DaiVo Logo" width={36} height={36} className="object-contain transition-transform group-hover:scale-105" priority />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">Dai</span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">Vo</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-muted hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gradient transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:inline-block relative bg-brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(124,58,237,0.4)]">Book a Call →</a>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border/60 bg-bgdark/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="text-muted hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="bg-brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center">
                Book a Call →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}