// src/components/charts/PieChartNeon.tsx
'use client';
import React from 'react';

interface PieChartDataPoint { // Renamed from 'name' to 'label' for consistency with previous chart components
  label: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieChartDataPoint[];
  title: string;
  size?: number;
}

export default function PieChartNeon({ data, title, size = 200 }: PieChartProps) {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  let accumulatedPercentageValue = 0; // Used to track the start angle for each slice

  // Helper to convert percentage to coordinates on the circle's edge
  const getCoordinatesForPercent = (percent: number) => {
    // Adjust angle to start from the top (12 o'clock) instead of 3 o'clock
    const angle = (percent * 2 * Math.PI) - (Math.PI / 2);
    const x = Math.cos(angle) * (size / 2 - 2); // -2 for a small padding from edge
    const y = Math.sin(angle) * (size / 2 - 2);
    return [x, y];
  };

  return (
    <div className="bg-card-background p-6 rounded-lg shadow-neon-md border border-neon-green/30 text-foreground">
      <h3 className="text-xl font-semibold mb-6 text-neon-green text-center animate-subtle-glow">{title}</h3>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <svg width={size} height={size} viewBox={`-${size/2} -${size/2} ${size} ${size}`}>
          {data.map((item, index) => {
            const itemPercentage = item.value / total;
            const [startX, startY] = getCoordinatesForPercent(accumulatedPercentageValue);
            accumulatedPercentageValue += itemPercentage;
            const [endX, endY] = getCoordinatesForPercent(accumulatedPercentageValue);
            
            // largeArcFlag is 1 if the arc is > 180 degrees, 0 otherwise
            const largeArcFlag = itemPercentage > 0.5 ? 1 : 0;

            // Path for the pie slice
            // M = moveto (startX, startY)
            // A = elliptical Arc (rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, endX, endY)
            // L = lineto (0,0) - center of the circle
            // Z = closepath
            const pathData = `M ${startX} ${startY} A ${size/2-2} ${size/2-2} 0 ${largeArcFlag} 1 ${endX} ${endY} L 0 0 Z`;

            return (
              <path
                key={index}
                d={pathData}
                fill={item.color}
                className="hover:opacity-80 transition-opacity cursor-pointer hover:shadow-neon-sm" // Added hover shadow
                stroke="var(--card-background)" // Add a slight border between slices, using card background
                strokeWidth="1" // Adjust stroke width as needed
              >
                <title>{`${item.label}: ${((item.value / total) * 100).toFixed(1)}% (${item.value})`}</title>
              </path>
            );
          })}
           {/* Optional: Add a center circle for a doughnut chart effect */}
           {/* <circle cx="0" cy="0" r={size / 4} fill="var(--card-background)" /> */}
        </svg>
        <div className="mt-6 md:mt-0 md:ml-8 space-y-2 text-sm"> {/* Increased margin for legend */}
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <span style={{ backgroundColor: item.color }} className="w-3.5 h-3.5 rounded-sm mr-2.5 border border-neon-green/30"></span> {/* Slightly larger, rounded-sm, border */}
              <span>{item.label}: {((item.value / total) * 100).toFixed(1)}% ({item.value})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
