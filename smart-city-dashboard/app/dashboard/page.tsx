"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const generateRandomData = (length: number) => {
  return Array.from({ length }, (_, i) => ({
    time: `${i}:00`,
    traffic: Math.floor(Math.random() * 100),
    weather: Math.floor(Math.random() * 30),
    airQuality: Math.floor(Math.random() * 100),
    energyConsumption: Math.floor(Math.random() * 1000),
  }))
}

export default function Dashboard() {
  const [data, setData] = useState(generateRandomData(24))
  const [alerts, setAlerts] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData(24))
      setAlerts((prev) => [
        `Weather Alert: ${Math.random() > 0.5 ? "Heavy rain" : "Strong winds"} expected`,
        `Traffic Alert: ${Math.random() > 0.5 ? "Congestion" : "Accident"} on Main Street`,
        ...prev.slice(0, 3),
      ])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-blue-500">Dashboard</h1>
      <div className="grid grid-cols-2 gap-8">
        <motion.div
          className="bg-gray-800 p-4 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Traffic Updates</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="traffic" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-4 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Weather Conditions</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weather" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-4 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Air Quality</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="airQuality" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-4 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Energy Consumption</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="energyConsumption" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
      <motion.div
        className="mt-8 bg-gray-800 p-4 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Real-time Alerts</h2>
        <ul className="space-y-2">
          {alerts.map((alert, index) => (
            <li key={index} className="bg-red-900 p-2 rounded">
              {alert}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

