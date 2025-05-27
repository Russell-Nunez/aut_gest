// src/components/goals/GoalCard.tsx
'use client';
import React from 'react';
import { type LucideProps } from 'lucide-react';

interface GoalCardProps {
  title: string;
  targetAmount: number;
  currentAmount: number;
  icon: React.ComponentType<LucideProps>;
  deadline?: string;
}

export default function GoalCard({ title, targetAmount, currentAmount, icon: Icon, deadline }: GoalCardProps) {
  const percentage = targetAmount > 0 ? Math.min((currentAmount / targetAmount) * 100, 100) : 0;
  const remainingAmount = Math.max(0, targetAmount - currentAmount);

  return (
    <div className="bg-card-background p-6 rounded-lg shadow-neon-sm border border-neon-green/30 hover:shadow-neon-md transition-shadow duration-300 flex flex-col">
      <div className="flex items-center mb-3">
        <Icon size={30} className="text-neon-green mr-4" />
        <h3 className="text-xl font-semibold text-gray-100 truncate">{title}</h3>
      </div>
      <div className="space-y-1 text-sm mb-3">
        <p className="text-gray-400">
          <span className="font-medium text-gray-200">${currentAmount.toLocaleString()}</span> saved of
          <span className="font-medium text-gray-200"> ${targetAmount.toLocaleString()}</span>
        </p>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4 mb-1 relative overflow-hidden">
        <div
          className="bg-neon-green h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between items-center text-xs font-medium mt-auto pt-2">
        <span className={percentage === 100 ? "text-green-400 font-bold" : "text-gray-400"}>
          {percentage === 100 ? "Goal Achieved!" : `${percentage.toFixed(1)}% Complete`}
        </span>
        {deadline && <span className="text-gray-500">Deadline: {deadline}</span>}
      </div>
       {percentage < 100 && remainingAmount > 0 && (
        <p className="text-xs text-neon-green/80 mt-1">
          ${remainingAmount.toLocaleString()} more to go!
        </p>
      )}
    </div>
  );
}
