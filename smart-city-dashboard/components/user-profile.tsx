"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const userTypes = ["City Administrator", "Resident", "Tourist"]

export default function UserProfile() {
  const [userType, setUserType] = useState("Resident")
  const [ecoScore, setEcoScore] = useState(0)

  useEffect(() => {
    // Simulating eco-friendly activities
    const interval = setInterval(() => {
      setEcoScore((prev) => Math.min(prev + 10, 100))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
        <CardDescription>Personalize your SmartCity experience</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">User Type</h3>
          <div className="flex space-x-2">
            {userTypes.map((type) => (
              <Badge
                key={type}
                variant={userType === type ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setUserType(type)}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Eco Score</h3>
          <Progress value={ecoScore} className="w-full" />
          <p className="text-sm text-gray-500 mt-1">Keep using eco-friendly services to increase your score!</p>
        </div>
      </CardContent>
    </Card>
  )
}

