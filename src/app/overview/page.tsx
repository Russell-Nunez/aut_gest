// src/app/overview/page.tsx
'use client';
import PieChartNeon from '@/components/charts/PieChartNeon'; // Adjust path
import { PiggyBank, TrendingUp, TrendingDown, Wallet } from 'lucide-react'; // Example icons for summary cards

// Mock data for summary cards
const summaryStats = [
  { title: "Total Balance", value: "$25,730.50", icon: Wallet, color: "text-neon-green" },
  { title: "Monthly Income", value: "$6,850.00", icon: TrendingUp, color: "text-blue-400" }, // Using a different color for variety
  { title: "Monthly Expenses", value: "$3,120.75", icon: TrendingDown, color: "text-red-400" }, // Using a different color for variety
  { title: "Savings Rate", value: "22%", icon: PiggyBank, color: "text-yellow-400" }, // Using a different color for variety
];

// Renamed 'name' to 'label' to match PieChartNeon's expected data structure
const expenseData = [
  { label: 'Housing', value: 1200, color: 'rgba(255, 99, 132, 0.8)' }, // Red, increased opacity
  { label: 'Food & Groceries', value: 450, color: 'rgba(54, 162, 235, 0.8)' }, // Blue, increased opacity
  { label: 'Utilities', value: 200, color: 'rgba(255, 206, 86, 0.8)' }, // Yellow, increased opacity
  { label: 'Entertainment', value: 250, color: 'rgba(75, 192, 192, 0.8)' }, // Teal, increased opacity
  { label: 'Transport', value: 150, color: 'rgba(153, 102, 255, 0.8)' }, // Purple, increased opacity
  { label: 'Other', value: 300, color: 'rgba(255, 159, 64, 0.8)' }, // Orange, increased opacity
];

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-neon-green animate-subtle-glow">Financial Overview</h1>
      
      {/* Summary Cards Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {summaryStats.map(stat => (
          <div key={stat.title} className="bg-card-background p-6 rounded-lg shadow-neon-sm border border-neon-green/30 hover:shadow-neon-md transition-all duration-300 ease-in-out hover:border-neon-green">
            <div className="flex items-center space-x-4">
              <stat.icon size={32} className={`${stat.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div>
                <p className="text-sm text-secondary-text">{stat.title}</p> {/* Using --secondary-text variable */}
                <p className="text-2xl font-bold text-foreground">{stat.value}</p> {/* Using --foreground variable */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area with Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PieChartNeon title="Expense Breakdown (Monthly)" data={expenseData} size={300} />
        </div>
        <div className="bg-card-background p-6 rounded-lg shadow-neon-sm border border-neon-green/30">
          <h3 className="text-xl font-semibold mb-4 text-neon-green">Summary & Insights</h3>
          <p className="text-secondary-text mb-2"> {/* Using --secondary-text */}
            Welcome to your financial overview. This month, your expenses are primarily driven by housing.
          </p>
          <p className="text-secondary-text"> {/* Using --secondary-text */}
            Consider reviewing your entertainment and 'Other' categories for potential savings.
          </p>
          {/* More insights can be added here */}
        </div>
      </div>
    </div>
  );
}
