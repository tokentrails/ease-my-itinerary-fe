/* eslint-disable @typescript-eslint/no-explicit-any */

import moment from "moment";
import { Star, FerrisWheel, MapPin } from "lucide-react";
import { useState } from "react";
import MapLocationModal from "../components/MapLocationModal";
interface ActivityProps {
  activity: any;
}
// replaced MUI icons with lucide-react equivalents
import { motion } from "motion/react";
const TimeLine = () => {
  

  const SelectedIcon =  <FerrisWheel className="w-5 h-5" color="#2093EF" />;

  return (
    <div className=" w-[45px] relative h-full  flex flex-col items-center">
      <div className="border-1 absolute top-6 z-100 -left-0  md:left-0 border-gray-300 shadow w-[45px] h-[45px] flex items-center justify-center rounded-[60px]" style={{ backgroundColor: '#eaf3ff' }}>
        {SelectedIcon}
      </div>
      <div className="transition delay-150 duration-300 border-1  w-0 h-full border-gray-300"></div>
    </div>
  );
};
const ActivityList = (props: ActivityProps) => {
  const { activity } = props;
  const [open] = useState(true);
  const [showMapModal, setShowMapModal] = useState(false);
  // event wrapper may have optional activity; this component is only rendered for activity events
  if (!activity.activity) return null;
  
  const hasLocation =
    activity.activity.location?.latitude && activity.activity.location?.longitude;
  return (
    <div
      className="flex flex-row  w-full cursor-pointer  border-gray-300"

    >
      <div className="w-[45px] ">
        <TimeLine />
      </div>
      <motion.div
        initial={false}
        // Use a sufficiently large value for expanded state
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="p-3 my-5 w-full   rounded-xl overflow-hidden"
      >
        <div className="w-full ">
          <div className="flex flex-col md:flex-row md:justify-between w-full">
            <div>
              <p style={{ color: '#2093EF' }}>{activity.activity.name}</p>
              <p className="text-sm text-gray-500">{activity.activity.location.city}</p>
              <p className=" text-sm text-gray-500">
                {moment(activity.start_time, "HH:mm").format("hh:mm a")} -{" "}
                {moment(activity.end_time, "HH:mm").format("hh:mm a")}
              </p>
            </div>
            <div className="flex justify-between items-center">
              {activity.activity.cost && activity.activity.cost != 0 ? (
                <div className="flex flex-row md:flex-col w-full  items-end  md:items-end">
                  <p className="font-medium text-lg text-black">
                    ₹{activity.activity.cost.toFixed(2).toLocaleString()}
                  </p>
                  <p className="text-md ml-2 text-gray-400">
                     ₹{activity.activity.cost_per_person.toFixed(2)}/person
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: open ? 1 : 0,
            maxHeight: open ? "1000px" : "0px",
          }} // Animate opacity based on 'open' state
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex mt-2 md:mt-0 flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
            <div>
              <p className="text-sm text-gray-500  ">
                {activity.activity.description}
              </p>
            </div>
          </div>
          {activity.activity.rating && (
            <div className="flex items-center gap-4 mt-5 mb-4 p-3 rounded-lg" style={{ backgroundColor: '#fff4ec' }}>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" color="#ef6614" />
                <span className="font-medium text-gray-900">
                  {activity.activity.rating.toFixed(1)}
                </span>
                <span className="text-sm text-gray-500">
                  ({activity.activity.review_count.toLocaleString()} reviews)
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {activity.activity.category}
              </div>
            </div>
          )}
          {activity.activity.tips && activity.activity.tips.length > 0 && (
            <div className="p-2 rounded-xl">
              <p style={{ color: '#2093EF' }}>Tips</p>
              {activity.activity.tips.map((tip: string, index: number) => {
                return (
                  <div className="flex mt-1 pl-3" key={index}>
                    <li className="text-sm">
                      {tip}
                    </li>
                  </div>
                );
              })}
            </div>
          )}

          {/* Location Button */}
          {hasLocation && (
            <div className="mt-4 flex gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowMapModal(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: '#2093EF' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1678D4';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2093EF';
                }}
              >
                <MapPin size={16} />
                View Location
              </motion.button>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Map Modal */}
      <MapLocationModal
        isOpen={showMapModal}
        onClose={() => setShowMapModal(false)}
        location={activity.activity.location}
      />
    </div>
  );
};
export default ActivityList;
