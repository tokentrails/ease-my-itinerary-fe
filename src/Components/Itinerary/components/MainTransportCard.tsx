import React, { useState } from "react";
import { Clock, MapPin, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

interface MainTransport {
  id: string;
  mode: string;
  from_location: {
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  to_location: {
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  departure_time: string;
  arrival_time: string;
  duration: string;
  cost: number;
  cost_per_person: number;
  description: string;
  booking_url?: string;
  notes?: string[];
  carrier: string;
  service_class: string;
  vehicle_number: string;
  route_type: string;
}

interface MainTransportCardProps {
  transport: MainTransport;
}





const MainTransportCard: React.FC<MainTransportCardProps> = ({ transport }) => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen((s) => !s);
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") toggleOpen();
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div
      className="flex relative overflow-hidden  w-full cursor-pointer border-b-2 border-gray-200"
      onClick={toggleOpen}
      tabIndex={0}
      onKeyDown={onKeyDown}
      role="button"
      aria-expanded={open}
    >
    
      <div className="flex-1">
        <div className="px-3 py-2 mt-0">
          {/* Header Section */}
          <div className="flex items-start flex-col md:flex-row justify-between mb-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-1">
                <h3 style={{ color: "#2093EF" }} className="font-semibold capitalize">
                  {capitalizeFirstLetter(transport.mode)} - {transport.route_type}
                </h3>
                <p className="text-sm text-gray-500">
                  {transport.carrier}
                  {transport.service_class && transport.service_class !== "N/A" && (
                    <span className="text-gray-400"> ({transport.service_class})</span>
                  )}
                </p>

                {/* Journey Time */}
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" color="#2093EF" />
                  <span>
                    {transport.departure_time} - {transport.arrival_time}
                  </span>
                  <span className="text-gray-400">({transport.duration})</span>
                </div>

                {/* From Location */}
                <div className="flex items-start gap-1 mt-2">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-900">{transport.from_location.name}</p>
                    <p className="text-xs text-gray-500">{transport.from_location.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Section */}
            <div className="text-left w-full md:w-fit md:text-right lg:text-right mt-2 md:mt-0">
              {transport.cost > 0 ? (
                <div className="flex items-end md:flex-col md:items-end w-full">
                  <p className="font-medium text-lg text-black">
                    ₹{transport.cost.toFixed(2).toLocaleString()}
                  </p>
                  <div className="text-sm text-gray-400 ml-2 md:ml-0">
                    (₹{transport.cost_per_person.toFixed(2).toLocaleString()}/person)
                  </div>
                </div>
              ) : (
                <div className="text-lg font-semibold" style={{ color: "#2093EF" }}>
                  Included
                </div>
              )}
            </div>
          </div>

          {/* Show Details Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-sm -mt-2"
            style={{ color: "#2093EF" }}
          >
            {open ? "Show less" : "Details"}
          </motion.p>

          {/* Expandable Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: open ? 1 : 0,
              maxHeight: open ? "1000px" : "0px",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mb-4 mt-4 space-y-3">
              {/* Description */}
              <div>
                <p className="text-sm text-gray-600">{transport.description}</p>
              </div>

              {/* To Location */}
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Destination</p>
                <div className="flex items-start gap-1">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-900">{transport.to_location.name}</p>
                    <p className="text-xs text-gray-500">{transport.to_location.address}</p>
                  </div>
                </div>
              </div>

              {/* Transport Details Grid */}
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Vehicle</p>
                  <p className="font-medium text-gray-900">{transport.vehicle_number}</p>
                </div>
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-medium text-gray-900">{transport.duration}</p>
                </div>
              </div>

              {/* Notes */}
              {transport.notes && transport.notes.length > 0 && (
                <div>
                  <p style={{ color: "#2093EF" }} className="font-semibold text-sm">
                    Important Notes
                  </p>
                  <div className="mt-2 space-y-1">
                    {transport.notes.map((note: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-600">{note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Booking Button */}
              {transport.booking_url && (
                <a
                  href={transport.booking_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 py-2 px-4 rounded-lg font-semibold text-white text-center transition-all hover:opacity-90"
                  style={{ backgroundColor: "#2093EF" }}
                >
                  Book Now
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainTransportCard;
