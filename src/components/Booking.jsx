import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaCheckCircle, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const serviceOptions = [
  'Negative Review Removal',
  'Google Rating Improvement',
  'Reputation Repair',
  'Brand Image Cleaning',
  'Review Monitoring',
  'AI Reputation Analysis',
  'Trust Building Strategy',
  'Business Profile Optimization',
  'Social Media Reputation Management',
  'Customer Feedback Recovery',
];

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '', business: '', email: '', phone: '',
    service: '', time: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const whatsappMessage = encodeURIComponent(
      `*New Appointment Booking*\n\nName: ${formData.name}\nBusiness: ${formData.business}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Time: ${formData.time}\nMessage: ${formData.message}`
    );

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      window.open(`https://wa.me/923107742625?text=${whatsappMessage}`, '_blank');
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="section-padding relative bg-darker">
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-gold uppercase">Book a Session</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Schedule Your <span className="gradient-text">Free Consultation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Get a personalized reputation analysis and strategy session. Fill out the form
            and we&apos;ll connect with you instantly.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-card space-y-6 p-8 md:p-12"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
              { name: 'business', label: 'Business Name', type: 'text', placeholder: 'Your business name' },
              { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@business.com' },
              { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+92 310 7742625' },
            ].map((field) => (
              <div key={field.name}>
                <label className="mb-2 block text-sm text-white/70">{field.label}</label>
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/30"
                />
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/70">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/30"
              >
                <option value="" className="bg-charcoal">Choose a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s} className="bg-charcoal">{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/70">Preferred Meeting Time</label>
              <input
                name="time"
                type="datetime-local"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/30"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your reputation challenges..."
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold/30"
            />
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <button
              type="submit"
              disabled={sending}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 py-4 font-semibold text-black transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 disabled:opacity-50 sm:w-auto"
            >
              {sending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
              ) : (
                <FaCalendarAlt />
              )}
              {sending ? 'Sending...' : 'Book Appointment'}
            </button>

            <a
              href="https://wa.me/923107742625"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition-all hover:bg-green-500 sm:w-auto"
            >
              <FaWhatsapp /> WhatsApp Directly
            </a>

            <a
              href="mailto:mudasarkulachi625@gmail.com"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition-all hover:border-gold hover:bg-gold/10 sm:w-auto"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </motion.form>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setSubmitted(false)}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="glass-card gold-glow mx-4 max-w-md p-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
              >
                <FaCheckCircle className="mx-auto text-6xl text-neon" />
              </motion.div>
              <h3 className="mt-6 font-display text-2xl font-bold">Booking Confirmed!</h3>
              <p className="mt-3 text-white/60">
                Thank you for your interest. We&apos;ll reach out to you shortly to confirm
                your consultation session.
              </p>
              <p className="mt-2 text-sm text-gold">Check your WhatsApp for instant confirmation.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
