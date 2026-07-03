"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const founders = [
  {
    name: "Ahmed",
    role: "Co-Founder & AI Solutions Architect",
    email: "ahmed@daivo.tech",
    bio: "AWS-certified cloud architect with deep expertise in Kubernetes, orchestration, and highly available infrastructure. Handles deployment, hosting, and automation end-to-end.",
    linkedin: "https://www.linkedin.com/in/ahmed67/",
    github: "https://github.com/ahmed-647",
    delay: 0.1,
  },
  {
    name: "Saad",
    role: "Technical Co-Founder & AI Engineer",
    email: "saad@daivo.tech",
    bio: "Specialist in LLM fine-tuning, agent orchestration, and predictive modeling. Builds the AI models and data pipelines that power every DaiVo agent.",
    linkedin: "https://www.linkedin.com/in/saad-ullah-312762394/",
    github: "https://github.com/saadullahmemon900-dot",
    delay: 0.3,
  },
];

export default function Team() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.span
          className="inline-block text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-4 bg-primary/5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          ● THE TEAM
        </motion.span>
        <motion.h2
          className="text-4xl font-bold mb-4 tracking-tight"
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
            className="group glass rounded-2xl p-6 border border-transparent transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] hover:border-primary/30 hover:-translate-y-1 flex flex-col justify-between"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: f.delay }}
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center font-bold text-lg text-white mb-4 shadow-[0_0_25px_rgba(124,58,237,0.35)] transition-transform group-hover:scale-105">
                {f.name[0]}
              </div>
              <h3 className="text-xl font-bold mb-1">{f.name}</h3>
              <p className="text-primary text-xs font-semibold tracking-wider mb-4 uppercase">{f.role}</p>
              <p className="text-muted text-sm mb-6 leading-relaxed">{f.bio}</p>
            </div>

            <div className="flex items-center justify-between border-t border-border/60 pt-4 mt-auto">
              <span className="flex items-center gap-2 text-xs text-muted">
                <Mail size={12} className="text-primary" /> {f.email}
              </span>
              <div className="flex gap-3">
                <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-secondary transition-colors hover:scale-110">
                  <FaLinkedin size={14} />
                </a>
                <a href={f.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors hover:scale-110">
                  <FaGithub size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}