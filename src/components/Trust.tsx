"use client";
import { motion } from "framer-motion";
import { Zap, Users, DollarSign, ShieldCheck } from "lucide-react";

const badges = [
  { icon: Zap, title: "Fast Response", desc: "Reply within 24 hours, every time." },
  { icon: Users, title: "Direct to Founders", desc: "You talk to us — no account managers, no middlemen." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees. Scope and cost agreed before we start." },
  { icon: ShieldCheck, title: "Pilot-First Approach", desc: "Start small, prove the ROI, then scale with confidence." },
];

export default function Trust() {
  return (
    <section className="py-16 px-6 border-y border-border/40">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {badges.map((b, i) => (
          <motion.div
            key={b.title}
            className="flex flex-col items-center text-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <b.icon className="text-primary" size={22} />
            </div>
            <h4 className="font-semibold text-sm">{b.title}</h4>
            <p className="text-muted text-xs leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}