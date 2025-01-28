"use client"

import { motion } from "framer-motion"

export default function Achievement() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <motion.h1
        className="text-4xl font-bold mb-4 text-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Achievements
      </motion.h1>
      <motion.p
        className="text-xl text-purple-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Coming soon: Track your eco-friendly actions and earn rewards!
      </motion.p>
    </div>
  )
}

