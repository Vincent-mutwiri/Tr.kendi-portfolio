import { motion } from 'framer-motion';

export const FloatingShapes = () => {
  const shapes = [
    { color: 'bg-blue-400/20', size: 'w-16 h-16', delay: 0, duration: 20 },
    { color: 'bg-purple-400/20', size: 'w-24 h-24', delay: 2, duration: 25 },
    { color: 'bg-pink-400/20', size: 'w-20 h-20', delay: 4, duration: 22 },
    { color: 'bg-yellow-400/20', size: 'w-12 h-12', delay: 1, duration: 18 },
    { color: 'bg-green-400/20', size: 'w-28 h-28', delay: 3, duration: 28 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.color} ${shape.size} blur-xl`}
          initial={{ x: Math.random() * window.innerWidth, y: -100 }}
          animate={{
            y: [null, window.innerHeight + 100],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};
