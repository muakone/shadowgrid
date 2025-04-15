import React from "react";
import { Home, Eye, Sun } from "lucide-react";
import { HomeResult } from "../types/Home";

const HomeSidebar = ({
  homes,
  simulationRun,
}: {
  homes: HomeResult[];
  simulationRun: boolean;
}) => {
  return (
    <aside className="hidden md:block w-[320px] bg-gray-900 border-l border-gray-800 p-6 overflow-y-auto">
      <div className="flex items-center gap-2 mb-4 ml-12">
        <Home className="text-yellow-400 w-5 h-5" />
        <h2 className="text-yellow-400 text-xl font-bold">Homes Added</h2>
      </div>

      <ul className="space-y-3">
        {homes.map((home, i) => (
          <li
            key={i}
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700"
          >
            <div className="flex items-center gap-2 text-yellow-300 font-semibold">
              <Eye className="w-4 h-4" /> {home.name}
            </div>

            <p className="text-xs text-gray-400">
              {home.panelSize ? `Panel: ${home.panelSize}kW – ` : ""}
              {home.orientation}
            </p>

            <p className="text-xs text-gray-400">
              Daily Use: {home.dailyConsumption} kWh/day
            </p>

            {simulationRun && (
              <>
                <p className="text-xs text-gray-400">
                  Power Received: {home.production} kWh/day
                </p>

                <p className="text-xs text-gray-400">
                  Estimated Bill: ₦{(home.production * 500).toFixed(2)}
                </p>

                <p
                  className={`text-xs ${
                    home.netEnergy < 0 ? "text-red-400" : "text-green-400"
                  }`}
                >
                  Net Energy: {home.netEnergy} kWh
                </p>
              </>
            )}

            {home.role && (
              <p
                className={`text-xs mt-1 ${
                  home.role === "served" ? "text-green-400" : "text-red-400"
                }`}
              >
                {home.role === "served" ? "Served" : "Under-supplied"}
              </p>
            )}

            {home.isSolarHub && (
              <p className="text-xs text-yellow-400 font-semibold flex items-center gap-1">
                <Sun className="w-3 h-3" /> Hub
              </p>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default HomeSidebar;
