import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-500">Welcome to SmartCity</h1>
        <p className="text-xl mb-8">Experience the future of urban living</p>
      </header>

      <main className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Real-time Data"
            description="Access live information on traffic, weather, and more"
            icon="📊"
          />
          <FeatureCard
            title="Interactive Maps"
            description="Explore your city with detailed, interactive maps"
            icon="🗺️"
          />
          <FeatureCard title="Event Management" description="Stay updated with local events and activities" icon="🎉" />
          <FeatureCard title="Eco Achievements" description="Earn rewards for eco-friendly actions" icon="🌿" />
        </div>
      </main>
    </div>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

