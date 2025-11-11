import { motion } from 'framer-motion';

export const Sparkle = ({ className = '' }: { className?: string }) => (
  <motion.span
    className={`inline-block ${className}`}
    initial={{ scale: 0, rotate: 0 }}
    animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
  >
    ✨
  </motion.span>
);
