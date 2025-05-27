import React from 'react';

interface BarChartDataPoint {
  label: string;
  value: number;
  color: string; // e.g., 'bg-blue-500' or a CSS variable
}

interface BarChartProps {
  data: BarChartDataPoint[];
  title: string;
  barWidthClass?: string; // e.g., 'w-8' or 'w-12'
}

export default function BarChart({ data, title, barWidthClass = 'w-8' }: BarChartProps) {
  const maxValue = Math.max(...data.map(item => item.value), 0);

  return (
    <div className="bg-card text-card-foreground p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      <div className={`flex justify-around items-end h-48 space-x-2`}>
        {data.length === 0 ? (
          <p className="text-secondary text-center w-full">No data to display.</p>
        ) : (
          data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1 min-w-0">
              <div
                className={`rounded-t-md ${item.color} ${barWidthClass} hover:opacity-80 transition-opacity`}
                style={{ height: `${maxValue > 0 ? (item.value / maxValue) * 100 : 0}%` }}
                title={`${item.label}: ${item.value}`}
              />
              <span className="text-xs mt-1 text-secondary truncate" title={item.label}>
                {item.label}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
