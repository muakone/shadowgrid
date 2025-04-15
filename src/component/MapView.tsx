import React, { useEffect, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Bolt, Loader, Sun } from "lucide-react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 6.5244,
  lng: 3.3792,
};

const MapView = ({
  homes,
  onMapClick,
  runSimulation,
  simulationRun,
  loading,
}) => {
  const mapRef = useRef(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  // useEffect(() => {
  //   if (homes.length >= 2 && mapRef.current) {
  //     const bounds = new google.maps.LatLngBounds();
  //     for (const h of homes) {
  //       if (h.latlng?.lat && h.latlng?.lng) {
  //         bounds.extend(h.latlng);
  //       }
  //     }

  //     if (!bounds.isEmpty()) {
  //       mapRef.current.fitBounds(bounds, {
  //         top: 40,
  //         bottom: 40,
  //         left: 40,
  //         right: 40,
  //       });
  //     }
  //   }
  // }, [homes]);

  const handleClick = (e) => {
    const latlng = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    onMapClick(latlng);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <section className="flex-1 relative">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={homes[0]?.latlng || defaultCenter}
        zoom={20}
        onClick={handleClick}
        onLoad={(map) => (mapRef.current = map)}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        {homes.map((home, i) => (
          <Marker
            key={i}
            position={home.latlng}
            icon={{
              url: home.isSolarHub
                ? "/marker-icon-green.png"
                : "/marker-icon-blue.png",
              scaledSize: new window.google.maps.Size(30, 45),
            }}
          />
        ))}
      </GoogleMap>

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
