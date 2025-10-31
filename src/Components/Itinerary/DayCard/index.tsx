import moment from "moment";
import type { DayPlan } from "../../../Helper/ApiResponseInterface";
import getWeatherIcon from "../../../Helper/weatherIcons";
import ActivityList from "./ActivityCard";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";
import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { motion } from "motion/react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import TransportCard from "./TransportCard";
import MealsCard from "./MealsCard";

import ItinerarySkeleton from "../itinarySkeleton";

interface Props {
  dayInfo: DayPlan;
  index: number;
}

const DayCard = (props: Props) => {
  const { dayInfo, index } = props;
  const [openTab, setOpenTab] = useState(0);

  return !dayInfo.day_number ? (
    <ItinerarySkeleton day={index} />
  ) : (
    <div className="min-w-[400px] relative bg-white  transition-height  duration-700 shadow-lg px-5 rounded-xl py-4 my-5">
      <div className="py-2 sticky z-100 backdrop-blur-sm top-0 left-0">
        <div className="flex justify-between items-center cursor-pointer w-[90%]">
          <div>
            <p className="font-semibold text-md">{dayInfo.title}</p>
            <p className="text-gray-500 text-sm">
              {moment(dayInfo.date).format("MMMM DD, YYYY")}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`transition-max-height duration-400 ease-in-out overflow-hidden `}
      >
        {dayInfo.events.map((event, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 1 }}
              transition={{
                duration: 0.5,
                delay: index == 0 ? 0.2 : index * 0.4,
              }}
              key={index}
            >
              {event.event_type == "activity" && (
                <div className="flex   h-full">

                  <ActivityList activity={event} />
                </div>
              )}
              {event.event_type == "transport" && (
                <TransportCard
                  index={index}
                  transport={event}
                  dayInfo={dayInfo}
                  isLast={index == dayInfo.events.length - 1}
                />
              )}
              {event.event_type == "meal" && (
                <MealsCard index={index} meal={event} dayInfo={dayInfo} />
              )}
            </motion.div>
          );
        })}
        {/* {activeTab == "1" &&
          dayInfo.activities.map((activity, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={index}
              >
                <ActivityList
                  index={index}
                  activity={activity}
                  isLast={index == dayInfo.activities.length - 1}
                />
              </motion.div>
            );
          })}
        {activeTab == "2" && (
          <div>
            {dayInfo.transport.map((transport, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  key={index}
                >
                  <TransportCard
                    index={index}
                    transport={transport}
                    dayInfo={dayInfo}
                  />
                </motion.div>
              );
            })}
          </div>
        )}
        {activeTab == "3" &&
          dayInfo.meals.map((meals, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={index}
              >
                <MealsCard index={index} meal={meals} dayInfo={dayInfo} />
              </motion.div>
            );
          })} */}
      </div>
    </div>
  );
};
export default DayCard;
