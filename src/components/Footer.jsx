import { FaShieldAlt, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'AI Scanner', href: '#ai-section' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
  { name: 'Book Now', href: '#booking' },
];

const serviceLinks = [
  'Negative Review Removal',
  'Google Rating Improvement',
  'Reputation Repair',
  'Brand Image Cleaning',
  'Review Monitoring',
  'AI Reputation Analysis',
];

const socials = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammad-mudasar-7000063a2/', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/923107742625', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-darker">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-2xl text-gold" />
              <span className="gradient-text font-display text-xl font-bold">Mudasar ORM</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Premium Online Reputation Management services to protect, repair, and grow your
              business&apos;s digital presence.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/50 transition-all duration-300 hover:bg-gold hover:text-black"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-gold">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/50 transition-colors hover:text-gold"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display font-semibold text-gold">Contact Info</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>Phone: 0310 7742625</p>
              <p>Email: mudasarkulachi625@gmail.com</p>
              <p>WhatsApp: +92 310 7742625</p>
              <a
                href="https://www.linkedin.com/in/muhammad-mudasar-7000063a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-gold"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['SSL Secured', 'Trusted', 'Verified'].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs text-gold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Mudasar ORM Services. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-white/30">
            Built with <FaHeart className="text-gold" /> by Muhammad Mudasar
          </p>
        </div>
      </div>
    </footer>
  );
}
