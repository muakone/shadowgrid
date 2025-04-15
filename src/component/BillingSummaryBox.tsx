import React from "react";
import { GaugeCircle, Wallet, Home } from "lucide-react";

interface BillingSummaryBoxProps {
  data: {
    name: string;
    dailyConsumption: number;
    bill: number;
  }[];
}

const BillingSummaryBox: React.FC<BillingSummaryBoxProps> = ({ data }) => {
  const totalConsumption = data.reduce((sum, h) => sum + h.dailyConsumption, 0);
  const totalBill = data.reduce((sum, h) => sum + h.bill, 0);
  const homeCount = data.length;

  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-8 shadow-md text-sm text-gray-300 grid grid-cols-1 sm:grid-cols-3 gap-6 border border-gray-700">
      <div className="flex items-center gap-3">
        <GaugeCircle className="w-5 h-5 text-yellow-400" />
        <div>
          <p className="text-yellow-400 text-xs font-semibold">Total Consumption</p>
          <p className="text-white text-lg font-bold">{totalConsumption.toFixed(2)} kWh</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Wallet className="w-5 h-5 text-yellow-400" />
        <div>
          <p className="text-yellow-400 text-xs font-semibold">Total Grid Bill</p>
          <p className="text-white text-lg font-bold">₦{totalBill.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Home className="w-5 h-5 text-yellow-400" />
        <div>
          <p className="text-yellow-400 text-xs font-semibold">Homes Billed</p>
          <p className="text-white text-lg font-bold">{homeCount}</p>
        </div>
      </div>
    </div>
  );
};

export default BillingSummaryBox;
