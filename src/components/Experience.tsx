import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Early Childhood Educator',
      company: 'Little Explorers International Academy',
      period: '2023 - Present',
      location: 'Nairobi, Kenya',
      achievements: [
        'Create and implement engaging, developmentally appropriate lesson plans for 25+ students aged 3-6 years',
        'Foster a nurturing classroom environment that encourages curiosity and independent learning through Montessori-inspired learning centers',
        'Utilize Montessori principles to support holistic child development, resulting in 95% of students meeting or exceeding developmental milestones',
        'Collaborate with colleagues to enhance curriculum and teaching strategies, leading to a 30% improvement in student engagement',
        'Maintain open communication with parents through weekly newsletters and bi-monthly parent-teacher conferences',
        'Implemented a successful reading program that improved early literacy rates by 40% in one academic year',
      ],
    },
    {
      title: 'Preschool Teacher',
      company: 'Bright Beginnings Learning Center',
      period: '2019 - 2023',
      location: 'Nairobi, Kenya',
      achievements: [
        'Developed and delivered age-appropriate curriculum for preschool students',
        'Created engaging learning activities that promoted cognitive and social development',
        'Built strong relationships with families and maintained regular communication',
        'Participated in professional development workshops to enhance teaching skills',
      ],
    },
    {
      title: "Teacher's Assistant",
      company: 'Sunshine Montessori School',
      period: '2016 - 2019',
      location: 'Nairobi, Kenya',
      achievements: [
        'Supported lead teachers in implementing Montessori curriculum',
        'Assisted in classroom management and student supervision',
        'Prepared learning materials and maintained organized classroom environment',
        'Provided individual attention to students needing additional support',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Over 8 years of dedicated service in early childhood education
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                          <Briefcase className="w-6 h-6 text-blue-600" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
