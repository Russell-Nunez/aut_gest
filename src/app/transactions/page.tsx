// src/app/transactions/page.tsx
'use client';

import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'; // Icons for income/expense

const transactionsData = [
  { id: 'txn1', date: '2024-07-28', description: 'Salary Deposit - July', category: 'Income', amount: 5200.00, type: 'income' as const },
  { id: 'txn2', date: '2024-07-27', description: 'Supermarket "Neon Foods"', category: 'Groceries', amount: -85.60, type: 'expense' as const },
  { id: 'txn3', date: '2024-07-26', description: 'Monthly Rent Payment', category: 'Housing', amount: -1800.00, type: 'expense' as const },
  { id: 'txn4', date: '2024-07-25', description: 'Electricity Bill', category: 'Utilities', amount: -75.20, type: 'expense' as const },
  { id: 'txn5', date: '2024-07-24', description: 'Client Payment - Project X', category: 'Freelance', amount: 850.00, type: 'income' as const },
  { id: 'txn6', date: '2024-07-23', description: 'Dinner at "The Cyber Chef"', category: 'Food', amount: -62.00, type: 'expense' as const },
  { id: 'txn7', date: '2024-07-22', description: 'Online Course Subscription', category: 'Education', amount: -29.99, type: 'expense' as const },
  { id: 'txn8', date: '2024-07-21', description: 'Stock Dividend', category: 'Investment', amount: 120.50, type: 'income' as const },
  { id: 'txn9', date: '2024-07-20', description: 'New VR Headset', category: 'Entertainment', amount: -399.00, type: 'expense' as const },
  { id: 'txn10', date: '2024-07-19', description: 'Gasoline for Hovercar', category: 'Transport', amount: -45.30, type: 'expense' as const },
];

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-neon-green animate-subtle-glow">Transaction History</h1>

      <div className="bg-card-background p-4 sm:p-6 rounded-lg shadow-neon-md border border-neon-green/30 overflow-x-auto">
        <table className="w-full min-w-[600px] text-left"> {/* min-w ensures table has a base width for scrolling */}
          <thead>
            <tr className="border-b-2 border-neon-green/50">
              <th className="p-3 text-sm font-semibold text-neon-green uppercase tracking-wider">Date</th>
              <th className="p-3 text-sm font-semibold text-neon-green uppercase tracking-wider">Description</th>
              <th className="p-3 text-sm font-semibold text-neon-green uppercase tracking-wider">Category</th>
              <th className="p-3 text-sm font-semibold text-neon-green uppercase tracking-wider text-right">Amount</th>
              <th className="p-3 text-sm font-semibold text-neon-green uppercase tracking-wider text-center">Type</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction) => (
              <tr key={transaction.id} className="border-b border-neon-green/20 hover:bg-neon-green/10 transition-colors duration-150 group"> {/* Added group for potential group-hover on badge */}
                <td className="p-3 text-gray-300 text-sm">{transaction.date}</td>
                <td className="p-3 text-gray-200 font-medium">{transaction.description}</td>
                <td className="p-3 text-gray-400 text-sm">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300 group-hover:bg-gray-600">
                    {transaction.category}
                  </span>
                </td>
                <td className={`p-3 font-semibold text-sm text-right ${
                    transaction.type === 'income' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {transaction.type === 'income' ? '+' : ''}{transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </td>
                <td className="p-3 text-center">
                  {transaction.type === 'income' ? (
                    <ArrowUpCircle size={20} className="text-green-400 inline-block" />
                  ) : (
                    <ArrowDownCircle size={20} className="text-red-400 inline-block" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Optional: Add pagination controls here */}
    </div>
  );
}
