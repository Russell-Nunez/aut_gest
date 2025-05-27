'use client'

import { useState, ReactNode } from 'react'
import Sidebar from './Sidebar' // Assuming Sidebar is in the same directory
import { Menu as MenuIcon, Bell } from 'lucide-react' // Added Bell for potential notifications
import Logo from '@/components/Logo' // For mobile header

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        // className="hidden md:flex" // Example of using className if needed for specific layout adjustments
      />
      <div className="flex flex-col flex-1 md:ml-64"> {/* Adjust margin to match sidebar width */}
        {/* Mobile Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between p-4 bg-card border-b border-border md:hidden h-16">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1.5 rounded-md text-foreground hover:bg-secondary hover:text-secondary-foreground"
            aria-label="Open menu"
          >
            <MenuIcon size={24} />
          </button>
          <div className="flex items-center space-x-2">
            <Logo className="w-7 h-7" /> {/* Smaller logo for mobile header */}
            <span className="font-semibold text-md">MyFin</span>
          </div>
          <button
            className="p-1.5 rounded-md text-foreground hover:bg-secondary hover:text-secondary-foreground"
            aria-label="Notifications"
          >
            <Bell size={24} /> {/* Placeholder for notifications */}
          </button>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
