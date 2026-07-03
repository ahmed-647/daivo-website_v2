"use client";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery", desc: "Understanding your systems and goals." },
  { number: "02", title: "Architecture", desc: "Designing scalable AI & Cloud infrastructure." },
  { number: "03", title: "Deployment", desc: "Shipping reliable and secure production code." }
];

export default function Process() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12 text-white">Our Process</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="text-4xl font-extrabold text-blue-500 mb-2">{step.number}</div>
            <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}