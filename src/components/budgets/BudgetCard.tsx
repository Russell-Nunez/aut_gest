// src/components/budgets/BudgetCard.tsx
'use client';
import React from 'react';
import { type LucideProps } from 'lucide-react'; // Import LucideProps for icon type

interface BudgetCardProps {
  title: string;
  allocated: number;
  spent: number;
  icon: React.ComponentType<LucideProps>;
}

export default function BudgetCard({ title, allocated, spent, icon: Icon }: BudgetCardProps) {
  const percentage = allocated > 0 ? Math.min((spent / allocated) * 100, 100) : 0;
  const remaining = allocated - spent;
  const isOverBudget = spent > allocated;

  return (
    <div className="bg-card-background p-6 rounded-lg shadow-neon-sm border border-neon-green/30 hover:shadow-neon-md transition-shadow duration-300 flex flex-col">
      <div className="flex items-center mb-3">
        <Icon size={28} className="text-neon-green mr-3" />
        <h3 className="text-xl font-semibold text-gray-100 truncate">{title}</h3>
      </div>
      <div className="space-y-1 text-sm mb-3">
        <p className="text-gray-400">
          <span className="font-medium text-gray-300">${spent.toLocaleString()}</span> spent of 
          <span className="font-medium text-gray-300"> ${allocated.toLocaleString()}</span>
        </p>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3.5 mb-1 relative overflow-hidden">
        <div
          className={`h-3.5 rounded-full transition-all duration-500 ease-out ${isOverBudget ? 'bg-red-500 animate-pulse' : 'bg-neon-green'}`}
          style={{ width: `${isOverBudget ? 100 : percentage}%` }}
        />
      </div>
      <p className={`text-xs font-medium mt-auto pt-2 ${isOverBudget ? 'text-red-400' : 'text-gray-400'}`}>
        {isOverBudget
          ? `$${Math.abs(remaining).toLocaleString()} over budget`
          : `$${remaining.toLocaleString()} remaining`}
      </p>
    </div>
  );
}
