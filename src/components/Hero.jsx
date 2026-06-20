import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt, FaHeadset, FaStar, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';
import { useTheme } from '../ThemeContext';

const typingTexts = [
  'Online Reputation Management',
  'Negative Review Removal',
  'Google Rating Improvement',
  'Brand Image Protection',
  'Trust Building Strategy',
];

function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 0);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

function ReputationDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="animate-float glass-card relative hidden p-6 lg:block"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-gold">Reputation Dashboard</h3>
        <span className="neon-text text-xs">LIVE</span>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-white/5 p-3 text-center">
          <FaStar className="mx-auto mb-1 text-gold" />
          <p className="text-2xl font-bold text-gold">4.9</p>
          <p className="text-xs text-white/50">Rating Score</p>
        </div>
        <div className="rounded-xl bg-white/5 p-3 text-center">
          <FaShieldAlt className="mx-auto mb-1 text-neon" />
          <p className="text-2xl font-bold text-neon">98%</p>
          <p className="text-xs text-white/50">Trust Score</p>
        </div>
      </div>

      <div className="mb-3 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/60">Positive Reviews</span>
          <span className="text-neon">+127</span>
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '92%' }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-full rounded-full bg-gradient-to-r from-neon to-gold"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/60">Negative Removed</span>
          <span className="text-gold">23 resolved</span>
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '78%' }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-neon/10 p-2">
        <FaChartLine className="text-neon" />
        <span className="text-xs text-neon">Reputation trending upward +12% this month</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const typedText = useTypingEffect(typingTexts);
  const { theme } = useTheme();

  return (
    <section id="home" className={`relative min-h-screen overflow-hidden pt-24 ${theme === 'dark' ? 'bg-darker' : 'bg-white'}`}>
      {theme === 'dark' && <ParticleBackground />}

      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-charcoal/50 via-transparent to-darker' : 'bg-gradient-to-b from-gray-100/50 via-transparent to-white'}`} />
      <div className="absolute top-20 -left-40 h-80 w-80 rounded-full bg-gold/5 blur-[100px]" />
      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-neon/5 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 pt-16 md:px-8 lg:flex-row lg:pt-24">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm text-gold"
          >
            <FaShieldAlt />
            <span>#1 Online Reputation Management Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl leading-tight font-bold md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Protect & Grow Your{' '}
            <span className="gradient-text">Online Reputation</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 h-8 font-display text-lg text-neon md:text-xl"
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`mx-auto mt-6 max-w-xl text-base lg:mx-0 lg:text-lg ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}
          >
            We help businesses eliminate negative reviews, boost ratings, and build unshakeable
            trust online using cutting-edge AI-powered reputation management strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#booking"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-8 py-4 font-semibold text-black transition-all duration-300 hover:shadow-xl hover:shadow-gold/30"
            >
              <FaCalendarAlt />
              Book Appointment
            </a>
            <a
              href="#booking"
              className={`flex items-center gap-2 rounded-full border px-8 py-4 font-semibold transition-all duration-300 hover:border-gold hover:bg-gold/10 ${theme === 'dark' ? 'border-white/20 text-white' : 'border-gray-300 text-gray-800'}`}
            >
              <FaHeadset />
              Free Consultation
            </a>
            <a
              href="https://wa.me/923107742625"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-green-600/30"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-8 lg:justify-start"
          >
            {[
              { label: 'Clients Served', value: '500+' },
              { label: 'Reviews Managed', value: '10K+' },
              { label: 'Success Rate', value: '98%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-gold">{stat.value}</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="w-full flex-1 lg:max-w-md">
          <ReputationDashboard />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs">Scroll Down</span>
          <div className="h-8 w-5 rounded-full border border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-full rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
