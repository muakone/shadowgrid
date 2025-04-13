import React from "react";
import { Info, Sun, Home, BatteryCharging, Users } from "lucide-react";

const InsightsBox = ({ homes }) => {
  const totalHomes = homes.length;
  const totalProduction = homes.reduce((sum, h) => sum + h.production, 0);
  const totalDemand = homes.reduce((sum, h) => sum + (h.dailyConsumption ?? 0), 0);
  const hubs = homes.filter((h) => h.isSolarHub);
  const served = homes.filter((h) => h.role === "served");

  return (
    <div className="absolute top-20 right-6 bg-gray-900 border border-gray-700 rounded-xl p-5 w-[300px] shadow-lg z-30 space-y-3">
      <div className="flex items-center gap-2 text-yellow-400 text-lg font-bold">
        <Info className="w-5 h-5" />
        Simulation Overview
      </div>

      <div className="text-sm text-gray-300 space-y-1">
        <p className="flex items-center gap-2">
          <Users className="w-4 h-4" /> Total Homes: {totalHomes}
        </p>
        <p className="flex items-center gap-2">
          <Sun className="w-4 h-4 text-yellow-400" /> Solar Hubs: {hubs.length}
        </p>
        <p className="flex items-center gap-2">
          <BatteryCharging className="w-4 h-4 text-green-400" />
          Energy Produced: {totalProduction.toFixed(2)} kWh
        </p>
        <p className="flex items-center gap-2">
          <Home className="w-4 h-4 text-blue-400" />
          Energy Needed: {totalDemand.toFixed(2)} kWh
        </p>
        <p className="flex items-center gap-2">
          Homes Served: {served.length}/{totalHomes}
        </p>
      </div>
    </div>
  );
};

export default InsightsBox;
