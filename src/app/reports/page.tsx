// src/app/reports/page.tsx
'use client';
import BarChartNeon from '@/components/charts/BarChartNeon'; // Adjust path

const monthlyExpensesData = [
  { label: 'Jan', value: 2800 }, { label: 'Feb', value: 3100 },
  { label: 'Mar', value: 2950 }, { label: 'Apr', value: 3300 },
  { label: 'May', value: 3050 }, { label: 'Jun', value: 3400 },
  { label: 'Jul', value: 3200 }, { label: 'Aug', value: 2900 },
];

// Example for another chart or data display
const categorySpendingData = [
    { label: 'Food', value: 650 }, { label: 'Housing', value: 1200 },
    { label: 'Utilities', value: 200 }, { label: 'Transport', value: 150 },
    { label: 'Entertainment', value: 300 }, { label: 'Other', value: 400 },
];


export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-neon-green animate-subtle-glow">Financial Reports</h1>
      
      <div>
        <BarChartNeon title="Monthly Expenses" data={monthlyExpensesData} />
      </div>

      {/* You can add more report sections or charts here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card-background p-6 rounded-lg shadow-neon-md border border-neon-green/30">
            <h3 className="text-xl font-semibold mb-4 text-neon-green">Spending by Category (YTD)</h3>
            {/* Placeholder for another chart or data view */}
            <ul className="space-y-2 text-gray-300">
                {categorySpendingData.map(cat => (
                    <li key={cat.label} className="flex justify-between">
                        <span>{cat.label}:</span>
                        <span className="font-semibold">${cat.value.toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="bg-card-background p-6 rounded-lg shadow-neon-md border border-neon-green/30">
            <h3 className="text-xl font-semibold mb-4 text-neon-green">Income vs. Expense Trend</h3>
            <p className="text-gray-400">
                Placeholder for income vs. expense line chart or summary data.
                This section can illustrate the trend of your income compared to your expenses over time,
                helping to identify patterns and make informed financial decisions.
            </p>
        </div>
      </div>
    </div>
  );
}
