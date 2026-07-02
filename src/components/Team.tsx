"use client";
import { motion } from "framer-motion";
import { Linkedin, GitHub, Mail } from "lucide-react";

const founders = [
  { 
    name: "Ahmed", 
    role: "Co-Founder & AI Solutions Architect", 
    email: "ahmed@daivo.tech", 
    bio: "AWS-certified cloud architect with deep expertise in Kubernetes, orchestration, and highly available infrastructure.",
    delay: 0.1
  },
  { 
    name: "Saad", 
    role: "Technical Co-Founder & AI Engineer", 
    email: "saad@daivo.tech", 
    bio: "Specialist in LLM fine-tuning, agent orchestration, and production-grade secure application deployment.",
    delay: 0.3
  },
];

export default function Team() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.span 
          className="inline-block text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          ● THE TEAM
        </motion.span>
        <motion.h2 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Meet the Founders
        </motion.h2>
        <motion.p 
          className="text-muted max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Two engineers who ship. No fluff, no middlemen – just reliable AI and cloud solutions built to last.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {founders.map((f) => (
          <motion.div
            key={f.name}
            className="glass rounded-2xl p-6 border border-transparent transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] hover:border-primary/30 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: f.delay }}
          >
            <div>
              <h3 className="text-xl font-bold mb-1">{f.name}</h3>
              <p className="text-primary text-xs font-semibold tracking-wider mb-4 uppercase">{f.role}</p>
              <p className="text-muted text-sm mb-6 leading-relaxed">{f.bio}</p>
            </div>

            <div className="flex items-center justify-between border-t border-border/60 pt-4 mt-auto">
              <span className="flex items-center gap-2 text-xs text-muted">
                <Mail size={12} className="text-primary" /> {f.email}
              </span>
              <div className="flex gap-3">
                <a href="#" className="text-muted hover:text-secondary transition-colors">
                  <Linkedin size={14} />
                </a>
                <a href="#" className="text-muted hover:text-white transition-colors">
                  <Github size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}