import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";
import { extractActivityLocationsFromDay } from "../../../utils/googleMapsHelper";

interface RouteMapProps {
  dayPlans: Record<string, unknown>[];
}

const RouteMap = ({ dayPlans }: RouteMapProps) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

  const selectedDay = dayPlans[selectedDayIndex];
  const activities = extractActivityLocationsFromDay(selectedDay);

  const hasRoute = activities.length >= 2;

  // Generate route URL using Google Maps with waypoints
  const routeUrl =
    hasRoute && activities[0]
      ? `https://www.google.com/maps/dir/?api=1&origin=${activities[0].latitude},${activities[0].longitude}&destination=${activities[activities.length - 1].latitude},${activities[activities.length - 1].longitude}${
          activities.length > 2
            ? "&waypoints=" + activities.slice(1, -1).map((a) => `${a.latitude},${a.longitude}`).join("|")
            : ""
        }`
      : "";

  return (
    <div className="space-y-4">
      {/* Day Selector */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
        {dayPlans.map((dayPlan, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedDayIndex(index)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
              selectedDayIndex === index
                ? "text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            style={
              selectedDayIndex === index ? { backgroundColor: "#2093EF" } : {}
            }
          >
            {`Day ${index + 1}`}
          </motion.button>
        ))}
      </div>

      {/* Route Info Card */}
      <motion.div
        key={selectedDayIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl border border-gray-200 p-4 md:p-6"
      >
        {hasRoute ? (
          <div className="space-y-4">
            {/* Activity Count */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#eaf3ff" }}
              >
                <Navigation size={20} color="#2093EF" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Activities to visit</p>
                <p className="text-lg font-bold text-gray-900">
                  {activities.length} {activities.length === 1 ? "stop" : "stops"}
                </p>
              </div>
            </div>

            {/* Activity List */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Route Details:</p>
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                    style={{ backgroundColor: "#2093EF" }}
                  >
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.name || `Activity ${index + 1}`}
                    </p>
                    <p className="text-xs text-gray-500">
                      {activity.latitude.toFixed(4)}, {activity.longitude.toFixed(4)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-3 rounded-lg text-white font-medium transition-colors flex items-center justify-center gap-2"
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
              View Route in Google Maps
            </motion.a>
          </div>
        ) : (
          <div className="text-center py-8">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
              style={{ backgroundColor: "#eaf3ff" }}
            >
              <MapPin size={24} color="#2093EF" />
            </div>
            <p className="text-gray-600 font-medium">
              Need at least 2 activities with location data to view route
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Currently {activities.length} {activities.length === 1 ? "activity" : "activities"} available
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RouteMap;
