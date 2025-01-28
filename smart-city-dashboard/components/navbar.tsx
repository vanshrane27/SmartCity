"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const dashboardNavItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Events", path: "/events" },
  { name: "Achievements", path: "/achievements" },
  { name: "Profile", path: "/profile" },
]

const landingNavItems = [
  { name: "Features", path: "/#features" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const isDashboard =
    pathname.startsWith("/dashboard") ||
    pathname === "/events" ||
    pathname === "/achievements" ||
    pathname === "/profile"

  const navItems = isDashboard ? dashboardNavItems : landingNavItems

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-500">SmartCity</span>
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} className="relative">
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                    layoutId="underline"
                    initial={false}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
        {!isDashboard && (
          <div className="space-x-2">
            <Button asChild variant="ghost">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        )}
        {isDashboard && (
          <Button asChild variant="ghost">
            <Link href="/">Logout</Link>
          </Button>
        )}
      </div>
    </nav>
  )
}

