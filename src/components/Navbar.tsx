"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "Services", "About", "Case Study", "Portfolio", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-bgdark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO — sirf text, koi image nahi */}
        <a href="#home" className="text-xl font-bold">
          <span className="text-white">Dai</span>
          <span className="bg-brand-gradient bg-clip-text text-transparent">Vo</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-muted hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition"
        >
          Book a Call →
        </a>

        {/* mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-muted">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}