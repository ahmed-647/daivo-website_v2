"use client";
import { motion } from "framer-motion";
import { Cloud, Brain, ArrowRight } from "lucide-react";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-6 relative overflow-hidden bg-[#030712]">
      <div className="blob w-[400px] h-[400px] bg-primary top-0 left-1/3 animate-blob opacity-10" />

      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-4 bg-primary/5">
          ● OUR UNFAIR ADVANTAGE
        </span>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          Most agencies build AI. <span className="bg-brand-gradient bg-clip-text text-transparent">We deploy it too.</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto leading-relaxed">
          Most people can either build AI models or manage cloud infrastructure — rarely both.
          DaiVo covers the entire loop: the AI brain and the DevOps body that keeps it alive, 24/7.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 relative z-10 mb-10">
        <motion.div
          className="glass rounded-2xl p-8 border border-transparent transition-all hover:border-secondary/40 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
            <Cloud className="text-secondary" size={22} />
          </div>
          <h3 className="font-bold text-lg mb-2">Cloud & DevOps Engineering</h3>
          <p className="text-muted text-sm mb-4 leading-relaxed">
            AWS infrastructure, Kubernetes orchestration, Terraform IaC, CI/CD pipelines,
            and Prometheus/Grafana monitoring — the foundation that keeps your AI agent alive and reliable.
          </p>
          <div className="flex flex-wrap gap-2">
            {["AWS", "Kubernetes", "Terraform", "CI/CD", "Grafana"].map((t) => (
              <span key={t} className="text-xs bg-secondary/10 text-secondary px-2.5 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="glass rounded-2xl p-8 border border-transparent transition-all hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(124,58,237,0.15)]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Brain className="text-primary" size={22} />
          </div>
          <h3 className="font-bold text-lg mb-2">AI & Data Engineering</h3>
          <p className="text-muted text-sm mb-4 leading-relaxed">
            LLM fine-tuning, agent orchestration, predictive modeling, and data dashboards —
            trained on your actual business data, not a generic template.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Python", "LangChain", "OpenAI", "ML Modeling", "Streamlit"].map((t) => (
              <span key={t} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a href="#contact" className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors group">
          See how this works for your business
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}