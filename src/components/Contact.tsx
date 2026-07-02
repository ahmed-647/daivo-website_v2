"use client";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 overflow-hidden">
      {/* Header Section */}
      <motion.div 
        className="max-w-7xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-4">
          ● GET IN TOUCH
        </span>
        <h2 className="text-4xl font-bold mb-4">
          Let&apos;s build your AI employee —{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">get in touch</span>
        </h2>
        <p className="text-muted max-w-xl mx-auto">
          Ready to automate, scale, and ship? Drop us a message and we&apos;ll get back to you within one business day.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Left Side: Form with Slide-in Animation */}
        <motion.form 
          className="glass rounded-2xl p-6 space-y-4 border border-transparent transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] hover:border-primary/30"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="text-sm mb-1 block text-muted">Name</label>
            <input 
              placeholder="Your name" 
              className="w-full bg-bgdark border border-border rounded-lg px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(124,58,237,0.2)]" 
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-muted">Email</label>
            <input 
              placeholder="you@company.com" 
              className="w-full bg-bgdark border border-border rounded-lg px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(124,58,237,0.2)]" 
            />
          </div>
          <div>
            <label className="text-sm mb-1 block text-muted">Message</label>
            <textarea 
              placeholder="Tell us what you're trying to build..." 
              rows={4} 
              className="w-full bg-bgdark border border-border rounded-lg px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(124,58,237,0.2)]" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-brand-gradient py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send size={16} /> Send Message
          </button>
        </motion.form>

        {/* Right Side: Contact Info Blocks */}
        <div className="space-y-6">
          
          {/* Card 1: Contact Details */}
          <motion.div 
            className="glass rounded-2xl p-6 border border-transparent transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] hover:border-secondary/30"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Contact Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted hover:text-white transition-colors cursor-pointer"><Mail size={14} className="text-primary" /> contact@daivo.tech</div>
              <div className="flex items-center gap-2 text-muted hover:text-white transition-colors cursor-pointer"><Mail size={14} className="text-primary" /> ahmed@daivo.tech</div>
              <div className="flex items-center gap-2 text-muted hover:text-white transition-colors cursor-pointer"><Mail size={14} className="text-primary" /> saad@daivo.tech</div>
            </div>
          </motion.div>

          {/* Card 2: Follow Us */}
          <motion.div 
            className="glass rounded-2xl p-6 border border-transparent transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] hover:border-secondary/30"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 border border-border rounded-full px-4 py-2 text-xs transition-all hover:bg-white/5 hover:border-muted"><FaLinkedin size={14} className="text-secondary" /> LinkedIn</button>
              <button className="flex items-center gap-2 border border-border rounded-full px-4 py-2 text-xs transition-all hover:bg-white/5 hover:border-muted"><FaGithub size={14} /> GitHub</button>
            </div>
          </motion.div>

          {/* Card 3: Discovery Call */}
          <motion.div 
            className="bg-brand-gradient rounded-2xl p-6 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="font-semibold mb-2 text-white">Free discovery call</h3>
            <p className="text-sm text-white/90 mb-4">Book a 30-minute call to discuss your use case. No commitment, no sales pitch.</p>
            <button className="bg-black/20 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold transition-all hover:bg-black/40 text-white">
              Book a Call →
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}