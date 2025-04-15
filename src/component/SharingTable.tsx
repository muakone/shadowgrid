import React from "react";
import { Link } from "lucide-react";

const SharingTable = ({ data }) => (
  <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl mb-8">
    <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
      <Link className="text-yellow-400 w-4 h-4" /> Energy Distribution Table
    </h2>

    <div className="overflow-x-auto md:overflow-y-hidden overflow-y-auto max-h-[420px]">
      <table className="w-full min-w-[500px] text-sm">
        <thead className="text-gray-400 text-left border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
          <tr>
            <th className="py-2 pr-4">From</th>
            <th className="py-2 pr-4">To</th>
            <th className="py-2 pr-4">Allocated (kWh)</th>
            <th className="py-2 pr-4">Demand (kWh)</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-b border-gray-800">
              <td className="py-2 pr-4">{item.from}</td>
              <td className="pr-4">{item.to}</td>
              <td className="pr-4">{item.allocated}</td>
              <td className="pr-4">{item.demand}</td>
              <td className={item.satisfied ? "text-green-400" : "text-red-400"}>
                {item.satisfied ? "Satisfied" : "Undersupplied"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SharingTable;
