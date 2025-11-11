import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { CountUp } from './ui/count-up';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Stats() {
  const { ref, initial, animate, transition } = useScrollAnimation();

  const stats = [
    { value: 8, suffix: '+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
    { value: 500, suffix: '+', label: 'Students Taught', color: 'from-purple-500 to-pink-500' },
    { value: 95, suffix: '%', label: 'Parent Satisfaction', color: 'from-green-500 to-teal-500' },
    { value: 3, suffix: '', label: 'Certifications', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={initial}
          animate={animate}
          transition={transition}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={animate.opacity ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-all hover:scale-105">
                  <CardContent className="pt-6">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
