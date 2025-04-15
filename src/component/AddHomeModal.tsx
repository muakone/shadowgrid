import React from "react";
import { Plus } from "lucide-react";

const AddHomeModal = ({ form, setForm, onCancel, onSubmit }) => {
  return (
    <div className="absolute inset-0 z-50 bg-black/50 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="bg-gray-900 p-6 rounded-xl border border-gray-700 w-[320px] space-y-4"
      >
        <h3 className="text-lg font-bold text-yellow-400">Add Home</h3>

        <div>
          <label className="block text-sm text-gray-300">Home Name</label>
          <input
            type="text"
            required
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300">Panel Size (kW)</label>
          <input
            type="number"
            required
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
            value={form.panelSize}
            onChange={(e) => setForm({ ...form, panelSize: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300">Orientation</label>
          <select
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
            value={form.orientation}
            onChange={(e) =>
              setForm({ ...form, orientation: e.target.value as "North" | "South" | "East" | "West" })
            }
          >
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-300">Daily Consumption (kWh)</label>
          <input
            type="number"
            required
            step="0.1"
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
            value={form.dailyConsumption}
            onChange={(e) => setForm({ ...form, dailyConsumption: e.target.value })}
          />
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHomeModal;
