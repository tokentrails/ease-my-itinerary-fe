import moment from "moment";
import type { DayPlan } from "../../../Helper/ApiResponseInterface";
import getWeatherIcon from "../../../Helper/weatherIcons";
import ActivityList from "./ActivityCard";
import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { motion } from "motion/react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import TransportCard from "./TransportCard";
import MealsCard from "./MealsCard";

interface Props {
  dayInfo: DayPlan;
  index: number;
}

const DayCard = (props: Props) => {
  const { dayInfo, index } = props;
  const [activeTab, setActiveTab] = useState("1");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (index == 0) {
      setOpen(true);
    }
  }, [index]);
  return (
    <div className="min-w-[400px] relative bg-gray-100 border-2 border-cyan-500 transition-height  duration-700 shadow-lg px-5 rounded-xl py-4 my-5">
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="py-2 sticky z-100 backdrop-blur-sm top-0 left-0"
      >
        <div className="flex justify-between items-center cursor-pointer">
          <div>
            <p className="font-semibold text-md">
              Day {dayInfo.day_number} : {dayInfo.title}
            </p>
            <p className="text-gray-500 text-sm">
              {moment(dayInfo.date).format("MMMM DD, YYYY")}
            </p>
          </div>
          <div className="text-cyan-500 pr-10 text-right">
            <div className="flex items-end justify-end">
              {getWeatherIcon(dayInfo.weather.condition)}
              <p className="text-cyan-500 ml-2">
                Weather: {dayInfo.weather.min_temp.toFixed(2)}°C -{" "}
                {dayInfo.weather.max_temp.toFixed(2)}
                °C, {dayInfo.weather.condition}
              </p>
            </div>
            <p className="text-[0.8rem] text-gray-500">
              {dayInfo.weather.recommendation}
            </p>
          </div>
        </div>

        <div
          className={`absolute cursor-pointer top-2 right-3 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
      <div
        className={`transition-max-height duration-400 ease-in-out overflow-hidden ${
          open ? "max-h-[600vh]" : "max-h-0"
        }`}
      >
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => {
            setActiveTab(newValue);
          }}
          style={{
            color: "#00b8db",
          }}
          sx={{
            color: "#00b8db",
            "& .MuiTabs-indicator": {
              backgroundColor: "#00b8db",
            },

            "& .Mui-selected": {
              color: "#00b8db",
            },
          }}
          TabIndicatorProps={{
            sx: {
              backgroundColor: "#00b8db",
            },
          }}
          className="text-cyan-300 mb-4 "
        >
          <Tab
            label="🏃 Activity"
            style={{
              textTransform: "inherit",
              fontSize: "16px",
              color: "black",
            }}
            value="1"
          />
          <Tab
            style={{
              textTransform: "inherit",
              fontSize: "16px",
              color: "black",
            }}
            label="🚗 Transport"
            value="2"
          />
          <Tab
            style={{
              textTransform: "inherit",
              fontSize: "16px",
              color: "black",
            }}
            label=" 🍽️ Meals"
            value="3"
          />
          
        </Tabs>
        {activeTab == "1" &&
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
          })}
          
      </div>
    </div>
  );
};
export default DayCard;
