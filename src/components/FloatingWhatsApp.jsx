import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute right-16 bottom-2 flex items-center gap-2 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-lg"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="mr-1 text-gray-400 hover:text-gray-600"
              aria-label="Close tooltip"
            >
              <FaTimes className="text-xs" />
            </button>
            Chat with us on WhatsApp!
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/923107742625"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg shadow-green-500/30 transition-shadow hover:shadow-xl hover:shadow-green-500/40"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
}
