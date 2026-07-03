"use client";
import { motion } from "framer-motion";
import { Bot, Zap, BarChart3, Layers, MessageSquare, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Customer Support Agent", desc: "24/7 intelligent support agent trained on your knowledge base. Handles tier-1 tickets autonomously, escalates complex issues, and learns continuously.", price: "From 80K PKR setup" },
  { icon: Zap, title: "AI Lead Generation Bot", desc: "Qualify and capture leads around the clock. Integrates with your CRM, scores prospects in real time, and routes hot leads to your sales team.", price: "From 60K PKR setup" },
  { icon: BarChart3, title: "AI Data Dashboard", desc: "Natural-language analytics on your existing data. Ask questions in plain English, get instant charts, summaries, and anomaly alerts.", price: "From 50K PKR setup" },
  { icon: Layers, title: "DevOps-as-a-Service", desc: "Full-stack AWS infrastructure, managed end-to-end. CI/CD pipelines, Kubernetes orchestration, Terraform IaC, and 24/7 monitoring included.", price: "From 100K PKR setup" },
  { icon: MessageSquare, title: "AI WhatsApp Agent", desc: "Meet your customers where they are. A context-aware WhatsApp bot that handles bookings, FAQs, and order updates.", price: "From 70K PKR setup" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 overflow-hidden relative">
      <div className="blob w-[350px] h-[350px] bg-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blob opacity-10" />

      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-4 bg-primary/5">
          ● WHAT WE BUILD
        </span>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Services</h2>
        <p className="text-muted max-w-xl mx-auto">
          Modular AI products and infrastructure solutions, ready to deploy in your stack.
          Pricing is discussed 1-on-1 based on your exact scope.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">
        {services.map((s, index) => (
          <motion.a
            href="#contact"
            key={s.title}
            className="group glass rounded-2xl p-6 border border-transparent transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)] hover:border-primary/40 hover:-translate-y-1 cursor-pointer block"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-gradient group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                <s.icon className="text-primary transition-colors group-hover:text-white" size={20} />
              </div>
              <ArrowUpRight size={18} className="text-muted opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-muted text-sm mb-5 leading-relaxed">{s.desc}</p>
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full transition-all group-hover:bg-primary/20">
              {s.price} — let&apos;s talk
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}