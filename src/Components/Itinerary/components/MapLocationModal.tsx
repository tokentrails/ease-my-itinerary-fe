import { motion } from "motion/react";
import { X, MapPin } from "lucide-react";
import { getGoogleMapsLocationUrl } from "../../../utils/googleMapsHelper";

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
  const mapsUrl = getGoogleMapsLocationUrl(
    location.latitude,
    location.longitude,
    location.name
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0  bg-opacity-40 backdrop-blur-xs z-40"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 w-[90%] max-w-2xl h-[90] max-h-[80vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
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

        {/* Map Container */}
        <div className="flex-1 overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_API_KEY}&q=${location.latitude},${location.longitude}`}
          />
        </div>

        {/* Footer Actions */}
        <div className="p-4 md:p-6 border-t border-gray-200 bg-gray-50 flex gap-3">
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
    </>
  );
};

export default MapLocationModal;
