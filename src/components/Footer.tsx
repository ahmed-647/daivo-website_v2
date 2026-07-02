"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 bg-bgdark/50 backdrop-blur-md">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold">
            <span className="text-white">Dai</span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">Vo</span>
          </span>
          <span className="text-text-muted">|</span>
          <span className="text-muted">Engineering Intelligent Systems</span>
        </div>

        <div className="flex items-center gap-2 text-muted text-sm hover:text-white transition-colors cursor-pointer">
          <Mail size={14} className="text-primary" /> contact@daivo.tech
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-muted hover:text-secondary transition-colors">
            <FaLinkedin size={16} />
          </a>
          <a href="#" className="text-muted hover:text-white transition-colors">
            <FaGithub size={16} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}