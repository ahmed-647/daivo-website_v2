"use client";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, TrendingUp } from "lucide-react";

const orbitBadges = [
  { label: "GPT-4o", pos: "top-4 left-1/4", delay: 0.1 },
  { label: "Lambda", pos: "top-4 right-1/4", delay: 0.3 },
  { label: "K8s", pos: "bottom-4 left-1/4", delay: 0.5 },
  { label: "Agents", pos: "bottom-4 right-1/4", delay: 0.7 },
];

export default function Hero() {
  return (
    <section id="home" className="grid-bg pt-40 pb-24 px-6 relative overflow-hidden">
      <div className="blob w-[500px] h-[500px] bg-primary top-[-100px] left-[-150px] animate-blob" />
      <div className="blob w-[400px] h-[400px] bg-secondary bottom-[-100px] right-[-100px] animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-6 bg-primary/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            AI AUTOMATION & CLOUD DEVOPS
          </motion.span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            AI Agents.{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Deployed on AWS.
            </span>{" "}
            Monitored 24/7.
          </h1>
          <p className="text-muted text-lg mb-8 max-w-xl leading-relaxed">
            We build production-ready AI employees and cloud infrastructure
            for ambitious startups. From intelligent agents to scalable
            DevOps — engineered for reliability, delivered fast.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#contact" className="relative bg-brand-gradient px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(124,58,237,0.45)]">Get Started →</a>
            <a href="#case-study" className="border border-border px-6 py-3 rounded-full font-semibold transition-all hover:bg-white/5 hover:border-primary/50">▷ See Case Study</a>
          </div>

          <div className="flex flex-wrap gap-10 text-sm">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              <div><b>&lt;2s</b><p className="text-muted">Avg response time</p></div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-primary" />
              <div><b>99.9%</b><p className="text-muted">Uptime SLA</p></div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-primary" />
              <div><b>12,400+</b><p className="text-muted">Questions handled</p></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[400px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute w-[380px] h-[380px] rounded-full border border-border/60 animate-[spin_25s_linear_infinite]" />
          <div className="absolute w-[280px] h-[280px] rounded-full border border-border/40 animate-[spin_18s_linear_infinite_reverse]" />
          <div className="absolute w-[380px] h-[380px] rounded-full bg-radial-fade" />

          <div className="w-24 h-24 rounded-2xl bg-brand-gradient flex items-center justify-center font-bold z-10 shadow-[0_0_50px_rgba(124,58,237,0.6)] animate-pulse-glow">
            <div className="w-[92%] h-[92%] bg-[#05050a] rounded-2xl flex items-center justify-center">
              <span className="text-white text-lg">Dai<span className="text-secondary">Vo</span></span>
            </div>
          </div>

          {orbitBadges.map((b) => (
            <motion.span
              key={b.label}
              className={`absolute ${b.pos} glass text-xs px-3 py-1.5 rounded-full border border-border/60 shadow-lg hover:border-primary/50 hover:scale-110 transition-all cursor-default`}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: b.delay, ease: "backOut" }}
            >
              ● {b.label}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}