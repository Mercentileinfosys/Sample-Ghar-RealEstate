"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Listing", href: "#listings" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Ghar Real Estate"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#FF1F5A" }}
                className="text-gray-700 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-primary transition-colors"
            >
              <BsPerson className="text-xl" />
              <span className="font-medium">Sign In</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t shadow-lg"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-primary rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-pink-50 hover:text-primary rounded-md transition-all">
              Sign In
            </button>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-pink-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
