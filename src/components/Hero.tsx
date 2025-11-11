import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              WK
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Winfred Kendi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6"
          >
            Global-Minded Teaching Professional
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Dedicated and passionate educator with a strong foundation in early childhood development 
            and international curricula. Committed to fostering inclusive, student-centered learning 
            environments that nurture well-rounded, culturally aware global citizens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Button
              variant="default"
              size="lg"
              className="gap-2"
              onClick={() => window.location.href = 'mailto:kendikanya@gmail.com'}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400"
          >
            <a href="mailto:kendikanya@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm">kendikanya@gmail.com</span>
            </a>
            <a href="tel:+254708114250" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-sm">+254 708 114250</span>
            </a>
            <a href="https://linkedin.com/in/winfredkendi-educator" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Nairobi, Kenya</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
