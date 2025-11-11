import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { ContactInfo } from '../types';

const email = import.meta.env.VITE_CONTACT_EMAIL || 'kendikanya@gmail.com';
const phone = import.meta.env.VITE_CONTACT_PHONE || '+254 708 114250';
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/winfredkendi-educator';
const location = import.meta.env.VITE_LOCATION || 'Nairobi, Kenya';

export default function Contact() {
  const { ref, initial, animate, transition } = useScrollAnimation();

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: phone,
      href: `tel:${phone.replace(/\s/g, '')}`,
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'winfredkendi-educator',
      href: linkedinUrl,
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: location,
      href: null,
      color: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={initial}
          animate={animate}
          transition={transition}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or simply connecting with fellow educators. 
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={animate.opacity ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {info.href ? (
                  <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 hover:scale-105 cursor-pointer">
                      <CardContent className="pt-6 text-center">
                        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-white mb-4`}>
                          {info.icon}
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          {info.label}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
                          {info.value}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Card className="h-full">
                    <CardContent className="pt-6 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center text-white mb-4`}>
                        {info.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {info.label}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animate.opacity ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 border-none text-white">
              <CardContent className="py-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
                <p className="mb-6 text-blue-100">
                  Whether you're looking for an experienced educator, seeking collaboration opportunities, 
                  or just want to discuss early childhood education, I'd love to hear from you.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2"
                  onClick={() => window.location.href = `mailto:${email}`}
                >
                  <Send className="w-5 h-5" />
                  Send Me an Email
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
