import { motion } from 'framer-motion';
import {
  FaWhatsapp, FaPhone, FaEnvelope, FaLinkedin,
  FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram,
} from 'react-icons/fa';

const contactMethods = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+92 310 7742625',
    href: 'https://wa.me/923107742625',
    color: 'hover:bg-green-600',
  },
  {
    icon: FaPhone,
    label: 'Direct Call',
    value: '0310 7742625',
    href: 'tel:+923107742625',
    color: 'hover:bg-blue-600',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'mudasarkulachi625@gmail.com',
    href: 'mailto:mudasarkulachi625@gmail.com',
    color: 'hover:bg-gold',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Muhammad Mudasar',
    href: 'https://www.linkedin.com/in/muhammad-mudasar-7000063a2/',
    color: 'hover:bg-blue-700',
  },
];

const socials = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-mudasar-7000063a2/', label: 'LinkedIn' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative bg-darker">
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-gold uppercase">Get in Touch</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Contact <span className="gradient-text">Us Today</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Ready to transform your online reputation? Reach out through any of our channels.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card group flex flex-col items-center p-6 text-center transition-all duration-300 ${method.color} hover:text-white`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl text-gold transition-all group-hover:bg-white/20 group-hover:text-white">
                <method.icon />
              </div>
              <h3 className="font-display font-semibold">{method.label}</h3>
              <p className="mt-1 text-sm text-white/50 group-hover:text-white/80">{method.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden"
          >
            <div className="flex h-64 items-center justify-center bg-charcoal lg:h-full">
              <div className="text-center">
                <FaMapMarkerAlt className="mx-auto mb-4 text-4xl text-gold" />
                <p className="font-display text-lg font-semibold">Mudasar ORM Services</p>
                <p className="mt-2 text-sm text-white/50">Pakistan</p>
                <p className="mt-1 text-sm text-white/50">Serving Clients Worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="mb-6 font-display text-xl font-semibold">Connect With Us</h3>

            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4">
                <FaPhone className="text-gold" />
                <div>
                  <p className="text-xs text-white/40">Phone / WhatsApp</p>
                  <p className="font-semibold">0310 7742625</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4">
                <FaEnvelope className="text-gold" />
                <div>
                  <p className="text-xs text-white/40">Email</p>
                  <p className="font-semibold">mudasarkulachi625@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm text-white/40">Follow Us</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all duration-300 hover:bg-gold hover:text-black"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
