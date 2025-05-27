import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`inline-block ${className}`}>
      <svg
        width="56" // Slightly smaller to fit well with padding and border
        height="56"
        viewBox="0 0 64 64" // Adjusted viewBox for internal padding for border
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated Neon Border */}
        <rect
          x="2"
          y="2"
          width="60" // viewBox width - stroke_width*2 - padding
          height="60"// viewBox height - stroke_width*2 - padding
          rx="12" // Rounded corners for the border
          fill="transparent" // Background of the logo itself
          stroke="var(--neon-green)" // Use CSS variable for neon green
          strokeWidth="2.5"
          className="animate-subtle-glow" // Apply glow animation
        />
        
        {/* Dragon Body (Placeholder - Red abstract shape) */}
        {/* This is a very abstract placeholder. User should replace with actual dragon SVG paths. */}
        <path
          d="M22 45 Q32 15 42 45 C37 55 27 55 22 45 Z" 
          fill="red"
          transform="translate(7, 0)" // Adjust position of dragon within the border
        />
        {/* Coin (Placeholder - Gold circle) */}
        <circle 
          cx="40" cy="42" r="6" // Positioned relative to the abstract dragon
          fill="#FFD700" 
          stroke="#A07000" // Darker gold for outline
          strokeWidth="1"
          transform="translate(7, 0)" // Adjust position
        />
      </svg>
    </div>
  );
}
