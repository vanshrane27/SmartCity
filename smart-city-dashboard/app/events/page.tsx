"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: 1,
    name: "City Festival",
    date: new Date(2023, 6, 15),
    location: [51.505, -0.09],
    description: "Annual city festival with music, food, and cultural performances",
  },
  {
    id: 2,
    name: "Tech Conference",
    date: new Date(2023, 7, 1),
    location: [51.51, -0.1],
    description: "Conference on the latest tech trends and innovations",
  },
  {
    id: 3,
    name: "Eco Fair",
    date: new Date(2023, 7, 10),
    location: [51.49, -0.08],
    description: "Fair promoting eco-friendly products and sustainable practices",
  },
  {
    id: 4,
    name: "Art Exhibition",
    date: new Date(2023, 8, 5),
    location: [51.508, -0.11],
    description: "Showcase of local and international contemporary art",
  },
  {
    id: 5,
    name: "Marathon",
    date: new Date(2023, 9, 1),
    location: [51.503, -0.12],
    description: "Annual city marathon promoting health and fitness",
  },
  {
    id: 6,
    name: "Food Truck Festival",
    date: new Date(2023, 9, 15),
    location: [51.507, -0.13],
    description: "Gathering of the city's best food trucks and local cuisine",
  },
  {
    id: 7,
    name: "Science Fair",
    date: new Date(2023, 10, 1),
    location: [51.502, -0.14],
    description: "Exhibition of scientific projects and innovations",
  },
  {
    id: 8,
    name: "Winter Market",
    date: new Date(2023, 11, 1),
    location: [51.509, -0.15],
    description: "Traditional winter market with crafts, food, and festive activities",
  },
]

export default function Events() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [showCalendar, setShowCalendar] = useState(false)

  const filteredEvents = selectedDate
    ? events.filter((event) => event.date.toDateString() === selectedDate.toDateString())
    : events

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-blue-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        City Events
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-gray-800 p-4 rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Events List</h2>
            <Button onClick={() => setShowCalendar(!showCalendar)}>
              {showCalendar ? "Hide Calendar" : "Show Calendar"}
            </Button>
          </div>
          {showCalendar && (
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border mb-4"
            />
          )}
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors"
                onClick={() => setSelectedEvent(event)}
              >
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p>{event.date.toDateString()}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-4 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {events.map((event) => (
              <Marker key={event.id} position={event.location as [number, number]}>
                <Popup>{event.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>
      </div>
      {selectedEvent && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-gray-800 p-6 rounded-lg max-w-md">
            <h2 className="text-2xl font-semibold mb-4">{selectedEvent.name}</h2>
            <p className="mb-4">{selectedEvent.description}</p>
            <p className="mb-4">Date: {selectedEvent.date.toDateString()}</p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

