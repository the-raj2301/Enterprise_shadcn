import { APIProvider, Map, AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";

interface StyledMapProps {
  position: { lat: number; lng: number };
  size: { width: string; height: string };
}

const StyledMap: React.FC<StyledMapProps> = ({ position, size }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [InfoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = useCallback(() => setInfoWindowShown((isShown) => !isShown), []);
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={size}
        defaultCenter={position}
        defaultZoom={12}
        gestureHandling="greedy"
        disableDefaultUI={false}
        zoomControl={true}
        mapTypeControl={true}
        streetViewControl={false}
        fullscreenControl={true}
        mapId={import.meta.env.VITE_GOOGLE_MAPS_API_ID}
      />
      <AdvancedMarker ref={markerRef} position={position} title="Mantik Enterprise" onClick={handleMarkerClick} />
      {InfoWindowShown && (
        <InfoWindow anchor={marker} position={position} onClose={handleClose}>
          <h1 className="text-black text-lg md:text-xl font-bold ">MANTIK ENTERPRISES</h1>
          <p className="text-gray-900 mb-4">
            Unit No: 1, Ghaswala Estate, <br />
            Swami Vivekananda Rd,
            <br />
            Opp. 24 Karat, Jogeshwari West, <br />
            Mumbai - 400102
          </p>
          <a
            className="inline-flex items-center px-4 py-2 text-sm font-normal text-white bg-gray-600 rounded-md hover:bg-gray-800"
            href="https://www.google.com/maps?ll=19.140937,72.843017&z=21.7895&t=m&hl=en-GB&gl=US&mapclient=apiv3&cid=17598214390912717076"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Location on Map
          </a>
        </InfoWindow>
      )}
    </APIProvider>
  );
};

export default StyledMap;
