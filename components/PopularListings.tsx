"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { IoBedOutline, IoCarOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";

export default function PopularListings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=400&fit=crop",
      price: "$850,000",
      title: "Modern Family Home",
      location: "South Yarra, Melbourne",
      beds: 4,
      baths: 3,
      parking: 2,
      tag: "Popular",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop",
      price: "$1,250,000",
      title: "Luxury Villa",
      location: "Brighton, Melbourne",
      beds: 5,
      baths: 4,
      parking: 3,
      tag: "Featured",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=400&fit=crop",
      price: "$650,000",
      title: "Contemporary Apartment",
      location: "St Kilda, Melbourne",
      beds: 3,
      baths: 2,
      parking: 1,
      tag: "New",
    },
  ];

  return (
    <section id="listings" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Popular Listings
            </h2>
            <p className="text-gray-600">
              Discover our hand-picked selection of premium properties
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            View All
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-64 bg-gray-100">
                <Image
                  src={property.image}
                  alt={property.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    {property.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg"
                  >
                    ♥
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-primary">
                    {property.price}
                  </h3>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {property.title}
                </h4>
                <div className="flex items-center text-gray-600 mb-4">
                  <FiMapPin className="mr-2" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <motion.div
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="flex items-center space-x-1 text-gray-600 cursor-pointer"
                  >
                    <IoBedOutline className="text-xl" />
                    <span className="text-sm font-medium">{property.beds}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="flex items-center space-x-1 text-gray-600 cursor-pointer"
                  >
                    <LuBath className="text-xl" />
                    <span className="text-sm font-medium">{property.baths}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="flex items-center space-x-1 text-gray-600 cursor-pointer"
                  >
                    <IoCarOutline className="text-xl" />
                    <span className="text-sm font-medium">{property.parking}</span>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
