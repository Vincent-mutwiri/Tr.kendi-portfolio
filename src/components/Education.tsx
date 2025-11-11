import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const { ref, initial, animate, transition } = useScrollAnimation();

  const education = [
    {
      degree: 'Certificate in Teaching International Curriculum (CTIC)',
      institution: 'Riara University',
      year: '2025',
      highlights: [
        'British National Curriculum (BNC)',
        'International General Certificate of Secondary Education (IGCSE)',
        'International Baccalaureate (IB)',
        'Modern pedagogical approaches and learner-centered teaching methods',
        'Effective integration of ICT in education',
      ],
    },
    {
      degree: 'ECDE Certification',
      institution: 'Shilida ECDE Training College',
      year: '2019 - 2022',
      highlights: [
        'Comprehensive understanding of child development stages',
        'Strategies for creating engaging learning experiences',
        'Supporting social-emotional and cognitive growth in children',
        'Classroom management techniques for young learners',
      ],
    },
    {
      degree: 'Montessori Teaching Diploma',
      institution: 'Premese Montessori College',
      year: '2012 - 2014',
      highlights: [
        'Self-directed learning environments',
        'Hands-on, experiential learning',
        'Prepared learning spaces that encourage exploration',
        'Teacher as a guide and facilitator',
        'Holistic development approach',
      ],
    },
  ];

  const professionalDevelopment = [
    {
      title: 'Early Childhood Education Conference',
      location: 'Nairobi, Kenya',
      year: '2024',
    },
    {
      title: 'Montessori in the Digital Age',
      location: 'Online Workshop',
      year: '2023',
    },
    {
      title: 'Inclusive Education Strategies',
      location: 'Kenya Institute of Curriculum Development',
      year: '2022',
    },
    {
      title: 'Child Protection and Safeguarding',
      location: 'Local Education Authority',
      year: '2021',
    },
  ];

  const memberships = [
    'Kenya Early Childhood Development Network (KECDN)',
    'Association of Montessori Teachers in Kenya (AMTEK)',
    'International Literacy Association (ILA)',
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={initial}
          animate={animate}
          transition={transition}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Continuous learning and professional development
          </p>

          {/* Education */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={animate.opacity ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Professional Development & Memberships */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={animate.opacity ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Professional Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {professionalDevelopment.map((pd, index) => (
                      <li key={index} className="border-l-4 border-blue-600 pl-4">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">{pd.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{pd.location}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500">{pd.year}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={animate.opacity ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Professional Memberships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {memberships.map((membership, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{membership}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
