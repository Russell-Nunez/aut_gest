// src/components/charts/BarChartNeon.tsx
'use client';
import React from 'react';

interface BarChartProps {
  data: { label: string; value: number }[];
  title: string;
  barColor?: string; // e.g., 'fill-neon-green' or CSS variable
}

export default function BarChartNeon({ data, title, barColor = 'var(--neon-green)' }: BarChartProps) {
  const maxValue = Math.max(...data.map(item => item.value), 0);
  const chartHeight = 250; // Max height of the chart area for bars
  const barWidth = 30;
  const barMargin = 15;
  const totalWidth = data.length * (barWidth + barMargin) - barMargin;

  // Fallback for no data
  if (data.length === 0) {
    return (
      <div className="bg-card-background p-6 rounded-lg shadow-neon-md border border-neon-green/30 text-foreground">
        <h3 className="text-xl font-semibold mb-6 text-neon-green text-center">{title}</h3>
        <div className="flex justify-center items-center h-[290px]"> {/* chartHeight + 40px */}
          <p className="text-gray-400">No data available for this chart.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card-background p-6 rounded-lg shadow-neon-md border border-neon-green/30 text-foreground">
      <h3 className="text-xl font-semibold mb-6 text-neon-green text-center">{title}</h3>
      <div className="flex justify-center overflow-x-auto pb-2"> {/* Added pb-2 for potential scrollbar space */}
        <svg width={totalWidth > 0 ? totalWidth : 200} height={chartHeight + 40} className="font-sans">
          {data.map((item, index) => {
            const barHeight = maxValue > 0 ? (item.value / maxValue) * chartHeight : 0;
            const x = index * (barWidth + barMargin);
            return (
              <g key={index} className="group cursor-pointer">
                <rect
                  x={x}
                  y={chartHeight - barHeight}
                  width={barWidth}
                  height={barHeight > 0 ? barHeight : 0} // Ensure height is not negative
                  style={{ fill: barColor }} // Using style attribute for fill with CSS variable
                  className="transition-all duration-200 ease-in-out group-hover:opacity-80"
                />
                {/* Value text above bar on hover */}
                <text
                  x={x + barWidth / 2}
                  y={chartHeight - barHeight - 5}
                  textAnchor="middle"
                  className="text-xs fill-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" // pointer-events-none to allow hover on rect
                >
                  {item.value}
                </text>
                {/* Label below bar */}
                <text
                  x={x + barWidth / 2}
                  y={chartHeight + 20}
                  textAnchor="middle"
                  className="text-xs fill-gray-400 group-hover:fill-neon-green transition-colors duration-200"
                >
                  {item.label}
                </text>
              </g>
            );
          })}
          {/* Optional: X-axis line */}
          <line x1="0" y1={chartHeight} x2={totalWidth > 0 ? totalWidth : 200} y2={chartHeight} stroke="var(--border-color, var(--neon-green))" strokeOpacity="0.3" strokeWidth="1"/>
        </svg>
      </div>
    </div>
  );
}
