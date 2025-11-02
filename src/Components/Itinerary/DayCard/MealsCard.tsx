import React, { useState } from "react";
import moment from "moment";
import type { DayPlan, Event } from "../../../Helper/ApiResponseInterface";
import { Utensils, MapPin, Salad, Star, AlertCircle, Activity as LucideActivity } from "lucide-react";
import { motion } from "motion/react";
import { capitalizeFirstLetter } from "../../../utils/constants";
// Removed MUI icons; using lucide-react equivalents above

interface Props {
  meal: Event;
  dayInfo: DayPlan;
  index: number;
}

const TimeLine = () => {
 
  const SelectedIcon = 
    <Utensils className="w-5 h-5" color="#2093EF" />
  return (
    <div className=" w-[45px] relative h-full  flex flex-col items-center">
      <div className="border-1 absolute top-2 z-100 -left-0  md:left-0 border-gray-300 shadow w-[45px] h-[45px] flex items-center justify-center rounded-[60px]" style={{ backgroundColor: '#eaf3ff' }}>
        {SelectedIcon}
      </div>
      <div className="transition delay-150 duration-300 border-1  w-0 h-full border-gray-300"></div>
    </div>
  );
};

const MealsCard = (props: Props) => {
  const { meal } = props;
  const [open, setOpen] = useState(true);


  return (
    <div
      className="flex relative overflow-hidden   w-full cursor-pointer"

      tabIndex={0}

      role="button"
      aria-expanded={open}
    >
      <div className="w-[45px] ">
        <TimeLine />
      </div>
      <div className="flex-1 ">
        <div key={meal.id} className="  px-3 py-2 mt-0 ">
          <div className="flex items-start  flex-col md:flex-row justify-between mb-4">
            <div className="flex items-center  gap-3">
              <div>
                <h3 style={{ color: '#2093EF' }}>{meal.meal!.restaurant_name}</h3>

                <p className="text-sm  text-gray-400">{meal.meal!.cuisine}</p>
                {meal.meal && meal.meal.reservation_time&& meal.meal.reservation_time!=="N/A" && (
                  <div className="flex items-center ">
                    <p className=" text-gray-500 text-sm">
                      {moment(meal.meal.reservation_time, "HH:mm").format(
                        "hh:mm a"
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="text-left w-full md:w-fit md:text-right lg:text-right">
              {meal.meal && meal.meal.cost > 0 ? (
                <div className="flex  items-end md:flex-col md:items-end w-full ">
                  <p className="font-medium text-lg text-black">
                    ₹{meal.meal!.cost.toFixed(2).toLocaleString()}
                  </p>
                  <div className="text-sm text-gray-400">
                    (₹{meal.meal!.cost_per_person.toFixed(2).toLocaleString()}
                    /person)
                  </div>
                </div>
                ) : (
                <div className="text-lg font-semibold" style={{ color: '#2093EF' }}>
                  Included
                </div>
              )}
            </div>
          </div>

        

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: open ? 1 : 0,
              maxHeight: open ? "1000px" : "0px",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className=" mb-4  ">
              <div className="flex items-center ">
                {meal.meal && meal.meal.booking_required && (
                  <div className="flex items-center ">
                      <>
                      <AlertCircle className="w-4 h-4" color="#ef6614" />
                      <span className="text-sm" style={{ color: '#ef6614' }}>
                        Booking Required
                      </span>
                    </>
                  </div>
                )}
              </div>

              {meal.meal && meal.meal.location.name &&
                meal.meal.location.name.length > 0 && (
                  <div className="flex items-start ">
                    <div>
                      <div className="text-sm text-gray-500">
                        {meal.meal!.location.address}
                      </div>
                    </div>
                  </div>
                )}
            </div>

            <p className="text-gray-700 mb-4">{meal.meal!.description}</p>
            <div className="flex items-center gap-4 mb-4 p-3 rounded-lg" style={{ backgroundColor: '#fff4ec' }}>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" color="#ef6614" />
                <span className="font-medium text-gray-900">
                  {meal.meal!.rating.toFixed(1)}
                </span>
                <span className="text-sm text-gray-500">
                  ({meal.meal!.review_count.toLocaleString()} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {meal.meal && meal.meal.specialties && meal.meal.specialties.length > 0 && (
                <div>
                  <span className="text-sm font-medium text-gray-900">
                    Specialties:{" "}
                  </span>
                  <span className="text-sm text-gray-600">
                    {meal.meal!.specialties!.join(", ")}
                  </span>
                </div>
              )}
              {meal.meal && meal.meal.dietary_info && meal.meal.dietary_info.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">
                    Dietary:{" "}
                  </span>
                  {meal.meal.dietary_info.map((diet: string, idx: number) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    >
                      {diet}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MealsCard;
