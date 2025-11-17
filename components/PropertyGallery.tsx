"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PropertyGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const gallery = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=700&fit=crop",
      title: "Urban Living",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=350&fit=crop",
      title: "Luxury Homes",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=350&fit=crop",
      title: "Modern Design",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=700&fit=crop",
      title: "Waterfront",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our exclusive collection of premium Melbourne properties
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                index === 0 || index === 3 ? "row-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-300 z-10 pointer-events-none"></div>
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={index === 0 || index === 3 ? 700 : 350}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent transition-opacity duration-300"
              >
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-white text-2xl font-bold mb-2"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-2 bg-white text-primary rounded-lg font-semibold text-sm hover:bg-pink-50 transition-colors"
                  >
                    View More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
