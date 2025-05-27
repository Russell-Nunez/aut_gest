'use client'

import { useState } from 'react'
import Link from 'next/link'
import ThemeSwitcher from '@/components/ThemeSwitcher' // Adjusted path
import Logo from '@/components/Logo' // Adjusted path
import { Home, ListMinus, PieChart, Target, TrendingUp, X, Settings, BarChart2 } from 'lucide-react'

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  className?: string;
}

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen, className }: SidebarProps) {
  const navItems = [
    { href: "/dashboard", icon: Home, label: "Overview" },
    { href: "/dashboard/transactions", icon: ListMinus, label: "Transactions" },
    { href: "/dashboard/reports", icon: BarChart2, label: "Reports" },
    { href: "/dashboard/budgets", icon: PieChart, label: "Budgets" },
    { href: "/dashboard/goals", icon: Target, label: "Financial Goals" },
    { href: "/dashboard/investments", icon: TrendingUp, label: "Investments" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile Menu Overlay (visible when isMobileMenuOpen) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col w-64 bg-card text-card-foreground border-r border-border transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } ${className}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border h-16"> {/* Fixed height for header */}
          <Link href="/dashboard" className="flex items-center space-x-2">
            <Logo />
            <span className="font-semibold text-lg">MyFin</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden p-1 rounded-md hover:bg-secondary hover:text-secondary-foreground"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center p-2.5 space-x-3 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors duration-150 group"
              onClick={() => {
                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              }}
            >
              <item.icon size={20} className="text-muted-foreground group-hover:text-white" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 mt-auto border-t border-border">
          <ThemeSwitcher />
        </div>
      </aside>
    </>
  )
}
