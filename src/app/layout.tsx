// src/app/layout.tsx
'use client'; // Make it a client component for state management

import type { Metadata } from 'next'; // Keep metadata if needed, but it's often static
import { Geist, Geist_Mono } from 'next/font/google'; // Assuming these fonts are still desired
import './globals.css';
import Sidebar from '@/components/Sidebar'; // Adjust path if your components folder is aliased differently
import { useState, ReactNode } from 'react';
import { Menu as MenuIcon } from 'lucide-react'; // Hamburger icon for mobile

const geistSans = Geist({
  variable: '--font-geist-sans', // Ensure these match globals.css
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono', // Ensure these match globals.css
  subsets: ['latin'],
});

// Metadata can still be exported if it's static, otherwise handled differently in App Router for dynamic titles.
// For simplicity, keeping the static metadata export.
export const metadata: Metadata = {
  title: 'Neon Dragon Finance', // Updated title
  description: 'Personal finance dashboard with a neon dragon theme',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en" className="dark"> {/* Ensure 'dark' class is here */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen">
          <Sidebar
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <div className="flex-1 flex flex-col md:ml-64"> {/* Adjust md:ml-64 if sidebar width changes from w-64 */}
            {/* Mobile Header with Hamburger Menu */}
            <header className="sticky top-0 z-20 flex items-center justify-start p-4 h-20 bg-background/90 backdrop-blur-md border-b border-neon-green/30 md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-300 hover:text-neon-green hover:bg-neon-green/10"
                aria-label="Open menu"
              >
                <MenuIcon size={28} />
              </button>
              {/* Optional: Mobile header title or tiny logo can go here */}
              {/* e.g., <div className="ml-4"><Logo size="small" /></div> */}
            </header>
            {/* Main Page Content */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
