"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function TrustedAgency() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&h=800&fit=crop"
                alt="Modern Melbourne Property"
                width={700}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your trusted
              <br />
              real estate agency
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ghar Real Estate is Melbourne&apos;s trusted property agency
              delivering exceptional service, new property opportunities, and
              reliable guidance for buyers, sellers, and investors.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -5, rotateZ: -2 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-4xl font-bold text-primary mb-2">196+</div>
                <div className="text-gray-600">Properties Sold</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5, rotateZ: 2 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-4xl font-bold text-primary mb-2">256+</div>
                <div className="text-gray-600">Happy Customers</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5, rotateZ: -2 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-4xl font-bold text-primary mb-2">12+</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5, rotateZ: 2 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-4xl font-bold text-primary mb-2">125K+</div>
                <div className="text-gray-600">Transactions</div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
