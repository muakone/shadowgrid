import React, { useEffect, useState } from "react";
import BillingTable from "../component/BillingTable";
import BillingFilter from "../component/BillingFilter";
import { getBillingData } from "../utils/fetchBilling";
import { Download } from "lucide-react";
import { downloadBillingAsPDF } from "../component/ExportBilling";
import BillingSummaryBox from "../component/BillingSummaryBox";
import SmartSuggestionsBox from "../component/SmartSuggestion";

const BillingPage = () => {
  const [filter, setFilter] = useState<"daily" | "weekly" | "monthly">("daily");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBilling = async () => {
    setLoading(true);
    const res = await getBillingData(filter);
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchBilling();
  }, [filter]);

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-10 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-yellow-400">Billing Overview</h1>
        <button
          onClick={() => downloadBillingAsPDF(data, filter)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md text-sm shadow-md cursor-pointer hover:text-white transition max-w-fit"
        >
          <Download className="w-4 h-4" />
          Export PDF
        </button>
      </div>

      <BillingFilter filter={filter} setFilter={setFilter} />

      {loading ? (
        <p className="text-gray-400 mt-6">Loading billing data...</p>
      ) : (
        <BillingTable data={data} />
      )}
      <BillingSummaryBox data={data} />
      <SmartSuggestionsBox data={data} />
    </main>
  );
};

export default BillingPage;
