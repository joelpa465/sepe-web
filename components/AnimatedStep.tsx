"use client";

import { motion } from "framer-motion";

interface AnimatedStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  index: number;
}

export default function AnimatedStep({ number, title, description, isLast = false, index }: AnimatedStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white text-2xl font-bold mb-4 shadow-lg cursor-pointer"
      >
        {number}
      </motion.div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent"
          style={{ transform: 'translateX(100%)' }}
        />
      )}
    </motion.div>
  );
}

