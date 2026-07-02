"use client";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, TrendingUp, Play } from "lucide-react";

const steps = [
  { num: "1", tag: "Problem", color: "text-red-400 bg-red-400/10", text: "A fast-growing e-commerce brand was overwhelmed with 800+ daily support tickets. Their 3-person team was burning out; average first-response time had crept to 18 hours. Customers were churning." },
  { num: "2", tag: "Solution", color: "text-primary bg-primary/10", text: "We deployed a DaiVo AI Support Agent fine-tuned on their product docs, order history, and return policies. Integrated with their Shopify store and Zendesk. Full handoff to human agents for edge cases." },
  { num: "3", tag: "Result", color: "text-green-400 bg-green-400/10", text: "83% of tickets resolved autonomously within 90 days. Response time dropped from 18 hours to under 2 seconds. The support team now focuses on high-value interactions, and CSAT improved by 41 points." },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 px-6 relative overflow-hidden">
      <div className="blob w-[400px] h-[400px] bg-primary top-0 right-0 animate-blob opacity-10" />

      <motion.div
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-4 bg-primary/5">
          ● REAL RESULTS
        </span>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Case Study</h2>
        <p className="text-muted max-w-xl mx-auto">
          How a DaiVo AI Support Agent transformed an e-commerce brand&apos;s customer experience.
        </p>
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-3 gap-6 mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="glass rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40 border border-transparent">
          <Clock className="mx-auto text-primary mb-2" />
          <p className="text-2xl font-bold">&lt;2s</p>
          <p className="text-muted text-xs">Avg response time</p>
        </div>
        <div className="glass rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40 border border-transparent">
          <ShieldCheck className="mx-auto text-primary mb-2" />
          <p className="text-2xl font-bold">99.9%</p>
          <p className="text-muted text-xs">Uptime SLA</p>
        </div>
        <div className="glass rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40 border border-transparent">
          <TrendingUp className="mx-auto text-primary mb-2" />
          <p className="text-2xl font-bold">12,400+</p>
          <p className="text-muted text-xs">Questions handled</p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12 relative z-10">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            className="glass rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${s.color}`}>
              {s.tag}
            </span>
            <p className="text-muted text-sm leading-relaxed">{s.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-6xl mx-auto glass rounded-2xl h-64 flex flex-col items-center justify-center gap-3 relative z-10 group cursor-pointer transition-all hover:border-primary/40 border border-transparent"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center transition-all group-hover:bg-brand-gradient group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]">
          <Play size={20} />
        </div>
        <p className="text-sm">Watch the full walkthrough (Loom)</p>
        <p className="text-muted text-xs">loom.com/share/daivo-case-study</p>
      </motion.div>
    </section>
  );
}