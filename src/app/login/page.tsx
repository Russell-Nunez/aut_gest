'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Logo from '@/components/Logo' // Assuming components are in src/components
import ThemeSwitcher from '@/components/ThemeSwitcher' // Assuming components are in src/components

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    // Replace with your actual API call
    if (email === 'admin@example.com' && password === '123456') {
      // Simulate successful login
      router.push('/dashboard')
    } else {
      alert('Invalid email or password') // Replace with a more user-friendly notification
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <ThemeSwitcher />
      </div>

      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Logo className="w-16 h-16" />
        </div>

        <div className="bg-card text-card-foreground p-8 sm:p-10 rounded-xl shadow-2xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-background text-foreground border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                required
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-background text-foreground border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                required
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
            >
              Sign In
            </button>
          </form>
        </div>
        <p className="mt-8 text-center text-sm text-foreground/80">
          Don&apos;t have an account?{' '}
          <a href="#" className="font-medium text-primary hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
