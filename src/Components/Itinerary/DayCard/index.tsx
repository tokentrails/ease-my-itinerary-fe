/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import type { DayPlan } from "../../../Helper/ApiResponseInterface";
import ActivityList from "./ActivityCard";

import { motion } from "motion/react";

import TransportCard from "./TransportCard";
import MealsCard from "./MealsCard";

import ItinerarySkeleton from "../itinarySkeleton";

interface Props {
  dayInfo: DayPlan;
  index: number;
}

const DayCard = (props: Props) => {
  const { dayInfo, index } = props;

  return (!dayInfo || !dayInfo.day_number || dayInfo == undefined) ? (
    <ItinerarySkeleton day={index} />
  ) : (
    <div className=" relative bg-white  transition-height  duration-700   rounded-xl py-4 mb-5">
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
        {dayInfo.events.map((event:any, index:number) => {
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
