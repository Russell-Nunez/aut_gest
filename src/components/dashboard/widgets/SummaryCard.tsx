import { LucideProps } from 'lucide-react';
import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<LucideProps>;
  iconBgColorClass?: string; // e.g., 'bg-green-500' or 'bg-accent'
}

export default function SummaryCard({ title, value, icon: Icon, iconBgColorClass = 'bg-primary' }: SummaryCardProps) {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-xl shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300">
      <div className={`p-3 rounded-full ${iconBgColorClass}`}>
        <Icon size={28} className="text-white" /> {/* Assuming icon color should be white for contrast with bg */}
      </div>
      <div>
        <p className="text-sm text-secondary font-medium">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
