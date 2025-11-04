import { motion } from "motion/react";
import { X, MapPin } from "lucide-react";
import { getGoogleMapsLocationUrl } from "../../../utils/googleMapsHelper";
import { createPortal } from "react-dom";
import { useState } from "react";

interface MapLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: {
    name?: string;
    address?: string;
    latitude: number;
    longitude: number;
  };
}

const MapLocationModal = ({
  isOpen,
  onClose,
  location,
}: MapLocationModalProps) => {
  const [isMapLoading, setIsMapLoading] = useState(true);
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY || "";

  const mapsUrl = getGoogleMapsLocationUrl(
    location.latitude,
    location.longitude,
    location.name
  );

  if (!isOpen) return null;

  const content = (
    <div
    className="flex justify-center  items-center border w-[100vw] h-[100vh]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0  bg-opacity-50 backdrop-blur-sm z-1000"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1000 w-[90vw] h-[90vh] max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-lg shadow-2xl"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#eaf3ff" }}
            >
              <MapPin size={20} color="#2093EF" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-gray-900">
                {location.name || "Location"}
              </h2>
              {location.address && (
                <p className="text-sm text-gray-600">{location.address}</p>
              )}
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </motion.button>
        </div>

        <div className="flex-1 overflow-hidden w-full relative">
          {isMapLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-12 h-12">
                  <motion.div
                    className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <p className="text-gray-600 font-medium">Loading map...</p>
              </div>
            </div>
          )}
          {apiKey ? (
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${location.latitude},${location.longitude}`}
              title={location.name || "Location Map"}
              onLoad={() => setIsMapLoading(false)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <p className="text-gray-600 font-medium">Map not available</p>
                <p className="text-sm text-gray-500">API key not configured</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 flex-col md:flex-row border-t border-gray-200 bg-gray-50 flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
          >
            Close
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2"
            style={{ backgroundColor: "#2093EF" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#1678D4";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#2093EF";
            }}
          >
            <MapPin size={18} />
            Open in Google Maps
          </motion.a>
        </div>
      </motion.div>
    </div>
  );

  return createPortal(content, document.body);
};

export default MapLocationModal;
