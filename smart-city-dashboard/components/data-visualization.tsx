"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "00:00", traffic: 2000, energy: 2400, air: 2400 },
  { name: "04:00", traffic: 3000, energy: 1398, air: 2210 },
  { name: "08:00", traffic: 2000, energy: 9800, air: 2290 },
  { name: "12:00", traffic: 2780, energy: 3908, air: 2000 },
  { name: "16:00", traffic: 1890, energy: 4800, air: 2181 },
  { name: "20:00", traffic: 2390, energy: 3800, air: 2500 },
  { name: "23:59", traffic: 3490, energy: 4300, air: 2100 },
]

export default function DataVisualization() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>City Metrics</CardTitle>
        <CardDescription>Real-time data visualization of key city metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="traffic" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="energy" stroke="#82ca9d" />
            <Line type="monotone" dataKey="air" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

