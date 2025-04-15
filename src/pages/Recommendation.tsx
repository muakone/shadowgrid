import React, { useEffect, useState } from "react";
import SharingTable from "../component/SharingTable";
import SuggestionBox from "../component/SuggestionNotice";
import { getRecommendations } from "../utils/fetchRecommendation";
import { Bolt } from "lucide-react";
import ExportCSVButton from "../component/ExportCsv";
import { Link } from "react-router-dom";

const RecommendationsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getRecommendations();
      setData(res);
      setLoading(false);
    };
    fetchData();
  }, []);

  const noData = !loading && (!data || data.length === 0)

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10 font-sans">
      <h1 className="text-yellow-400 text-2xl font-bold mb-4 flex items-center gap-2">
        <Bolt className="w-5 h-5" /> Recommendations
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading recommendations...</p>
      ) : noData ? (
        <div className="mt-10 text-center text-gray-400 bg-gray-800 border border-gray-700 p-6 rounded-lg">
          <p className="mb-3">
           No recommendation data found. You need to run a simulation first.
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md text-sm hover:bg-yellow-500 hover:text-white transition"
          >
            Go to Dashboard
          </Link>
        </div>
      ) : (
        <>
          <ExportCSVButton data={data} />
          <SharingTable data={data} />
          <SuggestionBox recommendations={data} />
        </>
      )}
    </main>
  );
};

export default RecommendationsPage;
