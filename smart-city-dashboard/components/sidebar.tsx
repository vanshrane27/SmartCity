"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Map, Calendar, Bell, User } from "lucide-react"

const menuItems = [
  { icon: Home, name: "Dashboard", href: "/" },
  { icon: Map, name: "Map", href: "/map" },
  { icon: Calendar, name: "Events", href: "/events" },
  { icon: Bell, name: "Alerts", href: "/alerts" },
  { icon: User, name: "Profile", href: "/profile" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className={`bg-white dark:bg-gray-800 ${isOpen ? "w-64" : "w-20"} transition-all duration-300 ease-in-out`}>
      <nav className="mt-5 px-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
          >
            <item.icon className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300" />
            {isOpen && item.name}
          </Link>
        ))}
      </nav>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-0 right-0 mt-4 -mr-4 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2"
      >
        {isOpen ? (
          <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        ) : (
          <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </aside>
  )
}

