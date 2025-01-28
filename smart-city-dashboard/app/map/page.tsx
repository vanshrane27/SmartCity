"use client"

import { motion } from "framer-motion"

export default function Map() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <motion.h1
        className="text-4xl font-bold mb-4 text-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Interactive City Map
      </motion.h1>
      <motion.p
        className="text-xl text-purple-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Coming soon: Explore your city in real-time!
      </motion.p>
    </div>
  )
}

