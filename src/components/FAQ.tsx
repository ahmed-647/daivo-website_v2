"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Ye budget se zyada expensive lag raha hai?", a: "Hum ek chota pilot project se start kar sakte hain — pehle ROI prove karte hain, phir scale karte hain. Full commitment se pehle risk-free trial ka option hamesha open hai." },
  { q: "Sochna hai thoda — turant decide nahi kar sakte?", a: "Bilkul theek hai. Hum ek follow-up call schedule kar dete hain jab aap ready hon. Koi pressure tactics nahi — hum long-term relationship pe believe karte hain." },
  { q: "Team/manager se approval leni hogi?", a: "Koi masla nahi — hum aapke team ke saath bhi ek call set up kar sakte hain, technical aur business dono angles cover karenge." },
  { q: "Payment online website se ho sakti hai?", a: "Nahi — hum har client se personally baat karte hain taake exact scope, timeline, aur pricing discuss ho sake. Contact form bharo, hum 1 business day mein reply karenge." },
  { q: "Delivery mein kitna time lagta hai?", a: "Typically 2-3 weeks setup ke liye, project complexity pe depend karta hai. 50% advance, 50% delivery pe — clear milestones ke saath." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block text-xs tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 mb-4 bg-primary/5">
          ● COMMON QUESTIONS
        </span>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Before you reach out</h2>
        <p className="text-muted max-w-xl mx-auto">
          The questions we hear most on discovery calls — answered upfront.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={f.q}
            className="glass rounded-xl border border-border/40 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <span className="font-medium text-sm md:text-base">{f.q}</span>
              <ChevronDown
                size={18}
                className={`text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-muted text-sm leading-relaxed">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}