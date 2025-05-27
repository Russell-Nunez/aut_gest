// src/components/ui/NeonToggle.tsx (Simplified Example)
'use client';
import React from 'react';

interface NeonToggleProps {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  id: string;
}

export default function NeonToggle({ label, enabled, onChange, id }: NeonToggleProps) {
  return (
    <label htmlFor={id} className="flex items-center justify-between cursor-pointer group py-2"> {/* Added py-2 for better spacing */}
      <span className="text-gray-300 group-hover:text-neon-green transition-colors duration-150">{label}</span>
      <div className="relative">
        <input
          id={id}
          type="checkbox"
          className="sr-only" // Hide default checkbox
          checked={enabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        {/* Track */}
        <div className={`block w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${enabled ? 'bg-neon-green/60 shadow-neon-sm' : 'bg-gray-600 group-hover:bg-gray-500'}`}></div>
        {/* Thumb */}
        <div
          className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out shadow-md ${
            enabled ? 'transform translate-x-6 border-neon-green' : 'border-gray-400'
          } border-2`}
        ></div>
      </div>
    </label>
  );
}
