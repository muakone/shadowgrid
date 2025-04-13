import React from "react";
import { MessageSquare } from "lucide-react";

const SuggestionBox = ({ recommendations }) => {
  const unsatisfied = recommendations.filter((r) => !r.satisfied);
  const tips = [];

  if (unsatisfied.length > 0) {
    tips.push("Some homes are still undersupplied.");
    tips.push("Consider increasing the panel size on solar hubs.");
    tips.push("Add another hub if only one exists.");
  } else {
    tips.push("All homes are satisfied with current distribution.");
    tips.push("You can save costs by reducing oversupply margin.");
  }

  return (
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-yellow-400" /> Suggestions
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionBox;
