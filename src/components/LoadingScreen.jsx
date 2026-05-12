import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-darker"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="mx-auto mb-8 h-16 w-16 rounded-full border-4 border-gold/20 border-t-gold"
            />
            <motion.img
              src={logoImg}
              alt="Mudasar ORM Services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mb-2 h-16 w-auto"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-3 text-sm text-white/50"
            >
              Loading excellence...
            </motion.p>
            <motion.div className="mx-auto mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-gold to-gold-light"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
