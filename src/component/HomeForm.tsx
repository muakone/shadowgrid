import React, { useState, useEffect } from "react";

const orientations = ["North", "South", "East", "West"];

interface Props {
  onAddHome: (home: any) => void;
  clickedCoord: { lat: number; lng: number } | null;
}

const HomeForm: React.FC<Props> = ({ onAddHome, clickedCoord }) => {
  const [form, setForm] = useState({
    name: "",
    panelSize: "",
    orientation: "South",
  });

  useEffect(() => {
    if (clickedCoord) {
      setForm({
        name: "",
        panelSize: "",
        orientation: "South",
      });
    }
  }, [clickedCoord]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clickedCoord) return;

    const homeData = {
      ...form,
      latlng: clickedCoord,
    };

    onAddHome(homeData);
    setForm({ name: "", panelSize: "", orientation: "South" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold text-yellow-400">Add Home</h2>

      {!clickedCoord && (
        <p className="text-sm text-gray-400">
          Click a location on the map to begin.
        </p>
      )}

      <div className="space-y-2">
        <label className="block text-sm text-gray-300">Home Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-gray-300">Panel Size (kW)</label>
        <input
          type="number"
          value={form.panelSize}
          onChange={(e) => setForm({ ...form, panelSize: e.target.value })}
          required
          className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-gray-300">Roof Orientation</label>
        <select
          value={form.orientation}
          onChange={(e) => setForm({ ...form, orientation: e.target.value })}
          className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
        >
          {orientations.map((dir) => (
            <option key={dir} value={dir}>
              {dir}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded mt-4 transition"
      >
        Add Home
      </button>
    </form>
  );
};

export default HomeForm;
