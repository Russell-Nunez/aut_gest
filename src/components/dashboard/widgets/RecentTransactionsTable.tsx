interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

interface RecentTransactionsTableProps {
  transactions: Transaction[];
  title: string;
}

export default function RecentTransactionsTable({ transactions, title }: RecentTransactionsTableProps) {
  return (
    <div className="bg-card text-card-foreground p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-sm font-semibold text-secondary py-3 px-2">Date</th>
              <th className="text-left text-sm font-semibold text-secondary py-3 px-2">Description</th>
              <th className="text-left text-sm font-semibold text-secondary py-3 px-2">Amount</th>
              <th className="text-left text-sm font-semibold text-secondary py-3 px-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-secondary">
                  No transactions yet.
                </td>
              </tr>
            ) : (
              transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-border last:border-b-0 hover:bg-secondary/10 transition-colors">
                  <td className="py-3 px-2 text-sm">{tx.date}</td>
                  <td className="py-3 px-2 text-sm">{tx.description}</td>
                  <td className={`py-3 px-2 text-sm font-medium ${tx.type === 'income' ? 'text-accent' : 'text-red-500'}`}>
                    {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                  </td>
                  <td className="py-3 px-2 text-sm">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      tx.type === 'income' ? 'bg-accent/20 text-accent' : 'bg-red-500/20 text-red-500'
                    }`}>
                      {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
