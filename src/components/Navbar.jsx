import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaSun, FaMoon } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'AI Scanner', href: '#ai-section' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? theme === 'dark'
            ? 'border-b border-gold/10 bg-darker/90 shadow-lg shadow-gold/5 backdrop-blur-xl'
            : 'border-b border-gray-200 bg-white/90 shadow-lg shadow-gray-200/50 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logoImg} alt="Mudasar ORM" className="h-10 w-auto" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm transition-colors duration-300 hover:text-gold ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gold transition-all duration-300 hover:bg-gold hover:text-black"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <a
            href="#booking"
            className="rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-2 text-sm font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-gold/30"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-2xl text-gold md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden border-t backdrop-blur-xl md:hidden ${theme === 'dark' ? 'border-gold/10 bg-darker/95' : 'border-gray-200 bg-white/95'}`}
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`transition-colors hover:text-gold ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-center font-semibold text-black"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
