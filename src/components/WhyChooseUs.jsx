import { motion } from 'framer-motion';
import {
  FaBolt, FaLock, FaUsers, FaRobot, FaHeadset, FaAward,
} from 'react-icons/fa';

const reasons = [
  {
    icon: FaBolt,
    title: 'Fast Results',
    description: 'See measurable improvements in your online reputation within days, not months.',
  },
  {
    icon: FaLock,
    title: 'Confidential Process',
    description: 'Your reputation strategy is handled with complete privacy and discretion.',
  },
  {
    icon: FaUsers,
    title: 'Professional Team',
    description: 'Expert ORM specialists with years of experience in reputation management.',
  },
  {
    icon: FaRobot,
    title: 'AI-Based Analysis',
    description: 'Cutting-edge AI technology for real-time sentiment analysis and insights.',
  },
  {
    icon: FaHeadset,
    title: '24/7 Support',
    description: 'Round-the-clock support and monitoring to protect your reputation at all times.',
  },
  {
    icon: FaAward,
    title: 'Trusted ORM Solutions',
    description: 'Proven track record with 500+ satisfied clients and a 98% success rate.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative bg-darker">
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-neon/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-gold uppercase">Why Choose Us</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            The <span className="gradient-text">Mudasar ORM</span> Advantage
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover group relative overflow-hidden p-8 text-center transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-neon/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-3xl text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-black group-hover:shadow-lg group-hover:shadow-gold/30">
                  <reason.icon />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
