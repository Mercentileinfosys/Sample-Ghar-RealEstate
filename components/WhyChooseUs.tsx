"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiTrendingUp, FiUsers, FiClock } from "react-icons/fi";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: FiAward,
      title: "Trusted Agents",
      description:
        "Our experienced team provides expert guidance throughout your property journey.",
    },
    {
      icon: FiTrendingUp,
      title: "Latest Market Updates",
      description:
        "Stay informed with real-time market trends and property valuations.",
    },
    {
      icon: FiUsers,
      title: "Melbourne Specialist",
      description:
        "Deep local knowledge of Melbourne's diverse property landscape.",
    },
    {
      icon: FiClock,
      title: "Fast Response",
      description:
        "Quick turnaround times and dedicated support for all your inquiries.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Ghar Real Estate
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine expertise, technology, and personalized service to deliver
            exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mb-6 bg-white rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                <feature.icon className="text-3xl text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
