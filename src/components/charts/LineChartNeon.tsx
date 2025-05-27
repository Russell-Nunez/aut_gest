// src/components/charts/LineChartNeon.tsx
'use client';
import React from 'react';

interface Point {
  xLabel: string; // Original label for the x-axis point
  yValue: number; // Original y-axis value
}

interface LineChartProps {
  data: Point[];
  title: string;
  lineColor?: string;
  height?: number;
  width?: number;
}

export default function LineChartNeon({
  data,
  title,
  lineColor = 'var(--neon-green)',
  height = 300, // SVG drawing area height
  width = 600,  // SVG drawing area width
}: LineChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-card-background p-6 rounded-lg shadow-neon-md border border-neon-green/30 text-foreground text-center">
        <h3 className="text-xl font-semibold mb-6 text-neon-green">{title}</h3>
        <p className="text-gray-400">No data available for this chart.</p>
      </div>
    );
  }

  const padding = { top: 20, right: 30, bottom: 40, left: 50 }; // Padding around the chart area
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const yMax = Math.max(...data.map(p => p.yValue), 0);
  const yMin = Math.min(...data.map(p => p.yValue), 0); 
  const yRange = yMax - (yMin < 0 ? yMin : 0);


  // Create points string for polyline
  const points = data
    .map((point, i) => {
      const x = (chartWidth / (data.length -1 || 1)) * i; 
      const y = chartHeight - ((point.yValue - (yMin < 0 ? yMin : 0)) / (yRange === 0 ? 1 : yRange) * chartHeight); // Avoid division by zero if yRange is 0
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="bg-card-background p-4 sm:p-6 rounded-lg shadow-neon-md border border-neon-green/30 text-foreground">
      <h3 className="text-xl font-semibold mb-6 text-neon-green text-center">{title}</h3>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className={`font-sans min-w-[${width}px]`}>
          <g transform={`translate(${padding.left}, ${padding.top})`}>
            {/* Y-axis labels (simplified) */}
            {[0, 0.25, 0.5, 0.75, 1].map(tick => (
               <g key={tick}>
                <text x="-10" y={chartHeight * (1 - tick) + 5} textAnchor="end" className="text-xs fill-gray-400">
                  {(yRange * tick + (yMin < 0 ? yMin : 0)).toLocaleString()}
                </text>
                <line x1="-5" x2={chartWidth} y1={chartHeight * (1-tick)} y2={chartHeight * (1-tick)} stroke="var(--neon-green)" strokeOpacity="0.1" />
               </g>
            ))}

            {/* X-axis labels */}
            {data.map((point, i) => (
              <text
                key={i}
                x={(chartWidth / (data.length - 1 || 1)) * i}
                y={chartHeight + 20}
                textAnchor="middle"
                className="text-xs fill-gray-400 group-hover:fill-neon-green"
              >
                {point.xLabel}
              </text>
            ))}
            
            {/* X-axis line */}
            <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="var(--neon-green)" strokeOpacity="0.3" strokeWidth="1"/>

            {/* Line */}
            <polyline
              fill="none"
              stroke={lineColor}
              strokeWidth="2.5"
              points={points}
              className="drop-shadow-[0_2px_3px_rgba(57,255,20,0.5)]" // Neon glow for the line
            />

            {/* Points on the line */}
            {data.map((point, i) => {
              const x = (chartWidth / (data.length - 1 || 1)) * i;
              const y = chartHeight - ((point.yValue - (yMin < 0 ? yMin : 0)) / (yRange === 0 ? 1 : yRange) * chartHeight);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill={lineColor}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <title>{`${point.xLabel}: ${point.yValue.toLocaleString()}`}</title>
                </circle>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
