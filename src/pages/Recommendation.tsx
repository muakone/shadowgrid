import React, { useEffect, useState } from "react";
import SharingTable from "../component/SharingTable";
import SuggestionBox from "../component/SuggestionNotice";
import { getRecommendations } from "../utils/fetchRecommendation";
import { Bolt } from "lucide-react";

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

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10 font-sans">
      <h1 className="text-yellow-400 text-2xl font-bold mb-4 flex items-center gap-2">
        <Bolt className="w-5 h-5" /> Recommendations
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading recommendations...</p>
      ) : (
        <>
          <SharingTable data={data} />
          <SuggestionBox recommendations={data} />
        </>
      )}
    </main>
  );
};

export default RecommendationsPage;
