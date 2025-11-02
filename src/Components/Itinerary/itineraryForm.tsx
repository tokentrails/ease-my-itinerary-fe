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
      className="min-h-screen bg-white flex justify-center p-5"
     
    >
      <div className="sm:w-[90%] rounded-2xl p-2 lg:w-[70%]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
         
          <p className="font-bold my-4 text-4xl text-center text-gray-900">
            AI-Powered Travel Planning
          </p>
          <p className="text-center text-lg text-gray-600">
            Let our AI create your perfect itinerary in seconds
          </p>
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            <div className=" py-2 rounded-full   text-sm text-blue-700 font-medium">
               Personalized
            </div>
               <div className=" px-4 py-2 rounded-full   text-sm  font-medium">
               &
            </div>
            <div className="  py-2 rounded-full  border-blue-200 text-sm text-blue-700 font-medium">
               Smart
            </div>
            
          </div>
        </motion.div>

        <div className="my-4 mt-8">
          
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
                <p className="text-md font-semibold  text-gray-800">Interests</p>
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
                        className={`px-6 py-1 w-[90px] mx-2 h-[80px] my-2 flex items-center flex-col justify-center rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border-2 ${
                          formik.values.interests.includes(item.name as string)
                            ? "border-2 text-white"
                            : "bg-gray-100 text-gray-500 border-gray-200 border-2  hover:bg-gray-50"
                        }`}
                        style={
                          formik.values.interests.includes(item.name as string)
                            ? { backgroundColor: "#2093EF", borderColor: "#2093EF" }
                            : {}
                        }
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
                      className={`px-6 py-1 mx-5  my-2 h-[60px] flex items-center flex-col justify-center rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer border-2 ${
                        formik.values.meal_preference == item.type
                          ? "text-white border-2"
                          : "bg-gray-100 text-gray-500 border-gray-200 border-2  hover:bg-gray-50"
                      }`}
                      style={
                        formik.values.meal_preference == item.type
                          ? { backgroundColor: "#2093EF", borderColor: "#2093EF" }
                          : {}
                      }
                    >
                      {item.label}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="pt-6 w-full">
              {error && error.length > 0 && (
                <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-700 font-semibold">
                    ⚠️ {error}
                  </p>
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full relative cursor-pointer text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-75 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#2093EF" }}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="relative">
                      <div className="w-8 h-8 relative">
                        <div className="absolute inset-0 border-2 border-white/60 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-base font-bold">🤖 AI is generating...</span>
                      <span className="text-xs opacity-90">Crafting your perfect trip</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>🚀</span>
                    <span>Generate My AI Itinerary</span>
                  </div>
                )}
              </motion.button>
              {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="mt-6 text-center"
                  >
                    <div className="rounded-lg p-4 text-sm shadow-md" style={{ backgroundColor: '#eaf3ff', border: '2px solid #2093EF' }}>
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          🤖
                        </motion.span>
                        <span className="font-bold text-lg" style={{ color: '#2093EF' }}>
                          AI is crafting your itinerary
                        </span>
                      </div>
                      <div className="space-y-3 text-xs" style={{ color: '#1e40af' }}>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-lg">✅</span>
                          <span>Analyzing your travel preferences</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-lg">🔍</span>
                          <span>Finding perfect destinations & activities</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          className="flex items-center space-x-2"
                        >
                          <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-lg"
                          >
                            ⚡
                          </motion.span>
                          <span>Generating personalized itinerary...</span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ItineraryForm;
