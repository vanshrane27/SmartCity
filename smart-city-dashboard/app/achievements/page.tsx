"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const achievements = [
  { id: 1, name: "Public Transport Hero", description: "Used public transport 10 times", icon: "🚌", progress: 70 },
  { id: 2, name: "Energy Saver", description: "Reduced energy consumption by 20%", icon: "⚡", progress: 50 },
  { id: 3, name: "Recycling Champion", description: "Recycled 100 items", icon: "♻️", progress: 90 },
  { id: 4, name: "Green Thumb", description: "Planted 5 trees", icon: "🌳", progress: 40 },
]

export default function Achievements() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Achievements
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">{achievement.icon}</div>
              <div>
                <h2 className="text-2xl font-semibold">{achievement.name}</h2>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-blue-500">Progress</span>
                <span className="text-sm font-medium text-blue-500">{achievement.progress}%</span>
              </div>
              <Progress value={achievement.progress} className="w-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

