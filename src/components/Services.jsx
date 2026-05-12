import { motion } from 'framer-motion';
import {
  FaTrashAlt, FaStar, FaTools, FaBroom, FaEye,
  FaRobot, FaHandshake, FaUserCog, FaShareAlt, FaComments,
} from 'react-icons/fa';

const services = [
  {
    icon: FaTrashAlt,
    title: 'Negative Review Removal',
    description: 'Strategically remove harmful, fake, or unfair negative reviews that damage your business reputation and ratings.',
  },
  {
    icon: FaStar,
    title: 'Google Rating Improvement',
    description: 'Boost your Google Business rating with proven strategies that encourage genuine positive reviews from satisfied customers.',
  },
  {
    icon: FaTools,
    title: 'Reputation Repair',
    description: 'Comprehensive reputation recovery for businesses affected by negative press, bad reviews, or online attacks.',
  },
  {
    icon: FaBroom,
    title: 'Brand Image Cleaning',
    description: 'Deep-clean your brand\'s online presence by removing outdated, irrelevant, or damaging content across platforms.',
  },
  {
    icon: FaEye,
    title: 'Review Monitoring',
    description: '24/7 monitoring of your online reviews and mentions across all platforms with real-time alerts and reports.',
  },
  {
    icon: FaRobot,
    title: 'AI Reputation Analysis',
    description: 'Advanced AI-powered sentiment analysis to track, measure, and predict your reputation trends.',
  },
  {
    icon: FaHandshake,
    title: 'Trust Building Strategy',
    description: 'Build long-term customer trust through strategic review management and positive brand positioning.',
  },
  {
    icon: FaUserCog,
    title: 'Business Profile Optimization',
    description: 'Optimize your Google Business, Yelp, and other directory profiles for maximum visibility and credibility.',
  },
  {
    icon: FaShareAlt,
    title: 'Social Media Reputation',
    description: 'Manage and protect your brand reputation across all social media platforms with proactive strategies.',
  },
  {
    icon: FaComments,
    title: 'Customer Feedback Recovery',
    description: 'Turn negative customer experiences into positive outcomes through professional response management.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative bg-darker">
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-neon/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-gold uppercase">Our Services</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Premium <span className="gradient-text">ORM Solutions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Comprehensive reputation management services designed to protect, repair, and
            elevate your business's online presence.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card glass-card-hover group relative overflow-hidden p-6 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-2xl text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-black">
                  <service.icon />
                </div>

                <h3 className="mb-2 font-display text-lg font-semibold transition-colors group-hover:text-gold">
                  {service.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-white/50">
                  {service.description}
                </p>

                <a
                  href="#booking"
                  className="inline-flex items-center gap-1 text-sm text-gold opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Learn More
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
