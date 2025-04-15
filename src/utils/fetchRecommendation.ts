import { BASE_URL } from "../config/Api";

export const getRecommendations = async () => {
    const homes = JSON.parse(localStorage.getItem("simulationResult") || "[]");
  
    const response = await fetch(`${BASE_URL}/recommendations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(homes),
    });
  
    const data = await response.json();
    console.log("Recommendations data:", data);
    return data;
  };
  