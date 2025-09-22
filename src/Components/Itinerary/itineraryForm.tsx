
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { motion } from "motion/react";
import MoneyIcon from "@mui/icons-material/Money";
import InputComponent from "../../Components/inputComponent";

import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import PlaceAutocompleteInput from "../../Components/UseGoogleMapSearch";
import InputSelect from "../../Components/selectorComponent";
import { useFormik } from "formik";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import validationSchema from "../../Validations/ItineraryFormValidation";
import DateComponent from "../../Components/dateComponent";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import moment from "moment";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import TextAreaComponent from "../../Components/textAreaComponent";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { useDispatch } from "react-redux";
import { addTrip } from "../../Store/itinerary-slice";

interface TripFormValues {
  budget: string;
  days: string;
  source: string;
  destination: string;
  interests: string[];
  traveler_count: string;
  end_date: string;
  start_date: string;
  travel_style: string;
  meal_preference: string;
  transport_mode: string[];
  accommodationType: string[];
  special_requests: string;
}
const mealType = [
  {
    type: "vegan",
    label: "🍽️ vegan",
    color: "cyan",
  },
  {
    type: "vegetarian",
    label: "🥗 Vegetarian",
    color: "green",
  },
  {
    type: "non-vegetarian",
    label: "🍗 Non-Vegetarian ",
    color: "red",
  },
];

