"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

const events = [
  { id: 1, name: "City Festival", date: new Date(2023, 6, 15) },
  { id: 2, name: "Green Initiative", date: new Date(2023, 6, 20) },
  { id: 3, name: "Tech Conference", date: new Date(2023, 7, 5) },
]

export default function EventManagement() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [rsvpEvents, setRsvpEvents] = useState<number[]>([])

  const toggleRSVP = (eventId: number) => {
    setRsvpEvents((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>City Events</CardTitle>
        <CardDescription>Upcoming events and activities in the city</CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border mb-4" />
        <div>
          {events.map((event) => (
            <div key={event.id} className="mb-2 p-2 border rounded">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{event.name}</h3>
                  <p className="text-sm text-gray-500">{event.date.toDateString()}</p>
                </div>
                <Button
                  variant={rsvpEvents.includes(event.id) ? "default" : "outline"}
                  onClick={() => toggleRSVP(event.id)}
                >
                  {rsvpEvents.includes(event.id) ? "Cancel RSVP" : "RSVP"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

