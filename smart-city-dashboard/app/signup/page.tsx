"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("resident")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle user registration
    console.log("Sign up with:", email, password, userType)
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-96"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1">User Type</label>
            <RadioGroup defaultValue="resident" onValueChange={setUserType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="resident" id="resident" />
                <Label htmlFor="resident">Resident</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tourist" id="tourist" />
                <Label htmlFor="tourist">Tourist</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </motion.div>
    </div>
  )
}

