import { BASE_URL } from "../config/Api";
import { HomeInput } from "../types/Home";

export const SendToSimulationApi = async (home: HomeInput[]) => {
    try {
      const response = await fetch(`${BASE_URL}/simulate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(home),
      });
  
      if (!response.ok) throw new Error("Simulation Failed");
  
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error sending data to simulation API:", err);
      return [];
    }
  };
  