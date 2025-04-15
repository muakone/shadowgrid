import React, { useEffect, useState } from "react";
import HomeSidebar from "../component/HomeSidebar";
import MapView from "../component/MapView";
import AddHomeModal from "../component/AddHomeModal";
import InsightsBox from "../component/InsightBox";
import { SendToSimulationApi } from "../utils/SendToSimulationApi";
import { estateData } from "../data/EstateData";
import { HomeInput } from "../types/Home";

const Dashboard = () => {
  const [homes, setHomes] = useState<HomeInput[]>([]);
  const [clickedCoord, setClickedCoord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    panelSize: "",
    orientation: "South",
  });
  const [simulationRun, setSimulationRun] = useState(false);

  useEffect(() => {
    setHomes(estateData);
  }, []);

  const handleMapClick = (latlng) => {
    setClickedCoord(latlng);
  };

  const handleFormSubmit = () => {
    const newHome = {
      ...form,
      panelSize: Number(form.panelSize),
      latlng: clickedCoord,
    };
    setHomes((prev) => [...prev, newHome]);
    setForm({ name: "", panelSize: "", orientation: "South" });
    setClickedCoord(null);
  };

  const runSimulation = async () => {
    setLoading(true);
    try {
      const results = await SendToSimulationApi(homes);
      setHomes(results);
      setSimulationRun(true);
      console.log(results, "simulation results");
      localStorage.setItem("simulationResult", JSON.stringify(results));
    } catch (err) {
      console.error("Error running simulation:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex h-screen overflow-hidden bg-gray-950 text-white font-sans">
      <HomeSidebar homes={homes} simulationRun={simulationRun} />
      <MapView
        homes={homes}
        onMapClick={handleMapClick}
        runSimulation={runSimulation}
        simulationRun={simulationRun}
        loading={loading}
      />
      {clickedCoord && (
        <AddHomeModal
          form={form}
          setForm={setForm}
          onCancel={() => setClickedCoord(null)}
          onSubmit={handleFormSubmit}
        />
      )}
      {simulationRun && <InsightsBox homes={homes} />}
    </main>
  );
};

export default Dashboard;
