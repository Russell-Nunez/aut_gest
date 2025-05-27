// src/app/settings/page.tsx
'use client';
import React, { useState } from 'react';
import NeonToggle from '@/components/ui/NeonToggle'; // Assuming path
import { UserCircle, Palette, Bell } from 'lucide-react';

export default function SettingsPage() {
  // Mock states for toggles
  const [reduceMotion, setReduceMotion] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  // Mock user data
  const userData = {
    username: 'CyberDragonUser',
    email: 'user@example-neon.com',
  };

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold text-neon-green animate-subtle-glow">Settings</h1>

      {/* Profile Section */}
      <section className="p-6 bg-card-background rounded-lg shadow-neon-sm border border-neon-green/30">
        <div className="flex items-center mb-6">
          <UserCircle size={28} className="text-neon-green mr-3" />
          <h2 className="text-2xl font-semibold text-gray-100">Profile</h2>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-400 mb-1">Username</label>
            <input
              type="text"
              id="username"
              value={userData.username}
              readOnly
              className="w-full p-3 bg-gray-700/50 border border-neon-green/30 rounded-md text-gray-300 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={userData.email}
              readOnly
              className="w-full p-3 bg-gray-700/50 border border-neon-green/30 rounded-md text-gray-300 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green"
            />
          </div>
          <button className="px-6 py-2.5 rounded-lg bg-neon-green text-black hover:bg-opacity-80 transition-all duration-200 font-semibold shadow-neon-sm hover:shadow-neon-md mt-2">
            Edit Profile
          </button>
        </div>
      </section>

      {/* Appearance Section */}
      <section className="p-6 bg-card-background rounded-lg shadow-neon-sm border border-neon-green/30">
        <div className="flex items-center mb-6">
          <Palette size={28} className="text-neon-green mr-3" />
          <h2 className="text-2xl font-semibold text-gray-100">Appearance</h2>
        </div>
        <div className="space-y-5">
          <div className="text-gray-300">Current Theme: <span className="font-semibold text-neon-green">Dark Neon</span></div>
          <NeonToggle id="reduceMotion" label="Reduce Motion (animations, glows)" enabled={reduceMotion} onChange={setReduceMotion} />
          {/* Add more appearance settings if needed */}
        </div>
      </section>

      {/* Notifications Section */}
      <section className="p-6 bg-card-background rounded-lg shadow-neon-sm border border-neon-green/30">
        <div className="flex items-center mb-6">
          <Bell size={28} className="text-neon-green mr-3" />
          <h2 className="text-2xl font-semibold text-gray-100">Notifications</h2>
        </div>
        <div className="space-y-5">
          <NeonToggle id="emailNotifications" label="Email Notifications" enabled={emailNotifications} onChange={setEmailNotifications} />
          <NeonToggle id="pushNotifications" label="Push Notifications (Desktop)" enabled={pushNotifications} onChange={setPushNotifications} />
        </div>
      </section>
      
      <div className="flex justify-end mt-8">
        <button className="px-8 py-3 rounded-lg bg-neon-green text-black hover:bg-opacity-80 transition-all duration-200 font-bold text-lg shadow-neon-md hover:shadow-neon-lg animate-subtle-glow">
          Save All Settings
        </button>
      </div>
    </div>
  );
}
