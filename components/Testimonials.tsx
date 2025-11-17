"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content:
        "Ghar Real Estate made our dream home a reality. Their professionalism and market knowledge are unmatched. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "James Thompson",
      role: "Property Investor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      content:
        "Outstanding service from start to finish. They helped me find the perfect investment property in Melbourne. Couldn't be happier!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "First Home Buyer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content:
        "As a first-time buyer, I was nervous, but the team at Ghar made everything smooth and stress-free. Excellent experience!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Real experiences from real people who found their dream homes
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-12 shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    className="text-yellow-400 text-2xl cursor-pointer"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 max-w-3xl leading-relaxed italic">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>
              <h4 className="text-xl font-bold text-gray-900">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-pink-600 hover:text-white transition-all duration-300"
            >
              <FiChevronLeft className="text-xl" />
            </motion.button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-primary to-pink-600 w-8"
                      : "bg-gray-300 w-3 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-pink-600 hover:text-white transition-all duration-300"
            >
              <FiChevronRight className="text-xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