const ItineraryForm: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const initialValues: TripFormValues = {
    budget: "1000",
    days: "",
    destination: "",
    interests: [],
    source: "",
    start_date: moment().format("YYYY-MM-DD"),
    end_date: "",
    traveler_count: "1",
    travel_style: "mid-range",
    transport_mode: ["bus", "train", "car", "bike", "flight", "any"],
    meal_preference: "vegetarian",
    special_requests: "",
    accommodationType: ["hotel"],
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const payLoad: any = JSON.parse(JSON.stringify(values));
      payLoad.budget = Number(payLoad.budget);
      payLoad.traveler_count = Number(payLoad.traveler_count);
      //dispatch(addTrip({...Data_Dummy}))
      setError("");
      await fetch(
        "https://ai-trip-planner-backend-703138722646.us-central1.run.app/api/v1/trips/generate",
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({ ...payLoad }),
        }
      )
        .then(async (resp) => {
          setLoading(false);
          const data = await resp.json();
 

          if (data?.data?.trip) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
            dispatch(addTrip({ ...data.data.trip }));
          } else if (data.error.message) {
            setError(data.error.message || "No Data Found");
          } else {
            setError("No Data Found");
          }
        })
        .catch((error) => {
          setLoading(false);
          setError("Please Try again later!");
          console.log(error);
        });

    },
  });
  const interests = [
    {
      id: "heritage",
      name: "Heritage",
      icon: "🏛️",
      desc: "Historical monuments & culture",
    },
    {
      id: "spiritual",
      name: "Spirituality",
      icon: "🛕",
      desc: "Temples & pilgrimage",
    },
    {
      id: "adventure",
      name: "Adventure",
      icon: "⛰️",
      desc: "Trekking & outdoor activities",
    },
    {
      id: "beach",
      name: "Beach",
      icon: "🏖️",
      desc: "Beaches & hill stations",
    },
    {
      id: "food",
      name: "Food",
      icon: "🍛",
      desc: "Local cuisine & street food",
    },
    {
      id: "wildlife",
      name: "Wildlife",
      icon: "🐅",
      desc: "National parks & safaris",
    },
    {
      id: "culture",
      name: "Culture",
      icon: "🎭",
      desc: "Art, music & festivals",
    },
    {
      id: "nature",
      name: "Nature",
      icon: "🌿",
      desc: "Mountains & natural beauty",
    },
  ];
  const handleThemeToggle = (interests: string) => {
    const currentThemes = formik.values.interests || [];
    let updatedThemes;
    if (currentThemes.includes(interests)) {
      updatedThemes = currentThemes.filter((t) => t !== interests);
    } else {
      updatedThemes = [...currentThemes, interests];
    }
    formik.setFieldValue("interests", updatedThemes);
  };

  const popularDestinations = {
    domestic: [
      "Goa",
      "Kerala (Backwaters)",
      "Rajasthan (Jaipur)",
      "Himachal Pradesh (Manali)",
      "Uttarakhand (Rishikesh)",
      "Karnataka (Mysore)",
      "Tamil Nadu (Ooty)",
      "Kashmir (Srinagar)",
    ],
  };
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
      className="min-h-screen bg-gray-50"
    >
      <main className="max-w-5xl mx-auto px-4 py-5">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Create your personalized itinerary
          </h1>
          {error && error.length > 0 && (
            <p className="text-md text-center text-red-400 font-semibold">
              {" "}
              {error}
            </p>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log(formik.errors, "errors");
              formik.handleSubmit();
            }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <div className="mr-1 w-1/2">
                <PlaceAutocompleteInput
                  Icon={<FlightTakeoffIcon sx={{ fontSize: "24px" }} />}
                  title={"Where are you traveling from?"}
                  value={formik.values.source}
                  errorMessage={
                    formik.touched.source ? formik.errors.source : ""
                  }
                  onPlaceSelect={(value: string) => {
                    formik.setFieldValue("source", value || "");
                  }}
                />
              </div>
              <div className="w-1/2">
                <PlaceAutocompleteInput
                  Icon={<FlightLandIcon sx={{ fontSize: "24px" }} />}
                  title={"Where are you traveling to?"}
                  value={formik.values.destination}
                  errorMessage={
                    formik.touched.destination ? formik.errors.destination : ""
                  }
                  onPlaceSelect={(value: string) => {
                    formik.setFieldValue("destination", value || "");
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-sm text-gray-500 mr-2">
                Popular In India:
              </span>
              {popularDestinations.domestic.map((dest, index) => (
                <motion.button
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      bounce: 20,
                      stiffness: 200,
                      delay: index * 0.1,
                    },
                  }}
                  key={dest}
                  type="button"
                  onClick={() => formik.setFieldValue("destination", dest)}
                  className="text-xs px-3 py-1 bg-gray-100 hover:bg-cyan-100 text-gray-700 hover:text-cyan-700 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  {dest}
                </motion.button>
              ))}
            </div>
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
              errorMessage={formik.touched.budget ? formik.errors.budget : ""}
              placeHolder={"What is your budget?"}
            />
            <div className="flex w-full flex-wrap items-center justify-between">
              <DateComponent
                Icon={<CalendarMonthIcon sx={{ fontSize: "24px" }} />}
                title={"From when you are planning?"}
                width="48%"
                minDate={moment().format("YYYY-MM-DD")}
                onUpdate={(value: string) => {
                  formik.setFieldValue("start_date", value);
                }}
                errorMessage={
                  formik.touched.start_date ? formik.errors.start_date : ""
                }
                value={formik.values.start_date}
              />
              <DateComponent
                Icon={<CalendarMonthIcon sx={{ fontSize: "24px" }} />}
                title={"Till?"}
                width="48%"
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

            <div className="flex w-full flex-wrap items-center justify-between">
              <InputSelect
                Icon={<PeopleIcon sx={{ fontSize: "24px" }} />}
                title={"Number of Travelers"}
                width="100%"
                options={[...Array(10)].map((_, i) => {
                  return {
                    key: (i + 1).toString(),
                    value:
                      i + 1 + " " + (i + 1 === 1 ? "Traveler" : "Travelers"),
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
            <div>
              <div className="flex">
                <div className="text-cyan-500 mr-2">
                  <EmojiObjectsOutlinedIcon sx={{ fontSize: "24px" }} />{" "}
                </div>
                <h3 className={`text-lg font-semibold text-gray-900 `}>
                  What are your travel interests?
                </h3>
              </div>

              <p
                className={`mb-4 text-sm text-gray-500 ${
                  formik.errors.interests && "text-red-800"
                }`}
              >
                Select all that interest you (minimum 1 required)
              </p>
              <div className="flex flex-wrap gap-5 items-center justify-around">
                {interests.map((interests, index) => (
                  <motion.button
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
                    key={interests.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleThemeToggle(interests.name as string);
                    }}
                    className={`px-6 py-1 w-2/5 h-[80px] rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                      formik.values.interests.includes(interests.name as string)
                        ? "bg-cyan-100 text-cyan-700 border-2 border-cyan-300"
                        : "bg-gray-100 text-gray-700 border-2 border-transparent hover:bg-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-start ">
                      <div className="text-[26px] w-[50px]">
                        {interests.icon}
                      </div>
                      <div className=" text-left">
                        <p className="text-[18px] font-bold">
                          {interests.name}
                        </p>
                        <p className="font-semibold text-gray-600">
                          {interests.desc}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="mt-7">
              <div className=" flex space-x-2">
                <div className="text-cyan-500 mr-2">
                  {" "}
                  <FastfoodOutlinedIcon sx={{ fontSize: "24px" }} />
                </div>

                <p className="text-lg font-semibold text-gray-800">
                  Food Preference
                </p>
              </div>
              <div className="flex my-2 pl-2 ">
                {mealType.map((i) => {
                  return (
                    <motion.button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        formik.setFieldValue("meal_preference", i.type);
                      }}
                      className={`p-4 mx-2 cursor-pointer rounded-xl transition-all duration-500  ${
                        formik.values.meal_preference == i.type
                          ? "bg-" +
                            i.color +
                            "-100 border-2 border-" +
                            i.color +
                            "-300"
                          : "bg-gray-200 border-2 border-gray-200 hover:bg-gray-300 hover:border-gray-300"
                      }`}
                    >
                      {i.label}
                    </motion.button>
                  );
                })}
              </div>
              {formik.errors.meal_preference}
            </div>
            <TextAreaComponent
              isOptional={true}
              title={"Special Requests"}
              Icon={<ChatBubbleOutlineOutlinedIcon sx={{ fontSize: "24px" }} />}
              onUpdate={(val: string) => {
                formik.setFieldValue("special_requests", val);
              }}
              value={formik.values.special_requests}
              placeHolder={
                "Any special requirements or preferences for your trip?"
              }
            />
            <div className="pt-6">
              {error && error.length > 0 && (
                <p className="text-md text-center text-red-400 font-semibold">
                  {" "}
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full relative bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 animate-pulse"></div>
                )}
              </button>
              {loading && (
                <div className="mt-4 text-center">
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 text-sm text-cyan-800">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-3 h-3 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="font-semibold">
                        Crafting Your Perfect Journey
                      </span>
                    </div>
                    <div className="text-xs">
                      <div>✓ Analyzing your preferences</div>
                      <div>✓ Finding best destinations</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span>Creating personalized itinerary...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </main>
    </motion.div>
  );
};

export default ItineraryForm;
