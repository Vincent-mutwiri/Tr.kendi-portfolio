import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Users, Globe, TrendingUp, Heart, Award } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const competencies = [
    'Child Development',
    'Inclusive Education',
    'Montessori Methodology',
    'International Curricula (IB, IGCSE, BNC)',
    'ICT Integration',
    'Student-Centered Learning',
    'Classroom Management',
    'Differentiated Instruction',
    'Cultural Sensitivity',
    'Emotional Intelligence',
    'Parent-Teacher Collaboration',
    'Continuous Professional Development',
  ];

  const philosophyPoints = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Child-Centered Learning',
      description: 'Tailoring instruction to individual needs and learning styles',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Holistic Development',
      description: 'Nurturing academic, social, emotional, and physical growth',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Cultural Awareness',
      description: 'Fostering global citizenship and appreciation for diversity',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Lifelong Learning',
      description: 'Modeling and encouraging continuous personal and professional growth',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Positive Reinforcement',
      description: 'Building confidence through encouragement and constructive feedback',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Specialized in Montessori methods and modern pedagogical approaches with a focus on holistic child development
          </p>

          {/* Core Competencies */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Core Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {competencies.map((competency, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-sm py-2 px-4">
                      {competency}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Teaching Philosophy */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Teaching Philosophy</h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              I believe in creating a learning environment where every child feels valued, supported, 
              and inspired to reach their full potential. My approach combines:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                        {point.icon}
                      </div>
                      <CardTitle className="text-xl">{point.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">{point.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-none">
              <CardContent className="py-8">
                <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 mb-4">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <p className="text-gray-600 dark:text-gray-400">— Nelson Mandela</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
