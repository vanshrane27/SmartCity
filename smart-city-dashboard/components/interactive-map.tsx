"use client"

import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const cityCenter = [51.505, -0.09]
const markers = [
  { position: [51.505, -0.09], name: "City Center" },
  { position: [51.51, -0.1], name: "Tourist Spot" },
  { position: [51.49, -0.08], name: "Eco-friendly Zone" },
]

export default function InteractiveMap() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <Card>
      <CardHeader>
        <CardTitle>City Map</CardTitle>
        <CardDescription>Explore city landmarks and points of interest</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className="mr-2"
          >
            All
          </Button>
          <Button
            variant={activeFilter === "tourist" ? "default" : "outline"}
            onClick={() => setActiveFilter("tourist")}
            className="mr-2"
          >
            Tourist Spots
          </Button>
          <Button variant={activeFilter === "eco" ? "default" : "outline"} onClick={() => setActiveFilter("eco")}>
            Eco-friendly Zones
          </Button>
        </div>
        <MapContainer center={cityCenter} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {markers
            .filter((marker) => {
              if (activeFilter === "all") return true
              if (activeFilter === "tourist" && marker.name.includes("Tourist")) return true
              if (activeFilter === "eco" && marker.name.includes("Eco")) return true
              return false
            })
            .map((marker, index) => (
              <Marker key={index} position={marker.position}>
                <Popup>{marker.name}</Popup>
              </Marker>
            ))}
        </MapContainer>
      </CardContent>
    </Card>
  )
}

