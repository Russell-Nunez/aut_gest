import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors' // Import default colors

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        background: 'var(--background)', // #0D0D0D
        foreground: 'var(--foreground)', // #E0E0E0
        primary: 'var(--primary)',       // neon-green
        secondary: 'var(--secondary-text)', // #9CA3AF (gray-400)
        accent: 'var(--accent)',         // neon-green (can be same as primary)
        card: {
          DEFAULT: 'var(--card-background)', // #1F2937 (gray-800)
          foreground: 'var(--card-foreground)', // #E0E0E0 (same as page foreground)
        },
        border: 'var(--border-color)',   // neon-green
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px var(--neon-green), 0 0 7px var(--neon-green)', opacity: '0.7' },
          '50%': { boxShadow: '0 0 20px var(--neon-green), 0 0 30px var(--neon-green), 0 0 40px var(--neon-green)', opacity: '1' },
        },
        subtleGlow: {
          '0%, 100%': { boxShadow: '0 0 2px var(--neon-green)', opacity: '0.6' },
          '50%': { boxShadow: '0 0 6px var(--neon-green), 0 0 10px var(--neon-green)', opacity: '0.9' },
        }
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        'subtle-glow': 'subtleGlow 2.5s ease-in-out infinite alternate',
      },
      boxShadow: {
        'neon-sm': '0 0 3px var(--neon-green), 0 0 5px var(--neon-green)',
        'neon-md': '0 0 8px var(--neon-green), 0 0 12px var(--neon-green)',
        'neon-lg': '0 0 15px var(--neon-green), 0 0 25px var(--neon-green)',
      }
    },
  },
  plugins: [],
}
export default config
