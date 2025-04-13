import React from "react";
import { Link } from "lucide-react";

const SharingTable = ({ data }) => (
  <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl mb-8">
    <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
      <Link className="text-yellow-400 w-4 h-4" /> Energy Distribution Table
    </h2>
    <table className="w-full text-sm">
      <thead className="text-gray-400 text-left border-b border-gray-700">
        <tr>
          <th className="py-2">From</th>
          <th>To</th>
          <th>Allocated (kWh)</th>
          <th>Demand (kWh)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i} className="border-b border-gray-800">
            <td className="py-2">{item.from}</td>
            <td>{item.to}</td>
            <td>{item.allocated}</td>
            <td>{item.demand}</td>
            <td className={item.satisfied ? "text-green-400" : "text-red-400"}>
              {item.satisfied ? "Satisfied" : "Undersupplied"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SharingTable;
