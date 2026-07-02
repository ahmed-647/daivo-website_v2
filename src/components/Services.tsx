"use client";
import { motion } from "framer-motion";
import { Bot, Zap, BarChart3, Layers, MessageSquare } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Customer Support Agent", desc: "Deploy a 24/7 intelligent support agent trained on your knowledge base. Handles tier-1 tickets autonomously, escalates complex issues, and learns continuously.", price: "£499/mo" },
  { icon: Zap, title: "AI Lead Generation Bot", desc: "Qualify and capture leads around the clock. Integrates with your CRM, scores prospects in real time, and routes hot leads directly to your sales team.", price: "£399/mo" },
  { icon: BarChart3, title: "AI Data Dashboard", desc: "Natural-language analytics on top of your existing data sources. Ask questions in plain English, get instant charts, summaries, and anomaly alerts.", price: "£599/mo" },
  { icon: Layers, title: "DevOps-as-a-Service", desc: "Full-stack cloud infrastructure on AWS, managed end-to-end. CI/CD pipelines, Kubernetes orchestration, Terraform IaC, and 24/7 monitoring included.", price: "£799/mo" },
  { icon: MessageSquare, title: "AI WhatsApp Agent", desc: "Meet your customers where they are. A context-aware WhatsApp bot that handles bookings, FAQs, and order updates — all within the app they already use.", price: "£349/mo" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 overflow-hidden">
      {/* Header Section */}
      <motion.div 
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-4">
          ● WHAT WE BUILD
        </span>
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-muted max-w-xl mx-auto">
          Modular AI products and infrastructure solutions, ready to deploy in your stack.
        </p>
      </motion.div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {services.map((s, index) => (
          <motion.div 
            key={s.title} 
            className="glass rounded-2xl p-6 border border-transparent transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:border-primary/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <s.icon className="text-primary" size={20} />
            </div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-muted text-sm mb-5">{s.desc}</p>
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
              From {s.price}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}