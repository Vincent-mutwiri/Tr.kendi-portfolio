import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Teacher Winfred has been an exceptional educator for our son. Her ability to connect with each child individually while maintaining an engaging classroom environment is remarkable. She's transformed our son's attitude towards learning.",
      author: 'Jane Muthoni',
      role: 'Parent at Little Explorers International Academy',
    },
    {
      quote: "Winfred's dedication to early childhood education is evident in her innovative teaching methods and the strong relationships she builds with her students. She's an asset to our teaching team.",
      author: 'Dr. Samuel Otieno',
      role: 'Head of School, Little Explorers International Academy',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            What parents and colleagues say about my work
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-none">
                  <CardContent className="pt-6">
                    <Quote className="w-12 h-12 text-blue-600 mb-4 opacity-50" />
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
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
