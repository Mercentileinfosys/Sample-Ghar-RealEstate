"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiHome, FiTrendingUp, FiUsers, FiAward } from "react-icons/fi";

export default function QuickStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: FiHome, value: "850+", label: "Properties Listed", delay: 0.1 },
    { icon: FiTrendingUp, value: "98%", label: "Client Satisfaction", delay: 0.2 },
    { icon: FiUsers, value: "1200+", label: "Happy Clients", delay: 0.3 },
    { icon: FiAward, value: "25+", label: "Years Experience", delay: 0.4 },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: stat.delay, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: stat.delay,
                }}
                className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-full group-hover:from-primary group-hover:to-pink-600 transition-all duration-300 shadow-md group-hover:shadow-xl"
              >
                <stat.icon className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.15 }}
                className="text-3xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 group-hover:text-primary transition-colors duration-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
