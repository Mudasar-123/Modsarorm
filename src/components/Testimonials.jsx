import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ahmed Khan',
    business: 'Khan Electronics',
    review: 'Mudasar ORM Services completely transformed our online presence. We went from 2.8 to 4.7 stars on Google in just 3 months. Incredible results!',
    rating: 5,
    before: '2.8',
    after: '4.7',
  },
  {
    name: 'Sarah Mitchell',
    business: 'Mitchell & Co. Law Firm',
    review: 'Professional, confidential, and effective. They removed 15 fake negative reviews that were destroying our reputation. Highly recommended!',
    rating: 5,
    before: '3.1',
    after: '4.8',
  },
  {
    name: 'Dr. Rashid Ali',
    business: 'Ali Medical Center',
    review: 'The AI reputation analysis gave us insights we never had before. Our patient trust scores have increased by 45% since working with Mudasar ORM.',
    rating: 5,
    before: '3.5',
    after: '4.9',
  },
  {
    name: 'Fatima Zahra',
    business: 'Zahra Beauty Studio',
    review: 'They helped us recover from a reputation crisis. Within weeks, our booking rates doubled thanks to improved ratings and positive review management.',
    rating: 5,
    before: '2.4',
    after: '4.6',
  },
  {
    name: 'James Rodriguez',
    business: 'Rodriguez Real Estate',
    review: 'Outstanding service! The team worked around the clock to clean up our online reputation. The results speak for themselves — our leads increased 300%.',
    rating: 5,
    before: '2.9',
    after: '4.8',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative bg-dark">
      <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm tracking-widest text-gold uppercase">Testimonials</span>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12"
            >
              <FaQuoteLeft className="mb-6 text-3xl text-gold/30" />

              <p className="text-lg leading-relaxed text-white/70 md:text-xl">
                &ldquo;{testimonials[current].review}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <FaStar key={i} className="text-gold" />
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold">{testimonials[current].name}</p>
                  <p className="text-sm text-white/50">{testimonials[current].business}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-xs text-white/40">Before</p>
                    <p className="font-display text-2xl font-bold text-red-400">
                      {testimonials[current].before}
                    </p>
                  </div>
                  <div className="text-2xl text-gold">&rarr;</div>
                  <div className="text-center">
                    <p className="text-xs text-white/40">After</p>
                    <p className="font-display text-2xl font-bold text-neon">
                      {testimonials[current].after}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-gold hover:text-gold"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-gold' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all hover:border-gold hover:text-gold"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
