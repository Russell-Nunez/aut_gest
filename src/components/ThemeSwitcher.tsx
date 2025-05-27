'use client'

import { useEffect, useState } from 'react'
import { Moon } from 'lucide-react' // Using Moon icon as it's always dark

const ThemeSwitcher = () => {
  // The state is less critical now but can be kept for consistency if needed elsewhere,
  // though the theme is now fixed to 'dark'.
  const [currentTheme, setCurrentTheme] = useState('dark')

  useEffect(() => {
    // Enforce dark theme. This runs once on mount.
    const root = window.document.documentElement
    root.classList.remove('light') // Ensure light class is removed
    root.classList.add('dark')     // Ensure dark class is present
    root.setAttribute('data-theme', 'dark') // Keep data-theme for compatibility if any CSS still uses it
    localStorage.setItem('theme', 'dark') // Persist 'dark' as the only theme
    setCurrentTheme('dark') // Update state, though it's now static
  }, []) // Empty dependency array means this runs once on mount

  return (
    <div className="flex items-center space-x-2 p-2.5 rounded-lg neon-border shadow-neon-sm">
      <Moon size={20} className="text-neon-green animate-subtle-glow" />
      <span className="text-sm font-medium text-secondary-text">Dark Neon</span>
    </div>
  )
}

export default ThemeSwitcher
