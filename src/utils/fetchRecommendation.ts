export const getRecommendations = async () => {
    const homes = JSON.parse(localStorage.getItem("simulationResult") || "[]");
  
    const response = await fetch("http://localhost:5000/api/recommendations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(homes),
    });
  
    const data = await response.json();
    console.log("Recommendations data:", data);
    return data;
  };
  