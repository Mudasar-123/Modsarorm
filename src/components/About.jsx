import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactCountUp from 'react-countup';
import {
  FaUserTie, FaShieldAlt, FaStar, FaChartLine,
  FaLinkedin, FaEnvelope, FaWhatsapp,
} from 'react-icons/fa';
import founderImg from '../assets/founder.jpg';

const CountUp = ReactCountUp.default || ReactCountUp;

const stats = [
  { icon: FaStar, value: 500, suffix: '+', label: 'Clients Served' },
  { icon: FaShieldAlt, value: 10000, suffix: '+', label: 'Reviews Managed' },
  { icon: FaChartLine, value: 98, suffix: '%', label: 'Success Rate' },
  { icon: FaUserTie, value: 5, suffix: '+', label: 'Years Experience' },
];

const expertise = [
  'Online Reputation Management',
  'Review Repair & Recovery',
  'Google Rating Improvement',
  'Business Trust Optimization',
  'Brand Image Restoration',
  'AI-Powered Reputation Analysis',
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative bg-dark">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-gold uppercase">About the Founder</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Meet <span className="gradient-text">Muhammad Mudasar</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card animate-pulse-glow relative mx-auto max-w-sm overflow-hidden p-8 text-center">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-gold/30">
                <img src={founderImg} alt="Muhammad Mudasar" className="h-full w-full object-cover" />
              </div>
              <h3 className="font-display text-2xl font-bold">Muhammad Mudasar</h3>
              <p className="mt-1 text-sm text-gold">Founder & ORM Specialist</p>
              <p className="mt-1 text-xs text-white/40">Mudasar ORM Services</p>

              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-mudasar-7000063a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-blue-600 hover:text-white"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:mudasarkulachi625@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-gold hover:text-black"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://wa.me/923107742625"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all hover:bg-green-600 hover:text-white"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold">
              Transforming Business Reputations with <span className="text-gold">Expert ORM Solutions</span>
            </h3>
            <p className="mt-4 leading-relaxed text-white/60">
              With over 5 years of experience in Online Reputation Management, Muhammad Mudasar
              has helped hundreds of businesses reclaim their online presence. Specializing in
              negative review removal, rating improvement, and comprehensive brand image
              restoration, he combines traditional ORM strategies with cutting-edge AI technology
              to deliver measurable results.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              His mission is simple: empower every business to present its best self online,
              build lasting customer trust, and achieve sustainable growth through a stellar
              digital reputation.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {expertise.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card glass-card-hover p-6 text-center transition-all duration-300"
            >
              <stat.icon className="mx-auto mb-3 text-3xl text-gold" />
              <p className="font-display text-3xl font-bold text-white md:text-4xl">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  '0'
                )}
                <span className="text-gold">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
