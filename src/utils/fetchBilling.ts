import { BASE_URL } from "../config/Api";

export const getBillingData = async (filter: "daily" | "weekly" | "monthly") => {
    try {
      const simulated = localStorage.getItem("simulationResult");
      if (!simulated) throw new Error("No simulation data available.");
  
      const homes = JSON.parse(simulated);
  
      const res = await fetch(`${BASE_URL}/billing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ homes, filter }),
      });
  
      if (!res.ok) throw new Error("Failed to fetch billing data");
  
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Billing Fetch Error:", err);
      return [];
    }
  };