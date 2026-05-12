import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: 'How does negative review removal work?',
    answer: 'We analyze each negative review to determine if it violates platform policies. We then file formal removal requests with detailed evidence. For reviews that cannot be removed, we implement strategic response and suppression techniques to minimize their impact.',
  },
  {
    question: 'How long does it take to see rating improvements?',
    answer: 'Most clients see noticeable improvements within 2-4 weeks. Significant rating increases (1-2 stars) typically occur within 1-3 months depending on the starting point and the volume of reviews.',
  },
  {
    question: 'Is my information kept confidential?',
    answer: 'Absolutely. We maintain strict confidentiality agreements with all clients. Your business information, strategy details, and all communications are fully protected and never shared with third parties.',
  },
  {
    question: 'What platforms do you manage?',
    answer: 'We manage reputation across all major platforms including Google Business, Yelp, TripAdvisor, Facebook, Trustpilot, BBB, Amazon, and 50+ other review and social media platforms.',
  },
  {
    question: 'How does your AI reputation analysis work?',
    answer: 'Our AI engine uses natural language processing and sentiment analysis to scan all your reviews and mentions in real-time. It identifies trends, predicts potential issues, and provides actionable recommendations for improvement.',
  },
  {
    question: 'What is your success rate for review removal?',
    answer: 'We have a 98% success rate for removing reviews that violate platform guidelines. For legitimate negative reviews, we achieve significant improvement through strategic response management and positive review generation.',
  },
  {
    question: 'Do you offer ongoing monitoring services?',
    answer: 'Yes, we offer 24/7 reputation monitoring with real-time alerts. Our monitoring service tracks all reviews, social media mentions, news articles, and forum posts related to your business.',
  },
  {
    question: 'What is the cost of your services?',
    answer: 'Our pricing varies based on the scope and complexity of your reputation management needs. We offer customized packages starting from basic monitoring to comprehensive reputation transformation. Contact us for a free consultation and personalized quote.',
  },
];

function FAQItem({ faq, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden transition-all duration-300"
    >
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/5"
      >
        <span className="pr-4 font-display font-semibold">{faq.question}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm text-gold">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="border-t border-white/5 px-6 pb-6 pt-4 text-sm leading-relaxed text-white/60">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding relative bg-dark">
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-gold uppercase">FAQ</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
