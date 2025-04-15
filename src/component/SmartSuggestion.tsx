import React from "react";
import { ArrowDown, Zap } from "lucide-react";

interface BillingItem {
  name: string;
  dailyConsumption: number;
  bill: number;
}

const SmartSuggestionsBox = ({ data }: { data: BillingItem[] }) => {
  const averageConsumption =
    data.reduce((sum, h) => sum + h.dailyConsumption, 0) / data.length;

  // Get homes with higher than average usage
  const topConsumers = data
    .filter((h) => h.dailyConsumption > averageConsumption)
    .sort((a, b) => b.dailyConsumption - a.dailyConsumption)
    .slice(0, 3); // limit to top 3 suggestions

  return (
    <div className="mt-10 p-6 rounded-lg bg-gray-800 border border-gray-700 shadow text-sm text-gray-300 overflow-auto max-h-[280px]">
      <h3 className="text-yellow-400 font-bold text-lg mb-3 flex items-center gap-2">
        <Zap className="w-4 h-4" />
        Smart Suggestions
      </h3>
      {topConsumers.length > 0 ? (
        <ul className="space-y-2">
          {topConsumers.map((home, i) => (
            <li key={i} className="flex items-center gap-3">
              <ArrowDown className="w-4 h-4 text-blue-400" />
              <span className="text-white font-semibold">{home.name}</span> –
              <span className="text-gray-400 ml-1">
                {home.dailyConsumption.toFixed(2)} kWh
              </span>{" "}
              •{" "}
              <span className="text-green-400">
                ₦{home.bill.toLocaleString()}
              </span>
              <span className="ml-2 text-sm text-gray-500 italic">
                (Consider reducing usage)
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">All homes are within normal range.</p>
      )}
    </div>
  );
};

export default SmartSuggestionsBox;
