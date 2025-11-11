import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Laptop, Gamepad2, Book, Users } from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techTools = [
    { category: 'Learning Management Systems', tools: ['Google Classroom', 'Seesaw', 'ClassDojo'] },
    { category: 'Educational Apps', tools: ['Kahoot!', 'ABCmouse', 'Starfall', 'Epic! Reading'] },
    { category: 'Digital Tools', tools: ['Google Workspace for Education', 'Canva for Education', 'Padlet'] },
    { category: 'Video Conferencing', tools: ['Zoom', 'Google Meet', 'Microsoft Teams'] },
    { category: 'Assessment Tools', tools: ['Boom Cards', 'Quizizz', 'Edpuzzle'] },
  ];

  const interests = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Swimming',
      description: 'Certified swimming instructor passionate about water safety education',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Football',
      description: 'Avid Arsenal FC supporter and youth football coach on weekends',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Reading & Research',
      description: 'Keen interest in educational psychology and child development research',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Community Engagement',
      description: 'Volunteer at local literacy programs and early childhood development initiatives',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Interests
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Leveraging technology and passion to enhance learning experiences
          </p>

          {/* Technology Integration */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Technology Integration</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techTools.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{tech.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {tech.tools.map((tool, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personal Interests */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">Personal Interests</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${interest.color} flex items-center justify-center text-white mb-4`}>
                        {interest.icon}
                      </div>
                      <CardTitle className="text-xl">{interest.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">{interest.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
