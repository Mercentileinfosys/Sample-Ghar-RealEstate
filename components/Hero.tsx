"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-pink-50 text-primary font-medium rounded-full text-sm">
                Popular Listing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              Perfect place
              <br />
              for your family
              <br />
              to live
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              The right property will give your dream life an ideal platform and
              pleasant environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                View Properties
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-primary bg-white text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Agent
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center cursor-pointer"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  196+
                </div>
                <div className="text-sm text-gray-600">Golf Course</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center cursor-pointer"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  256+
                </div>
                <div className="text-sm text-gray-600">Swimming Pool</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center cursor-pointer"
              >
                <div className="text-3xl font-bold text-primary mb-1">
                  149+
                </div>
                <div className="text-sm text-gray-600">Parks & Gym</div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=900&fit=crop"
                alt="Luxury Melbourne Property"
                width={800}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
                    alt="Agent"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    William Jackson
                  </div>
                  <div className="text-sm text-gray-600">Real Estate Agent</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { delay: 1 },
                scale: { delay: 1, type: "spring" },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="absolute top-8 -right-8 bg-gradient-to-br from-primary to-pink-600 rounded-2xl p-4 shadow-xl cursor-pointer"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  $450K
                </div>
                <div className="text-xs text-white/80">Starting Price</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
