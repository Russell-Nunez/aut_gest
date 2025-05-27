// src/app/budgets/page.tsx
'use client';
import BudgetCard from '@/components/budgets/BudgetCard'; // Adjust path
import { ShoppingCart, Home, Zap, Film, Car, Stethoscope, PlusCircle } from 'lucide-react'; // Icons

const budgetData = [
  { title: 'Groceries & Food', allocated: 800, spent: 650, icon: ShoppingCart },
  { title: 'Housing (Rent/Mortgage)', allocated: 2000, spent: 2000, icon: Home },
  { title: 'Utilities (Energy, Water)', allocated: 300, spent: 275, icon: Zap },
  { title: 'Entertainment & Leisure', allocated: 400, spent: 480, icon: Film }, // Example of over budget
  { title: 'Transportation', allocated: 250, spent: 180, icon: Car },
  { title: 'Healthcare & Wellness', allocated: 200, spent: 75, icon: Stethoscope },
];

export default function BudgetsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-neon-green animate-subtle-glow">Monthly Budgets</h1>
        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-neon-green text-black hover:bg-opacity-80 transition-all duration-200 font-semibold shadow-neon-sm hover:shadow-neon-md">
          <PlusCircle size={20} />
          <span>New Budget</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {budgetData.map((budget) => (
          <BudgetCard
            key={budget.title}
            title={budget.title}
            allocated={budget.allocated}
            spent={budget.spent}
            icon={budget.icon}
          />
        ))}
      </div>
      {/* Optional: Add a section for budget summary or tips */}
    </div>
  );
}
