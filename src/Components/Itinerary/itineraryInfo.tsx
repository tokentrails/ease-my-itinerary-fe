import moment from "moment";
import type { Trip } from "../../Helper/ApiResponseInterface";
import DayCard from "./DayCard";
import ItimeraryBreakDown from "./itineraryBreakDown";
import ItineraryForm from "./itineraryForm";
import DisplayCard from "./displayCard";
import { Compass, Lightbulb, Star, Thermometer } from "lucide-react";
import AccommodationCard from "./AccommodationCard";
import Summary from "./Summary";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

interface Props {
  trip: Trip;
}

const ItineraryInfo = (props: Props) => {
  const { trip } = props;
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className=" relative w-[100vw] py-5 px-8">
      <div>
        {trip.day_plans.length > 0 ? (
          <div>
            <div
              className="grid justify-between"
              style={{
                gridTemplateColumns: "68% 30%",
              }}
            >
              <div>
                <h1 className="text-[34px] mt-10 font-semibold">
                  Your Unforgettable Trip to {trip.destination}
                </h1>

                <p className="font-sm text-gray-500">
                  {moment(trip.start_date).format("MMMM DD")} -{" "}
                  {moment(trip.end_date).format("MMMM DD, YYYY")}
                </p>
                {trip.weather_info && (
                  <div className="my-5   px-4 py-5 rounded-xl">
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-semibold">
                        {" "}
                        Weather Forecast{" "}
                      </p>
                      <p className="font-semibold flex">
                        <Thermometer />
                        {trip.weather_info.avg_min_temp.toFixed(2)}°C -{" "}
                        {trip.weather_info.avg_max_temp.toFixed(2)}°C
                      </p>
                    </div>
                    <div className="flex items-center justify-between pr-10">
                      <p> Season : {trip.weather_info.season}</p>{" "}
                    </div>
                    <p className="text-sm text-gray-500">
                      {trip.weather_info.description}
                    </p>
                    <div className="p-5 bg-yellow-100 my-2 rounded-xl">
                      <p className="font-semibold">Recommendation</p>
                      <p className="text-sm text-gray-500">
                        {trip.weather_info.recommendation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <Summary tripInfo={trip} />
              </div>
            </div>
            {/* */}
            <div
              className="  justify-between  grid"
              style={{ gridTemplateColumns: "68% 30%" }}
            >
              <div className="px-[0px] w-full">
                <Tabs
                  value={activeTab}
                  onChange={(_, newValue) => {
                    setActiveTab(newValue);
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
                >
                  <Tab
                    label="Itinerary"
                    style={{
                      textTransform: "inherit",
                      fontSize: "20px",
                      fontWeight: "600",

                      color: "black",
                    }}
                    value="1"
                  ></Tab>
                  <Tab
                    label="Accommodation"
                    style={{
                      textTransform: "inherit",
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "black",
                    }}
                    value="2"
                  ></Tab>
                </Tabs>
                {activeTab == "1" &&
                  trip.day_plans.length > 0 &&
                  trip.day_plans.map((dayInfo, i) => {
                    return (
                      <div key={i}>
                        <DayCard index={i} dayInfo={dayInfo} />
                      </div>
                    );
                  })}
                {activeTab == "2" && trip.accommodations.length > 0 && (
                  <div className=" shadow-xl ">
                    <div className="flex overflow-x-auto space-x-4 pb-4">
                      {trip.accommodations.map((acc, i) => {
                        return (
                          <AccommodationCard
                            accommodation={acc}
                            TripInfo={trip}
                            index={i}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full  ">
                <div className=" w-full">
                  <ItimeraryBreakDown
                    trip={trip}
                    breakDown={trip.budget_breakdown}
                  />
                </div>

                {trip.highlight_activities &&
                  trip.highlight_activities.length > 0 && (
                    <div className="w-full">
                      <DisplayCard
                        icon={<Star className="text-cyan-500" size={24} />}
                        title={"Highlight"}
                        data={trip.highlight_activities}
                      />
                    </div>
                  )}
                {trip.local_insights && trip.local_insights.length > 0 && (
                  <div className="min-w-[450px]">
                    <DisplayCard
                      icon={<Lightbulb className="text-cyan-500" size={24} />}
                      title={"Local Insights"}
                      data={trip.local_insights}
                    />
                  </div>
                )}
                {trip.travel_tips && trip.travel_tips.length > 0 && (
                  <div className="min-w-[450px]">
                    <DisplayCard
                      icon={<Compass className="text-cyan-500" size={24} />}
                      title={"Tip"}
                      data={trip.travel_tips}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
           
            <ItineraryForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItineraryInfo;
