// src/app/investments/page.tsx
'use client';
import LineChartNeon from '@/components/charts/LineChartNeon'; // Adjust path
import { Briefcase, TrendingUp, DollarSign, PlusCircle } from 'lucide-react'; // Icons

const portfolioData = [
  { xLabel: 'Jan', yValue: 10000 }, { xLabel: 'Feb', yValue: 10500 },
  { xLabel: 'Mar', yValue: 10200 }, { xLabel: 'Apr', yValue: 11000 },
  { xLabel: 'May', yValue: 11500 }, { xLabel: 'Jun', yValue: 12000 },
  { xLabel: 'Jul', yValue: 11800 }, { xLabel: 'Aug', yValue: 12500 },
  { xLabel: 'Sep', yValue: 13000 }, { xLabel: 'Oct', yValue: 12850 },
  { xLabel: 'Nov', yValue: 13500 }, { xLabel: 'Dec', yValue: 14200 },
];

const assetBreakdown = [
    { name: "CyberStocks Inc.", value: 5600, icon: TrendingUp, change: "+5.2%" },
    { name: "RoboBonds Corp.", value: 3200, icon: DollarSign, change: "+1.5%" },
    { name: "FutureTech Crypto", value: 5400, icon: Briefcase, change: "-2.1%" },
];

export default function InvestmentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-neon-green animate-subtle-glow">Investment Portfolio</h1>
         <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-neon-green text-black hover:bg-opacity-80 transition-all duration-200 font-semibold shadow-neon-sm hover:shadow-neon-md">
          <PlusCircle size={20} />
          <span>New Investment</span>
        </button>
      </div>
      
      <div>
        <LineChartNeon title="Portfolio Value Over Time" data={portfolioData} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-neon-green/90 mb-4">Asset Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assetBreakdown.map((asset) => (
            <div key={asset.name} className="bg-card-background p-6 rounded-lg shadow-neon-sm border border-neon-green/30 hover:shadow-neon-md transition-shadow duration-300">
              <div className="flex items-center mb-2">
                <asset.icon size={24} className="text-neon-green mr-3" />
                <h3 className="text-lg font-semibold text-gray-100">{asset.name}</h3>
              </div>
              <p className="text-2xl font-bold text-gray-200">${asset.value.toLocaleString()}</p>
              <p className={`text-sm font-medium ${asset.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {asset.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
