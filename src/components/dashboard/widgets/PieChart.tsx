import React from 'react';

interface PieChartSegment {
  label: string;
  value: number;
  color: string; // e.g., 'bg-blue-500' or a CSS variable like 'var(--primary)'
}

interface PieChartProps {
  data: PieChartSegment[];
  title: string;
  size?: number; // Diameter of the pie chart
}

export default function PieChart({ data, title, size = 160 }: PieChartProps) {
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  // Basic placeholder if no data
  if (data.length === 0) {
    return (
      <div className="bg-card text-card-foreground p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
        <div className="flex justify-center items-center h-40">
          <p className="text-secondary">No data to display.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card text-card-foreground p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-6 text-center">{title}</h3>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
            {data.map((item, index) => {
              const percentage = totalValue > 0 ? (item.value / totalValue) * 100 : 0;
              const strokeDasharray = `${percentage} ${100 - percentage}`;
              const strokeDashoffset = -cumulativePercentage;
              cumulativePercentage += percentage;

              return (
                <circle
                  key={index}
                  cx={size / 2}
                  cy={size / 2}
                  r={size / 2 - (size / 10)} // Radius with a small gap for stroke
                  fill="transparent"
                  stroke={item.color} // Directly using color string
                  strokeWidth={size / 5} // Thickness of the pie segment
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300 ease-in-out"
                />
              );
            })}
          </svg>
           {/* You can add a center label or icon here if desired */}
           <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-secondary">Total: {totalValue}</span>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:ml-6 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-secondary">
                {item.label}: {((item.value / totalValue) * 100).toFixed(1)}% ({item.value})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
