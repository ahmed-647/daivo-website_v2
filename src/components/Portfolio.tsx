"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const stack = [
  { name: "AWS", color: "bg-orange-400" },
  { name: "Docker", color: "bg-blue-400" },
  { name: "Kubernetes", color: "bg-blue-500" },
  { name: "Terraform", color: "bg-purple-400" },
  { name: "Python", color: "bg-cyan-400" },
  { name: "CI/CD", color: "bg-pink-400" },
  { name: "LangChain", color: "bg-green-400" },
  { name: "OpenAI", color: "bg-teal-400" },
];

const founders = [
  { name: "Ahmed", handle: "@ahmed-daivo", initial: "A", delay: 0.2 },
  { name: "Saad", handle: "@saad-daivo", initial: "S", delay: 0.4 },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-4 bg-primary/5">
          ● TECH STACK
        </span>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Portfolio & Stack</h2>
        <p className="text-muted max-w-xl mx-auto">
          Battle-tested tools we use to build reliable, scalable AI systems and cloud infrastructure.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
        {stack.map((t, index) => (
          <motion.span 
            key={t.name} 
            className="glass flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border/40 transition-all hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(124,58,237,0.15)] cursor-default"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <span className={`w-2 h-2 rounded-full ${t.color} shadow-[0_0_8px_currentColor]`} />
            {t.name}
          </motion.span>
        ))}
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
        {founders.map((f) => (
          <motion.div 
            key={f.name} 
            className="glass rounded-xl p-4 flex items-center justify-between border border-transparent transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:border-secondary/40 hover:-translate-y-1"
            initial={{ opacity: 0, x: f.initial === "A" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: f.delay }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-gradient flex items-center justify-center font-bold text-sm text-white shadow-md">
                {f.initial}
              </div>
              <div>
                <p className="font-semibold text-sm">{f.name}</p>
                <p className="text-muted text-xs flex items-center gap-1">
                  <FaGithub size={12} /> {f.handle}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}