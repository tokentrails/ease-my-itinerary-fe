/* eslint-disable @typescript-eslint/no-explicit-any */

import moment from "moment";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Compass, Lightbulb, Star } from "lucide-react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShareIcon from "@mui/icons-material/Share";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import DisplayCard from "./displayCard";
import DayCard from "./DayCard";
import Loader from "./loader";

const ItineraryInfo = ({ streamedData }: { streamedData: any }) => {
  const [data, setData] = useState<any | null>(null);
  const [days, setDays] = useState<any[] | null>([]);
  const [streamLoaderMessage, setStreamLoaderMessage] = useState("asdasd");
  const [loadingStream, setLoadingStream] = useState(true);
  const [mainActiveTab, setMainActiveTab] = useState(0); // New state for main tabs
  const [dayActiveTab, setDayActiveTab] = useState(0); // New state for day tabs

  const handleMainTabChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setMainActiveTab(newValue);
  };

  const handleDayTabChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setDayActiveTab(newValue);
  };

  useEffect(() => {
    if (streamedData) {
      if (streamedData.data) {
        setData({
          ...streamedData.data,
        });
        if (streamedData.data.day_plans) {
          // eslint-disable-next-line prefer-const
          let days_ = [...streamedData.data.day_plans];
          if (days_.length < streamedData.data.duration_days) {
            for (
              let i = days_.length;
              i < streamedData.data.duration_days;
              i++
            ) {
              days_.push([]);
            }
          }
          setDays(days_);
        } else {
          // eslint-disable-next-line prefer-const
          let days_ = [];
          for (let i = 0; i < streamedData.data.duration_days; i++) {
            days_.push([]);
          }
          setDays(days_);
        }
      }
      if (streamedData.message) {
        setStreamLoaderMessage(streamedData.message);
      }
      // setTimeout(() => {
      //   setLoadingStream(false);
      // }, 3000);
      if (streamedData.type == "complete") {
        setTimeout(() => {
          setLoadingStream(false);
        }, 3000);
      }
    }
  }, [streamedData]);
  return (
    <div className=" relative w-full min-h-[90vh] py-3 px-2">
      <AnimatePresence>
        {loadingStream && (
          <Loader
            positionClasses={
              data
                ? "top-5 right-2 max-w-[300px] md:max-w-[350px] md:top-5 md:right-5 lg:top-20 lg:right-15 from-white to-gray-50 shadow-2xl backdrop-blur-sm"
                : "top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2"
            }
            messages={streamLoaderMessage}
          />
        )}

        <div>
          {data && (
            <motion.div>
              <div className="flex justify-between">
                <div className="w-full">
                  <div className="flex  justify-between items-center">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <ArrowBackIcon />
                    </motion.button>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="flex flex-col justify-center items-center"
                    >
                      <h1 className="text-[20px]  mt-5 font-semibold">
                        {data.destination}
                      </h1>

                      <p className="font-[12px] text-gray-500">
                        {moment(data.start_date).format("MMM DD")} -{" "}
                        {moment(data.end_date).format("MMM DD, YYYY")}
                      </p>
                    </motion.div>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="w-[40px] h-[40px] shadow-xl flex justify-center items-center bg-gray-200 rounded-4xl"
                    >
                      <ShareIcon sx={{ fontSize: "18px" }} />
                    </motion.button>
                  </div>
                  {data.weather_info && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.7,
                      }}
                      className="my-0 px-0 py-5 rounded-xl"
                    >
                      <div className="flex justify-between items-center">
                        <p className="text-[16px] font-semibold"> Weather</p>
                        <p className="font-semibold text-[16px] flex">
                          {data.weather_info.avg_min_temp.toFixed(0)}°C -{" "}
                          {data.weather_info.avg_max_temp.toFixed(0)}°C
                        </p>
                      </div>
                      <p className="font-semibold">
                        {data.weather_info.season}
                      </p>

                      <p className="text-sm text-gray-500">
                        {data.weather_info.description}
                      </p>
                      <div className=" mt-2 bg-yellow-100 p-4 rounded-xl">
                        <p className="font-semibold">Recommendation</p>
                        <p className="text-sm text-gray-500">
                          {data.weather_info.recommendation}
                        </p>
                      </div>
                    </motion.div>
                  )}
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={mainActiveTab}
                      onChange={handleMainTabChange}
                      aria-label="main tabs"
                      sx={{
                        "& .MuiTabs-indicator": { backgroundColor: "#ef6614" },
                        "& .Mui-selected": { color: "#ef6614 !important" },
                      }}
                    >
                      <Tab
                        sx={{ textTransform: "inherit" }}
                        label="Itinerary"
                      />
                      <Tab
                        sx={{ textTransform: "inherit" }}
                        label="Accommodation"
                      />
                      <Tab sx={{ textTransform: "inherit" }} label="Travel" />
                    </Tabs>
                  </Box>
                  {mainActiveTab == 0 && (
                    <motion.div>
                      <Box
                        sx={{ maxWidth: "100vw", bgcolor: "background.paper" }}
                      >
                        <Tabs
                          value={dayActiveTab}
                          onChange={handleDayTabChange}
                          variant="scrollable"
                          scrollButtons="auto"
                          aria-label="scrollable auto tabs example"
                          sx={{
                            "& .MuiTabs-indicator": {
                              backgroundColor: "#2093EF",
                            },
                            "& .Mui-selected": { color: "#2093EF !important" },
                          }}
                        >
                          {days?.map((day: any, index: number) => {
                            return (
                              <Tab
                                sx={{ textTransform: "inherit" }}
                                label={`Day ${index + 1}`}
                                key={index}
                              />
                            );
                          })}
                        </Tabs>
                      </Box>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                        key={dayActiveTab}
                      >
                        <DayCard
                          index={dayActiveTab}
                          dayInfo={days ? days[dayActiveTab] : []}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                  {data.highlight_activities &&
                    data.highlight_activities.length > 0 && (
                      <DisplayCard
                        icon={<Star color="#2093EF" size={24} />}
                        title={"Highlight"}
                        data={data.highlight_activities}
                        delay={0.5}
                      />
                    )}
                  {data.local_insights && data.local_insights.length > 0 && (
                    <DisplayCard
                      icon={<Lightbulb color="#2093EF" size={24} />}
                      title={"Local Insights"}
                      data={data.local_insights}
                      delay={0.7}
                    />
                  )}
                  {data.travel_tips && data.travel_tips.length > 0 && (
                    <DisplayCard
                      icon={<Compass color="#2093EF" size={24} />}
                      title={"Travel Tip"}
                      data={data.travel_tips}
                      delay={0.8}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default ItineraryInfo;
