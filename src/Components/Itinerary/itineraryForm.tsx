/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";

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
import TempleBuddhistOutlinedIcon from "@mui/icons-material/TempleBuddhistOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import KitesurfingOutlinedIcon from "@mui/icons-material/KitesurfingOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addTrip } from "../../Store/itinerary-slice";
import { useNavigate } from "react-router-dom";
import { UsetInfo } from "../../Store/user-slice";
import validationSchema from "./ItineraryFormValidation";
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

const ItineraryForm: React.FC = () => {
  const navigate = useNavigate();
  const initialValues: TripFormValues = {
    budget: "",
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
  const interests = [
    {
      id: "heritage",
      name: "Heritage",
      icon: <AccountBalanceOutlinedIcon />,
      desc: "Historical monuments & culture",
    },
    {
      id: "spiritual",
      name: "Spiritual",
      icon: <TempleBuddhistOutlinedIcon />,
      desc: "Temples & pilgrimage",
    },
    {
      id: "adventure",
      name: "Adventure",
      icon: <HikingOutlinedIcon />,
      desc: "Trekking & outdoor activities",
    },
    {
      id: "beach",
      name: "Beach",
      icon: <KitesurfingOutlinedIcon />,
      desc: "Beaches & hill stations",
    },
    {
      id: "food",
      name: "Food",
      icon: <FastfoodOutlinedIcon />,
      desc: "Local cuisine & street food",
    },
    {
      id: "wildlife",
      name: "Wildlife",
      icon: <PetsOutlinedIcon />,
      desc: "National parks & safaris",
    },
    {
      id: "culture",
      name: "Culture",
      icon: <ColorLensOutlinedIcon />,
      desc: "Art, music & festivals",
    },
    {
      id: "nature",
      name: "Nature",
      icon: <ForestOutlinedIcon />,
      desc: "Mountains & natural beauty",
    },
  ];
  const mealType = [
    {
      type: "vegan",
      label: "vegan",
      color: "cyan",
    },
    {
      type: "vegetarian",
      label: "Vegetarian",
      color: "green",
    },
    {
      type: "non-vegetarian",
      label: "Non-Vegetarian ",
      color: "red",
    },
  ];
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();
  const userInfo = useSelector(UsetInfo);
  const [error, setError] = useState("");
  useEffect(() => {
    if (userInfo.id.length == 0) {
      navigator("/Login");
    }
  }, [userInfo]);
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
            navigate("/Itinerary/" + data.data.trip.id);
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
            <div className="sm:w-full lg:w-[48%]">
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
            <div className="sm:w-full lg:w-[48%]">
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
              <div className="sm:w-full lg:w-[48%] ">
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
              <div className="sm:w-full lg:w-[48%] ">
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
                <div className="sm:w-full lg:w-[48%] ">
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
                <div className="sm:w-full lg:w-[48%] ">
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
              <div className=" w-full">
                <p className="text-md font-semibold  text-gray-800">Intrest</p>
                <div className="flex flex-wrap my-5 w-[100%]  justify-around items-center">
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
                        className={`px-6 py-1 w-[90px] h-[80px] flex items-center flex-col justify-center rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                          formik.values.interests.includes(item.name as string)
                            ? "bg-cyan-100 text-black-900 border-2 border-cyan-300"
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
            </div>
            <div className=" w-full">
              <p className="text-md font-semibold  text-gray-800">
                Preferred Meal
              </p>
              <div className="flex flex-wrap  my-5 w-[100%]  justify-start items-center">
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
                      className={`px-6 py-1 mx-5  h-[60px] flex items-center flex-col justify-center rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                        formik.values.meal_preference == item.type
                          ? "bg-cyan-100 text-black-900 border-2 border-cyan-300"
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
      </div>
    </motion.div>
  );
};

export default ItineraryForm;
