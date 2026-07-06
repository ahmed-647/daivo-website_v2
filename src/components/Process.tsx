"use client";
import { motion } from "framer-motion";
import { Search, LayoutTemplate, Rocket } from "lucide-react";

const steps = [
  { number: "01", icon: Search, title: "Discovery", desc: "Understanding your systems, workflows, and business goals before writing a single line of code." },
  { number: "02", icon: LayoutTemplate, title: "Architecture", desc: "Designing scalable AI and cloud infrastructure tailored to your data and traffic patterns." },
  { number: "03", icon: Rocket, title: "Deployment", desc: "Shipping reliable, secure, production-grade code — monitored 24/7 from day one." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-4 bg-primary/5">
          ● HOW IT WORKS
        </span>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Process</h2>
        <p className="text-muted max-w-xl mx-auto">
          A clear, no-surprises path from first call to a live, monitored AI system.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 relative">
        <motion.div
          className="hidden md:block absolute top-11 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            className="group glass rounded-2xl p-6 border border-transparent text-left relative transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(124,58,237,0.2)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 relative z-10 transition-all duration-300 group-hover:bg-brand-gradient group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
              <step.icon className="text-primary transition-colors group-hover:text-white" size={22} />
              <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-brand-gradient text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                {step.number}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}