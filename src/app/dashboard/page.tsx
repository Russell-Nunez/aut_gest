'use client'; // If any client-side interactions or hooks are directly on this page

import DashboardLayout from '@/components/dashboard/DashboardLayout';
import SummaryCard from '@/components/dashboard/widgets/SummaryCard';
import BarChart from '@/components/dashboard/widgets/BarChart';
import PieChart from '@/components/dashboard/widgets/PieChart';
import RecentTransactionsTable from '@/components/dashboard/widgets/RecentTransactionsTable';
import { DollarSign, TrendingUp, TrendingDown, Target as TargetIcon } from 'lucide-react';

// Mock Data

// Bar chart data with actual color string for Tailwind
const barChartData = [
  { label: 'Food', value: 300, color: 'bg-red-400' },
  { label: 'Transport', value: 150, color: 'bg-blue-400' },
  { label: 'Utilities', value: 200, color: 'bg-yellow-400' },
  { label: 'Entertainment', value: 250, color: 'bg-green-400' },
  { label: 'Health', value: 100, color: 'bg-purple-400' },
];

// Pie chart data with actual hex color strings
const pieChartData = [
  { label: 'Groceries', value: 40, color: '#3b82f6' }, // theme primary or specific blue-500
  { label: 'Housing', value: 25, color: '#ef4444' },   // e.g., red-500
  { label: 'Entertainment', value: 15, color: '#f59e0b' },// e.g., amber-500
  { label: 'Utilities', value: 10, color: '#10b981' },  // e.g., emerald-500
  { label: 'Other', value: 10, color: '#6366f1' },    // e.g., indigo-500
];

const transactionsData = [
  { id: '1', date: '2024-07-15', description: 'Salary Deposit', amount: 3000, type: 'income' as const },
  { id: '2', date: '2024-07-14', description: 'Grocery Store "The Fresh Market"', amount: 75.50, type: 'expense' as const },
  { id: '3', date: '2024-07-13', description: 'Streaming Service Renewal', amount: 15.00, type: 'expense' as const },
  { id: '4', date: '2024-07-12', description: 'Payment for Design Services', amount: 500, type: 'income' as const },
  { id: '5', date: '2024-07-11', description: 'Restaurant "The Italian Place"', amount: 60.00, type: 'expense' as const },
  { id: '6', date: '2024-07-10', description: 'Electricity Bill', amount: 95.00, type: 'expense' as const },
];


export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome Back, User!</h1>
          <p className="text-secondary">Here's your financial overview for today.</p>
        </div>

        {/* Summary Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard title="Total Balance" value="$15,230.50" icon={DollarSign} iconBgColorClass="bg-green-500" />
          <SummaryCard title="Income (This Month)" value="$4,800.00" icon={TrendingUp} iconBgColorClass="bg-sky-500" />
          <SummaryCard title="Expenses (This Month)" value="$2,150.75" icon={TrendingDown} iconBgColorClass="bg-red-500" />
          <SummaryCard title="Savings Goal" value="$7.5K / $10K" icon={TargetIcon} iconBgColorClass="bg-indigo-500" />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BarChart title="Expenses by Category (Monthly)" data={barChartData} />
          </div>
          <div className="lg:col-span-2">
            <PieChart title="Expense Distribution" data={pieChartData} />
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div>
          <RecentTransactionsTable title="Recent Transactions" transactions={transactionsData} />
        </div>
      </div>
    </DashboardLayout>
  );
}
