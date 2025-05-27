// src/app/goals/page.tsx
'use client';
import GoalCard from '@/components/goals/GoalCard'; // Adjust path
import { ShieldCheck, SendToBack, HandMetal, Building, PlusCircle } from 'lucide-react';

const goalsData = [
  { title: 'Emergency Fund', targetAmount: 10000, currentAmount: 7500, icon: ShieldCheck, deadline: 'Dec 2024' },
  { title: 'Vacation to Neo-Kyoto', targetAmount: 5000, currentAmount: 1200, icon: SendToBack, deadline: 'Jun 2025' },
  { title: 'Upgrade Home Synth-System', targetAmount: 3000, currentAmount: 3000, icon: HandMetal, deadline: 'Achieved!' },
  { title: 'Down Payment for Sky-Loft', targetAmount: 75000, currentAmount: 18500, icon: Building, deadline: 'Dec 2026' },
];

export default function GoalsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-neon-green animate-subtle-glow">Financial Goals</h1>
        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-neon-green text-black hover:bg-opacity-80 transition-all duration-200 font-semibold shadow-neon-sm hover:shadow-neon-md">
          <PlusCircle size={20} />
          <span>New Goal</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goalsData.map((goal) => (
          <GoalCard
            key={goal.title}
            title={goal.title}
            targetAmount={goal.targetAmount}
            currentAmount={goal.currentAmount}
            icon={goal.icon}
            deadline={goal.deadline}
          />
        ))}
      </div>
    </div>
  );
}
