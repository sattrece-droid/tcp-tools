import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// FIX: Leaflet's default icon path breaks in Vite — must import assets
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY;

export default function GeoMap({ lat, lon, label }) {
  if (!lat || !lon) return (
    <div className="h-96 w-full rounded-xl bg-slate-800 animate-pulse flex items-center justify-center text-slate-500">
      Loading Map...
    </div>
  );

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={11}
      className="h-96 w-full rounded-xl z-0 shadow-lg shadow-black/20"
    >
      <TileLayer
        url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`}
        attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[lat, lon]}>
        <Popup>{label}</Popup>
      </Marker>
    </MapContainer>
  );
}
