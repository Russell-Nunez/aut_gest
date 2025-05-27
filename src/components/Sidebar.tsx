// src/components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo'; // Adjusted path
import ThemeSwitcher from '@/components/ThemeSwitcher'; // Adjusted path
import {
  LayoutDashboard, ArrowRightLeft, BarChart3, Target as IconBudget, // Renamed Target to IconBudget
  Goal, TrendingUp, Settings2, X
} from 'lucide-react';
import React from 'react'; // Added React import

// Props for mobile menu control (passed from parent, e.g., layout.tsx)
interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const navItems = [
  { href: '/overview', icon: LayoutDashboard, label: 'Overview' },
  { href: '/transactions', icon: ArrowRightLeft, label: 'Transactions' },
  { href: '/reports', icon: BarChart3, label: 'Reports' },
  { href: '/budgets', icon: IconBudget, label: 'Budgets' },
  { href: '/goals', icon: Goal, label: 'Financial Goals' },
  { href: '/investments', icon: TrendingUp, label: 'Investments' },
  { href: '/settings', icon: Settings2, label: 'Settings' },
];

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay - shown when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col w-64 bg-background border-r border-neon-green/30 text-foreground transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo and Mobile Close Button */}
        <div className="flex items-center justify-between h-20 px-4 border-b border-neon-green/30">
          <div className="flex justify-center flex-grow md:flex-grow-0 md:ml-[-0.5rem]"> {/* Adjust margin for centering logo with potential future collapse button */}
             <Logo />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md md:hidden text-gray-400 hover:text-white hover:bg-neon-green/20"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/overview' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => { if (isMobileMenuOpen) setIsMobileMenuOpen(false);}} // Close mobile menu on nav
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ease-in-out group
                  ${
                    isActive
                      ? 'bg-neon-green text-black font-semibold shadow-neon-md animate-subtle-glow'
                      : 'text-gray-300 hover:text-neon-green hover:bg-neon-green/10'
                  }
                `}
              >
                <item.icon size={22} className={isActive ? 'text-black' : 'text-gray-400 group-hover:text-neon-green'} />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Theme Switcher */}
        <div className="p-4 mt-auto border-t border-neon-green/30">
          <ThemeSwitcher />
        </div>
      </aside>
    </>
  );
}
