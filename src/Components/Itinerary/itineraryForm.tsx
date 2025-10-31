/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import React from "react";

import { motion } from "motion/react";
import PlaceAutocompleteInput from "../../customComponents/UseGoogleMapSearch";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DateComponent from "../../customComponents/dateComponent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InputSelect from "../../customComponents/selectorComponent";
import PeopleIcon from "@mui/icons-material/People";
import InputComponent from "../../customComponents/inputComponent";
import MoneyIcon from "@mui/icons-material/Money";

interface ItineraryFormProps {
  formik: any;
  loading: boolean;
  error: string;
  interests: any[];
  mealType: any[];
  handleThemeToggle: (theme: string) => void;
}

const ItineraryForm: React.FC<ItineraryFormProps> = ({
  formik,
  loading,
  error,
  interests,
  mealType,
  handleThemeToggle,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="min-h-screen bg-gray-50 flex justify-center p-5"
    >
      <div className="sm:w-[90%] rounded-2xl p-2 lg:w-[70%] ">
        <div>
          <p className="font-semibold my-5 text-3xl text-center">
            Plan your next adventure
          </p>
          <p className="text-center text-md">
            Create a personalized itinerary{" "}
          </p>
        </div>

        <div className="my-4 mt-20">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              formik.handleSubmit();
            }}
            className="flex justify-between flex-wrap"
          >
            <div className="w-full md:w-[48%]">
              <PlaceAutocompleteInput
                Icon={<FlightTakeoffIcon sx={{ fontSize: "24px" }} />}
                title={"Source"}
                value={formik.values.source}
                errorMessage={formik.touched.source ? formik.errors.source : ""}
                onPlaceSelect={(value: string) => {
                  formik.setFieldValue("source", value || "");
                }}
              />
            </div>
            <div className="w-full md:w-[48%]">
              <PlaceAutocompleteInput
                Icon={<FlightLandIcon sx={{ fontSize: "24px" }} />}
                title={"Destination"}
                value={formik.values.destination}
                errorMessage={
                  formik.touched.destination ? formik.errors.destination : ""
                }
                onPlaceSelect={(value: string) => {
                  formik.setFieldValue("destination", value || "");
                }}
              />
            </div>
            <div className="flex w-full flex-wrap items-center justify-between">
              <div className="w-full md:w-[48%]">
                <DateComponent
                  Icon={<CalendarMonthIcon sx={{ fontSize: "24px" }} />}
                  title={"From Date"}
                  minDate={moment().format("YYYY-MM-DD")}
                  onUpdate={(value: string) => {
                    formik.setFieldValue("start_date", value);
                  }}
                  errorMessage={
                    formik.touched.start_date ? formik.errors.start_date : ""
                  }
                  value={formik.values.start_date}
                />
              </div>
              <div className="w-full md:w-[48%]">
                <DateComponent
                  Icon={<CalendarMonthIcon sx={{ fontSize: "24px" }} />}
                  title={"To Date"}
                  width="100%"
                  minDate={
                    formik.values.start_date
                      ? formik.values.start_date
                      : moment().format("YYYY-MM-DD")
                  }
                  onUpdate={(value: string) => {
                    formik.setFieldValue("end_date", value);
                  }}
                  errorMessage={
                    formik.touched.end_date ? formik.errors.end_date : ""
                  }
                  value={formik.values.end_date}
                />
              </div>
              <div className="flex w-full mt-5 flex-wrap items-center justify-between">
                <div className="w-full md:w-[48%] lg:w-[48%] ">
                  <InputComponent
                    Icon={<MoneyIcon sx={{ fontSize: "24px" }} />}
                    title={"What's your budget?"}
                    type={"number"}
                    onUpdate={(value: string) => {
                      formik.setFieldValue("budget", value);
                    }}
                    min={1000}
                    max={10000000}
                    value={formik.values.budget}
                    errorMessage={
                      formik.touched.budget ? formik.errors.budget : ""
                    }
                    placeHolder={"What is your budget?"}
                  />
                </div>
                <div className="w-full md:w-[48%] lg:w-[48%] ">
                  <InputSelect
                    Icon={<PeopleIcon sx={{ fontSize: "24px" }} />}
                    title={"Number of Travelers"}
                    width="100%"
                    options={[...Array(10)].map((_, i) => {
                      return {
                        key: (i + 1).toString(),
                        value:
                          i +
                          1 +
                          " " +
                          (i + 1 === 1 ? "Traveler" : "Travelers"),
                      };
                    })}
                    errorMessage={
                      formik.touched.traveler_count
                        ? formik.errors.traveler_count
                        : ""
                    }
                    onUpdate={(value: string) => {
                      formik.setFieldValue("traveler_count", value);
                    }}
                    value={formik.values.traveler_count}
                  />
                </div>
              </div>
              </div>
               <div className=" w-full">
                <p className="text-md font-semibold  text-gray-800">Intrest</p>
                <div className="grid grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-around my-5 w-[100%]   items-center">
                  {interests.map((item, index) => {
                    return (
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeInOut",
                          delay: index * 0.1,
                        }}
                        key={item.id}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleThemeToggle(item.name as string);
                        }}
                        className={`px-6 py-1 w-[90px] mx-2 h-[80px] my-2 flex items-center flex-col justify-center rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                          formik.values.interests.includes(item.name as string)
                            ? "bg-cyan-100 text-black-900 border-2 border-cyan-300"
                              ? "text-black-900"
                              : "bg-gray-100 text-gray-500 border-gray-200 border-2  hover:bg-gray-00"
                            : "bg-gray-100 text-gray-500 border-gray-200 border-2  hover:bg-gray-00"
                        }`}
                      >
                        {item.icon}
                        {item.name}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

           <div className=" w-full">
              <p className="text-md font-semibold  text-gray-800">
                Preferred Meal
              </p>
              <div className="flex flex-col md:flex-row   my-5 w-[100%] items-start">
                {mealType.map((item, index) => {
                  return (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      }}
                      key={item.type}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        formik.setFieldValue("meal_preference", item.type);
                      }}
                      className={`px-6 py-1 mx-5  my-2 h-[60px] flex items-center flex-col justify-center rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                        formik.values.meal_preference == item.type
                          ? "bg-cyan-100 text-black-900 border-2 border-cyan-300"
                            ? "text-black-900"
                            : "bg-gray-100 text-gray-500 border-gray-200 border-2  hover:bg-gray-00"
                          : "bg-gray-100 text-gray-500 border-gray-200 border-2  hover:bg-gray-00"
                      }`}
                    >
                      {item.label}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="pt-6 w-full">
              {error && error.length > 0 && (
                <p className="text-md text-center text-red-400 font-semibold">
                  {" "}
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full relative cursor-pointer bg-cyan-700 hover:bg-cyan-500 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  className="w-full relative cursor-pointer text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-lg shadow-lg"
                  style={{ backgroundColor: '#2093EF' }}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="relative">
                      <div className="w-8 h-8 relative">
                        <div className="absolute inset-0 border-2 border-white/60 rounded-full animate-pulse"></div>
                        <div
                          className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-ping"
                          style={{ animationDelay: "0s" }}
                        ></div>
                        <div
                          className="absolute top-3 right-1 w-1 h-1 bg-white rounded-full animate-ping"
                          style={{ animationDelay: "0.3s" }}
                        ></div>
                        <div
                          className="absolute bottom-2 left-1 w-1 h-1 bg-white rounded-full animate-ping"
                          style={{ animationDelay: "0.6s" }}
                        ></div>
                        <div
                          className="absolute bottom-1 right-2 w-1 h-1 bg-white rounded-full animate-ping"
                          style={{ animationDelay: "0.9s" }}
                        ></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/80 rounded-full animate-bounce"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-base font-bold">
                        AI is planning your trip...
                      </span>
                      <span className="text-sm opacity-90">
                        This may take a moment
                      </span>
                    </div>
                  </div>
                ) : (
                  "Create My Itinerary"
                )}
                {loading && (
              <div className="absolute inset-0 animate-pulse" style={{ background: 'linear-gradient(90deg, rgba(32,147,239,0.06), rgba(32,147,239,0.03) 50%, rgba(32,147,239,0.06))' }}></div>
                )}
              </button>
              {loading && (
                  <div className="mt-4 text-center">
                    <div className="rounded-lg p-3 text-sm" style={{ backgroundColor: '#eaf3ff', border: '1px solid rgba(32,147,239,0.12)', color: '#0f172a' }}>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="w-3 h-3 border-2 border-transparent border-t-transparent rounded-full animate-spin" style={{ borderColor: 'rgba(32,147,239,0.3)' }}></div>
                        <span className="font-semibold">Crafting Your Perfect Journey</span>
                      </div>
                      <div className="text-xs">
                        <div>✓ Analyzing your preferences</div>
                        <div>✓ Finding best destinations</div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#ef6614' }}></div>
                          <span>Creating personalized itinerary...</span>
                        </div>
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ItineraryForm;
