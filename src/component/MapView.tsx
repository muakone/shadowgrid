import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { Bolt, Loader, Sun } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const FitToHomes = ({ homes }) => {
  const map = useMap();

  useEffect(() => {
    if (homes.length > 0) {
      const bounds = homes.map((h) => [h.latlng.lat, h.latlng.lng]);
      map.fitBounds(bounds, { padding: [50, 50] }); 
    }
  }, [homes, map]);

  return null;
};

const ClickCapture = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });
  return null;
};

const producerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const consumerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const HomeMarker = ({ home }) => {
  const icon = home.role === "producer" ? producerIcon : consumerIcon;

  return (
    <Marker position={home.latlng}>
      <Popup>
        <strong>{home.name}</strong>
        <br />
        {home.panelSize} kW - {home.orientation}
        <br />
        {home.role === "served" ? "Served" : "Under-supplied"}
        {home.isSolarHub && (
          <p className="text-yellow-400 font-semibold mt-1"><Sun className="w-4 h-4" /> Solar Hub</p>
        )}
      </Popup>
    </Marker>
  );
};

const MapView = ({
  homes,
  onMapClick,
  runSimulation,
  simulationRun,
  loading,
}) => {
  return (
    <section className="flex-1 relative">
      <MapContainer
        center={[6.5244, 3.3792]}
        zoom={13}
        className="h-full w-full z-10"
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://www.esri.com/">Esri</a> & contributors'
        />
        {/* <ClickCapture onMapClick={onMapClick} /> */}
        <FitToHomes homes={homes} />
        {homes.map((home, i) => (
          <HomeMarker key={i} home={home} />
        ))}
      </MapContainer>

      {!simulationRun && homes.length > 0 && (
  <div className="absolute bottom-6 left-6 md:top-6 md:right-6 md:left-auto z-30">
    <button
      onClick={runSimulation}
      disabled={loading}
      className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-xl shadow-lg transition cursor-pointer"
    >
      {loading ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <Bolt className="w-5 h-5" />
      )}
      {loading ? "Simulating..." : "Run Simulation"}
    </button>
  </div>
)}

    </section>
  );
};

export default MapView;
