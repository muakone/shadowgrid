import React from "react";
import { Share, FileDown } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-800 pb-4">
      <h1 className="text-2xl font-bold text-yellow-400">🔗 Energy Sharing Recommendations</h1>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded hover:bg-gray-800">
          <FileDown className="w-4 h-4" /> Export CSV
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded hover:bg-gray-800">
          <Share className="w-4 h-4" /> Share Plan
        </button>
      </div>
    </div>
  );
};

export default Topbar;
