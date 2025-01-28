"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const emergencyAlerts = [
  { id: 1, title: "Road Closure", description: "Main Street closed due to construction" },
  { id: 2, title: "Weather Alert", description: "Heavy rain expected this afternoon" },
  { id: 3, title: "Power Outage", description: "Scheduled maintenance in downtown area" },
]

export default function EmergencyAlerts() {
  const [alerts, setAlerts] = useState(emergencyAlerts)

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      const randomAlert = {
        id: Math.random(),
        title: "New Alert",
        description: "This is a new emergency alert",
      }
      setAlerts((prev) => [...prev, randomAlert])
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emergency Alerts</CardTitle>
        <CardDescription>Real-time emergency notifications</CardDescription>
      </CardHeader>
      <CardContent>
        {alerts.map((alert) => (
          <Alert key={alert.id} variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertDescription>{alert.description}</AlertDescription>
          </Alert>
        ))}
      </CardContent>
    </Card>
  )
}

