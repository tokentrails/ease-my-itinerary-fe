import React, { useState } from "react";
import { Star, MapPin, AlertCircle, Calendar } from "lucide-react";
import { motion } from "motion/react";
import moment from "moment";
import type { Accommodation } from "../../../Helper/ApiResponseInterface";

interface AccommodationCardProps {
  accommodation: Accommodation;
}


const AccommodationCard: React.FC<AccommodationCardProps> = ({
  accommodation,
}) => {
  const [open, setOpen] = useState(true);

  

  return (
    <div
      className="flex relative  w-full  cursor-pointer"
      onClick={() => {
        setOpen(!open);
      }}
    >
     
      <div className="w-full px-2 border-b-2 border-gray-200 ">
        <div className="  ">
          <div className="flex items-start flex-col md:flex-row justify-between mb-4">
            <div className="flex items-start ">
              <div className=" ">
                <h3 style={{ color: "#2093EF" }} className="font-semibold">
                  {accommodation.name}
                </h3>
                <p className="text-sm text-gray-500 capitalize">
                  {accommodation.type}
                </p>

                <div className="flex items-start gap-1 mt-1">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-500">
                    {accommodation.location.address}
                  </p>
                </div>

                {/* Check-in/Check-out */}
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" color="#2093EF" />
                  <span>
                    {moment(accommodation.check_in_date).format("MMM DD")} -{" "}
                    {moment(accommodation.check_out_date).format("MMM DD")}
                  </span>
                  <span className="text-gray-400">
                    ({accommodation.nights} night
                    {accommodation.nights > 1 ? "s" : ""})
                  </span>
                </div>
              </div>
            </div>

            {/* Cost Section */}
            <div className="text-left w-full md:w-fit md:text-right lg:text-right mt-2 md:mt-0">
              <div className="flex items-end md:flex-col md:items-end w-full">
                <p className="font-medium text-lg text-black">
                  ₹{accommodation.total_cost.toFixed(2).toLocaleString()}
                </p>
                <div className="text-sm text-gray-400 ml-2 md:ml-0">
                  (₹
                  {accommodation.cost_per_night.toFixed(2).toLocaleString()}
                  /night)
                </div>
              </div>
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
            className="overflow-hidden "
          >
            <div className="mb-4 mt-4 space-y-3">
              {/* Description */}
              {/* <div>
                <p className="text-sm text-gray-600">
                  {accommodation.description}
                </p>
              </div> */}

              {/* Room Details */}
              <div className="grid grid-cols-2  text-sm">
                <div>
                  <p className="text-gray-500">Room Type</p>
                  <p className="font-medium text-gray-900">
                    {accommodation.room_type}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Guests</p>
                  <p className="font-medium text-gray-900">
                    {accommodation.guests}{" "}
                    {accommodation.guests > 1 ? "guests" : "guest"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Check-in</p>
                  <p className="font-medium text-gray-900">
                    {accommodation.check_in_time}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Check-out</p>
                  <p className="font-medium text-gray-900">
                    {accommodation.check_out_time}
                  </p>
                </div>
              </div>

              {/* Rating */}
              {accommodation.rating && (
                <div
                  className="flex items-center gap-4 p-3 rounded-lg"
                  style={{ backgroundColor: "#fff4ec" }}
                >
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" color="#ef6614" fill="#ef6614" />
                    <span className="font-medium text-gray-900">
                      {accommodation.rating.toFixed(1)}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({accommodation.review_count.toLocaleString()} reviews)
                    </span>
                  </div>
                </div>
              )}

              {/* Amenities */}
              {accommodation.amenities &&
                accommodation.amenities.length > 0 && (
                  <div>
                    <p
                      style={{ color: "#2093EF" }}
                      className="font-semibold text-sm"
                    >
                      Amenities
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {accommodation.amenities.map(
                        (amenity: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50"
                            style={{ color: "#2093EF" }}
                          >
                            {amenity}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Cancellation Policy */}
              {accommodation.cancellation_info && (
                <div
                  className="flex items-start gap-2 p-3 rounded-lg"
                  style={{ backgroundColor: "#fef3c7" }}
                >
                  <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-yellow-900">
                      Cancellation Policy
                    </p>
                    <p className="text-yellow-800 mt-1">
                      {accommodation.cancellation_info}
                    </p>
                  </div>
                </div>
              )}

              {/* Booking Button */}
              {accommodation.booking_url && (
                <a
                  href={accommodation.booking_url}
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

export default AccommodationCard;
