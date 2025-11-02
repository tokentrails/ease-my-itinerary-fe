/* eslint-disable @typescript-eslint/no-explicit-any */

import moment from "moment";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Compass,
  Lightbulb,
  Star,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  TrendingDown,
  ChevronDown,
} from "lucide-react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShareIcon from "@mui/icons-material/Share";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import DisplayCard from "./displayCard";
import DayCard from "./DayCard";
import Loader from "./loader";
import AccommodationCard from "./components/AccommodationCard";
import MainTransportCard from "./components/MainTransportCard";
import Skeleton from "../../customComponents/customSkeleton";
import ItineraryBreakDown from "./itineraryBreakDown";
import ChatBot from "../chatWithAi";
import type { Trip } from "../../Helper/ApiResponseInterface";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getFormValues } from "../../Store/form-slice";
import { UsetInfo } from "../../Store/user-slice";
import { addTrip, TripInfo } from "../../Store/itinerary-slice";
import { streamApiCaller } from "../../utils/apiCall";
import { Alert } from "@mui/material";
import ItinaryForm from "../Form";
import BookingConfirmationModal from "./BookingConfirmationModal";
import {dummyData}  from "./dymmyData";
const ItineraryInfo = () => {
  const [data, setData] = useState<any | null>(null);
  const [days, setDays] = useState<any[] | null>([]);
  const [streamLoaderMessage, setStreamLoaderMessage] = useState("");
  const [loadingStream, setLoadingStream] = useState(true);
  const [mainActiveTab, setMainActiveTab] = useState(0);
  const [dayActiveTab, setDayActiveTab] = useState(0);
  const [errorInApiCall, setErrorInApiCall] = useState({
    hasError: false,
    message: "Demo",
  });
  const [summaryExpanded, setSummaryExpanded] = useState(false);
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);
  const [bookingConfirmationData, setBookingConfirmationData] = useState<any | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const formValues = useSelector(getFormValues);
  const userInfo = useSelector(UsetInfo);
  const tripDataFromRedux = useSelector(TripInfo);

  const id = searchParams.get("id");
  const fromForm = searchParams.get("fromForm") === "true";

  const handleMainTabChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    setMainActiveTab(newValue);
  };

  const handleDayTabChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    setDayActiveTab(newValue);
  };
  const streamItineraryFromForm = async () => {
    try {
      setLoadingStream(true);
      setStreamLoaderMessage("Initializing itinerary generation...");
      const payLoad: any = JSON.parse(JSON.stringify(formValues));
      payLoad.budget = Number(payLoad.budget);
      payLoad.traveler_count = Number(payLoad.traveler_count);
      payLoad.travel_style = "mid-range";
      await streamApiCaller(
        "/api/v1/trips/generate/stream",
        "POST",
        { ...payLoad },
        {
          Authorization: `Bearer ${userInfo.access_token}`,
        },
        (parsedChunk) => {
          if (parsedChunk) {
            handleStreamedData(parsedChunk);
          }
        }
      ).catch((error) => {
        console.log("Streaming API error 1:", error);
      });
    } catch (error) {
      setLoadingStream(false);
      console.log(error)
      setErrorInApiCall({
        hasError: true,
        message: "Failed to stream itinerary.",
      });
      //navigate("/");
      // streamItineraryFromForm();
    }
  };

  // Handle streamed data updates
  const handleStreamedData = (streamedData: any) => {
    // Check if response contains an error
    setLoadingStream(true);
    if (streamedData.error) {
      let errorMessage = "Something went wrong.";
      let fullDetails = "";

      // Extract error message from different formats
      if (streamedData.error.message) {
        fullDetails = streamedData.error.message;
      }

      // If there are details, add them to the full details
      if (streamedData.error.details) {
        if (typeof streamedData.error.details === "string") {
          fullDetails += " " + streamedData.error.details;
        } else if (streamedData.error.details.details) {
          fullDetails += " " + streamedData.error.details.details;
        }
      }

      // Extract the actual error from the "Error:" string
      const errorMatch = fullDetails.match(/Error:(.+?)(?=\n|$)/);
      if (errorMatch && errorMatch[1]) {
        errorMessage = errorMatch[1].trim();
      } else if (fullDetails) {
        // If no "Error:" pattern found, use the full message
        errorMessage = fullDetails;
      }

      setLoadingStream(false);
      setErrorInApiCall({
        hasError: true,
        message: errorMessage,
      });
      return;
    }

    if (streamedData.data) {
      console.log(streamedData.data, "main");
      if (streamedData.data.validation_report) {
        console.log(streamedData.data.validation_report);
      } else {
        setData({
          ...streamedData.data,
        });
      }

      if (streamedData.data.day_plans) {
        console.log(streamedData.data, "day_plans");
        const days_ = [...streamedData.data.day_plans];
        if (days_.length < streamedData.data.duration_days) {
          for (let i = days_.length; i < streamedData.data.duration_days; i++) {
            days_.push([]);
          }
        }

        setDays(days_);
      } else {
        const days_ = [];
        for (let i = 0; i < streamedData.data.duration_days; i++) {
          days_.push([]);
        }
        setDays(days_);
      }
      // Clear error when data is received successfully
      setErrorInApiCall({
        hasError: false,
        message: "",
      });
    }
    if (streamedData.message) {
      setStreamLoaderMessage(streamedData.message);
    }
    if (streamedData.type == "complete") {
      setTimeout(() => {
        setLoadingStream(false);
        // Replace query params: remove fromForm=true and add id with trip id
        if (streamedData.data && streamedData.data.id) {
          const params = new URLSearchParams();
          params.set('id', streamedData.data.id);
          window.history.replaceState({}, '', `?${params.toString()}`);
        }
      }, 3000);
    }
  };

  useEffect(() => {
    // if (id) {
    //   fetchItineraryById(id);
    // } else if (fromForm) {
    //   streamItineraryFromForm();
    // } else {
    //   setLoadingStream(false);
    // }
    handleStreamedData(dummyData);
  }, [id, fromForm]);

  // Load data from Redux if available (booking confirmation data)
  useEffect(() => {
    if (tripDataFromRedux && tripDataFromRedux.id && tripDataFromRedux.day_plans) {
      setData(tripDataFromRedux);
      setDays(tripDataFromRedux.day_plans || []);
      setLoadingStream(false);
    }
  }, [tripDataFromRedux]);

  // Show booking confirmation modal when Redux data has booking confirmation
  useEffect(() => {
    if (tripDataFromRedux && (tripDataFromRedux as any).booking_id) {
      setBookingConfirmationData(tripDataFromRedux);
      setShowBookingConfirmation(true);
    }
  }, [tripDataFromRedux]);

  return (
    <div className="relative w-full min-h-screen bg-gray-50">
      {errorInApiCall.hasError ? (
        <div className="border w-full h-full flex flex-col items-center  p-2">
          <div className="w-1/2">
            <Alert severity="error" className="text-center">
              {errorInApiCall.message}
            </Alert>
          </div>
          <ItinaryForm
            onSubmit={() => {
              streamItineraryFromForm();
            }}
          />
        </div>
      ) : (
        <div>
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
            {!loadingStream && (
              <ChatBot
                chats={[]}
                updateValues={function (value: Trip): void {
                  console.log(value);
                }}
              />
            )}
            <div>
              {data && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* ChatBot Fixed */}

                  {/* Header Hero Section */}
                  <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white pt-6 pb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      {/* Top Controls */}
                      <div className="flex justify-between items-start mb-8">
                        <motion.button
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => navigate(-1)}
                          className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                          <ArrowBackIcon sx={{ fontSize: "24px" }} />
                        </motion.button>
                        <motion.button
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                          <ShareIcon sx={{ fontSize: "24px" }} />
                        </motion.button>
                      </div>

                      {/* Title Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-8"
                      >
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">
                          {data.destination}
                        </h1>
                        <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                          <Calendar size={18} />
                          <span>
                            {moment(data.start_date).format("MMM DD")} -{" "}
                            {moment(data.end_date).format("MMM DD, YYYY")}
                          </span>
                          <span className="text-white/70 ml-2">
                            • {data.duration_days} days
                          </span>
                        </div>
                      </motion.div>

                      {/* Quick Stats Grid */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                      >
                        {/* Travelers */}
                        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Users size={20} className="text-white/80" />
                            <p className="text-white/80 text-sm">Travelers</p>
                          </div>
                          <p className="text-2xl font-bold">
                            {data.traveler_count}
                          </p>
                        </div>

                        {/* Total Budget */}
                        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign size={20} className="text-white/80" />
                            <p className="text-white/80 text-sm">Budget</p>
                          </div>
                          <p className="text-2xl font-bold">
                            ₹{(data.budget / 1000).toFixed(1)}K
                          </p>
                        </div>

                        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign size={20} className="text-white/80" />
                            <p className="text-white/80 text-sm">Total Cost</p>
                          </div>
                          <p className="text-2xl font-bold">
                            ₹{(data.total_cost / 1000).toFixed(1)}
                          </p>
                        </div>

                        <div
                          className={`bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20 ${
                            data.saved > 0 ? "bg-green-500/20" : "bg-red-500/20"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingDown size={20} className="text-white/80" />
                            <p className="text-white/80 text-sm">
                              {data.saved > 0 ? "Saved" : "Over Budget"}
                            </p>
                          </div>
                          <p
                            className={`text-2xl font-bold ${
                              data.saved > 0 ? "text-green-300" : "text-red-400"
                            }`}
                          >
                            ₹{Math.abs(data.saved / 1000).toFixed(1)}K
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Weather Info */}
                    {data.weather_info && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
                      >
                        <h2
                          className="text-xl font-semibold mb-4 flex items-center gap-2"
                          style={{ color: "#2093EF" }}
                        >
                          <MapPin size={24} />
                          Weather & Climate
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-gray-600 text-sm mb-1">
                              Temperature Range
                            </p>
                            <p className="text-md font-medium text-gray-900">
                              {data.weather_info.avg_min_temp.toFixed(0)}°C -{" "}
                              {data.weather_info.avg_max_temp.toFixed(0)}°C
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600 text-sm mb-1">Season</p>
                            <p className="text-md font-medium text-gray-900 capitalize">
                              {data.weather_info.season}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-600 text-sm mb-1">
                              Condition
                            </p>
                            <p className="text-md font-medium text-gray-900">
                              {data.weather_info.description}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <p className="font-semibold text-amber-900 mb-2">
                            💡 Recommendation
                          </p>
                          <p className="text-amber-800 text-sm">
                            {data.weather_info.recommendation}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Budget Breakdown */}
                    {data.budget_breakdown &&
                      data.budget_breakdown.total_cost && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="mb-8"
                        >
                          <ItineraryBreakDown
                            trip={data}
                            breakDown={data.budget_breakdown}
                          />
                        </motion.div>
                      )}

                    {/* Tabs Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="bg-white rounded-xl shadow-sm border border-gray-200"
                    >
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                          value={mainActiveTab}
                          onChange={handleMainTabChange}
                          aria-label="main tabs"
                          sx={{
                            "& .MuiTabs-indicator": {
                              backgroundColor: "#2093EF",
                            },
                            "& .Mui-selected": { color: "#2093EF !important" },
                            px: 2,
                          }}
                        >
                          <Tab
                            sx={{ textTransform: "inherit", fontWeight: 500 }}
                            label="📅 Day By Day"
                          />
                          <Tab
                            sx={{ textTransform: "inherit", fontWeight: 500 }}
                            label="🏨 Accommodations"
                          />
                          <Tab
                            sx={{ textTransform: "inherit", fontWeight: 500 }}
                            label="✈️ Travel"
                          />
                        </Tabs>
                      </Box>

                      <div className="px-2 ">
                        {/* Day By Day Tab */}
                        {mainActiveTab == 0 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Box
                              sx={{
                                maxWidth: "100%",
                                bgcolor: "background.paper",
                              }}
                            >
                              <Tabs
                                value={dayActiveTab}
                                onChange={handleDayTabChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="day tabs"
                                sx={{
                                  "& .MuiTabs-indicator": {
                                    backgroundColor: "#2093EF",
                                  },
                                  "& .Mui-selected": {
                                    color: "#2093EF !important",
                                  },
                                  mb: 1,
                                }}
                              >
                                {days?.map((_day: any, index: number) => {
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
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              key={dayActiveTab}
                            >
                              <DayCard
                                index={dayActiveTab}
                                dayInfo={days ? days[dayActiveTab] : []}
                              />
                            </motion.div>
                          </motion.div>
                        )}

                        {/* Accommodations Tab */}
                        {mainActiveTab == 1 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {data.accommodations &&
                            data.accommodations.length > 0 ? (
                              <div className="space-y-4 py-2">
                                {data.accommodations.map(
                                  (accommodation: any, index: number) => (
                                    <AccommodationCard
                                      key={index}
                                      accommodation={accommodation}
                                    />
                                  )
                                )}
                              </div>
                            ) : loadingStream ? (
                              <div className="space-y-4">
                                {[0, 1, 2].map((index) => (
                                  <div key={index} className="flex gap-4">
                                    <Skeleton
                                      width="45px"
                                      height="140px"
                                      variant="rounded"
                                      delay={index * 100}
                                    />
                                    <div className="flex-1 space-y-3">
                                      <Skeleton
                                        width="60%"
                                        height="20px"
                                        variant="text"
                                        delay={index * 100}
                                      />
                                      <Skeleton
                                        width="40%"
                                        height="16px"
                                        variant="text"
                                        delay={index * 100 + 50}
                                      />
                                      <Skeleton
                                        width="100%"
                                        height="16px"
                                        variant="text"
                                        delay={index * 100 + 100}
                                      />
                                      <Skeleton
                                        width="80%"
                                        height="16px"
                                        variant="text"
                                        delay={index * 100 + 150}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="flex items-center justify-center p-12 bg-gray-50 rounded-lg">
                                <p className="text-gray-500 font-medium">
                                  No accommodations available.
                                </p>
                              </div>
                            )}
                          </motion.div>
                        )}

                        {/* Travel Tab */}
                        {mainActiveTab == 2 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {data.main_transport &&
                            data.main_transport.length > 0 ? (
                              <div className="space-y-4 ">
                                {data.main_transport.map(
                                  (transport: any, index: number) => (
                                    <MainTransportCard
                                      key={index}
                                      transport={transport}
                                    />
                                  )
                                )}
                              </div>
                            ) : loadingStream ? (
                              <div className="space-y-4">
                                {[0, 1].map((index) => (
                                  <div key={index} className="flex gap-4">
                                    <Skeleton
                                      width="45px"
                                      height="120px"
                                      variant="rounded"
                                      delay={index * 100}
                                    />
                                    <div className="flex-1 space-y-3">
                                      <Skeleton
                                        width="50%"
                                        height="20px"
                                        variant="text"
                                        delay={index * 100}
                                      />
                                      <Skeleton
                                        width="70%"
                                        height="16px"
                                        variant="text"
                                        delay={index * 100 + 50}
                                      />
                                      <Skeleton
                                        width="100%"
                                        height="16px"
                                        variant="text"
                                        delay={index * 100 + 100}
                                      />
                                      <Skeleton
                                        width="60%"
                                        height="16px"
                                        variant="text"
                                        delay={index * 100 + 150}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="flex items-center justify-center p-12 bg-gray-50 rounded-lg">
                                <p className="text-gray-500 font-medium">
                                  No transport available.
                                </p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Insights Section */}
                    <div className="mt-12">
                      {data.highlight_activities &&
                      data.highlight_activities.length > 0 ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <DisplayCard
                            icon={<Star color="#2093EF" size={24} />}
                            title={" Highlights"}
                            data={data.highlight_activities}
                            delay={0.6}
                          />
                        </motion.div>
                      ) : loadingStream ? (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                          <Skeleton
                            width="150px"
                            height="28px"
                            variant="text"
                          />
                          <div className="mt-4 space-y-3">
                            {[0, 1, 2].map((index) => (
                              <Skeleton
                                key={index}
                                width="100%"
                                height="60px"
                                variant="rounded"
                                delay={index * 100}
                              />
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {data.local_insights && data.local_insights.length > 0 ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                          className="mt-8"
                        >
                          <DisplayCard
                            icon={<Lightbulb color="#2093EF" size={24} />}
                            title={" Local Insights"}
                            data={data.local_insights}
                            delay={0.7}
                          />
                        </motion.div>
                      ) : loadingStream ? (
                        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                          <Skeleton
                            width="150px"
                            height="28px"
                            variant="text"
                          />
                          <div className="mt-4 space-y-3">
                            {[0, 1, 2].map((index) => (
                              <Skeleton
                                key={index}
                                width="100%"
                                height="60px"
                                variant="rounded"
                                delay={index * 100}
                              />
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {data.travel_tips && data.travel_tips.length > 0 ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          className="mt-8"
                        >
                          <DisplayCard
                            icon={<Compass color="#2093EF" size={24} />}
                            title={" Travel Tips"}
                            data={data.travel_tips}
                            delay={0.8}
                          />
                        </motion.div>
                      ) : loadingStream ? (
                        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                          <Skeleton
                            width="130px"
                            height="28px"
                            variant="text"
                          />
                          <div className="mt-4 space-y-3">
                            {[0, 1, 2].map((index) => (
                              <Skeleton
                                key={index}
                                width="100%"
                                height="60px"
                                variant="rounded"
                                delay={index * 100}
                              />
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* Bottom Padding */}
                    <div className="h-20"></div>
                  </div>
                </motion.div>
              )}
            </div>
          </AnimatePresence>

          {/* Fixed Booking Component */}
          {data && !loadingStream && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`fixed bottom-0 left-0 z-100 right-0 bg-gradient-to-t from-white via-white to-white/90 border-t border-gray-200 shadow-2xl  transition-all duration-300 ${
                summaryExpanded
                  ? "h-auto max-h-[80vh] overflow-y-auto"
                  : "h-[12vh]"
              }`}
            >
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-2  ">
                {/* Main Booking Bar */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between   ">
                  {/* Left: Trip Summary */}
                  <div className="flex-1 w-full">
                    <motion.button
                      onClick={() => setSummaryExpanded(!summaryExpanded)}
                      className="w-full py-1 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center justify-between mb-0 "
                    >
                      <span className="font-semibold text-gray-700 text-sm">
                        {summaryExpanded ? "Hide" : "Show"} Price Breakdown
                      </span>
                      <motion.div
                        animate={{ rotate: summaryExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={20} className="text-gray-600" />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Right: Price & Button */}
                  <div className="flex items-center justify-between w-full mt-1 ">
                    {data.total_cost && (
                      <div className="text-right">
                        <p className="text-xs text-gray-600 mb-1">
                          Total Price for {data.traveler_count} traveler
                          {data.traveler_count > 1 ? "s" : ""}
                        </p>
                        <p
                          className="text-3xl font-bold"
                          style={{ color: "#2093EF" }}
                        >
                          ₹
                          {data.total_cost.toLocaleString("en-IN", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </p>
                      </div>
                    )}

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 25px -5px rgba(32, 147, 239, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        // Save trip data to Redux
                        if (data) {
                          dispatch(addTrip({
                            ...data,
                            traveler_count: data.traveler_count,
                            budget: data.budget,
                            source: data.source,
                            start_date: data.start_date,
                            end_date: data.end_date,
                          }));
                          // Navigate to booking page
                          navigate('/confirm-booking');
                        }
                      }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #2093EF 0%, #1678D4 100%)",
                      }}
                    >
                      <span>Book Now</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </div>

                {/* Summary Toggle Button */}

                {/* Expandable Summary Section */}
                <AnimatePresence>
                  {summaryExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-lg border border-gray-200 p-6 space-y-4"
                    >
                      {/* Trip Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-xs text-gray-600 font-semibold uppercase">
                            Duration
                          </p>
                          <p className="text-lg font-bold text-gray-900">
                            {data.duration_days} days
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-semibold uppercase">
                            Travelers
                          </p>
                          <p className="text-lg font-bold text-gray-900">
                            {data.traveler_count} person
                            {data.traveler_count > 1 ? "s" : ""}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-semibold uppercase">
                            Travel Style
                          </p>
                          <p className="text-lg font-bold text-gray-900 capitalize">
                            {data.travel_style || "Standard"}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-semibold uppercase">
                            Trip Type
                          </p>
                          <p className="text-lg font-bold text-gray-900">
                            {data.source} → {data.destination}
                          </p>
                        </div>
                      </div>

                      {/* Budget Breakdown */}
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Cost Breakdown
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center pb-2">
                            <span className="text-gray-600">Accommodation</span>
                            <span className="font-semibold text-gray-900">
                              ₹
                              {data.budget_breakdown?.accommodation?.toLocaleString(
                                "en-IN",
                                { maximumFractionDigits: 0 }
                              ) || "0"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span className="text-gray-600">Transport</span>
                            <span className="font-semibold text-gray-900">
                              ₹
                              {data.budget_breakdown?.transport?.toLocaleString(
                                "en-IN",
                                { maximumFractionDigits: 0 }
                              ) || "0"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span className="text-gray-600">Activities</span>
                            <span className="font-semibold text-gray-900">
                              ₹
                              {data.budget_breakdown?.activities?.toLocaleString(
                                "en-IN",
                                { maximumFractionDigits: 0 }
                              ) || "0"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span className="text-gray-600">Meals</span>
                            <span className="font-semibold text-gray-900">
                              ₹
                              {data.budget_breakdown?.meals?.toLocaleString(
                                "en-IN",
                                { maximumFractionDigits: 0 }
                              ) || "0"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-2">
                            <span className="text-gray-600">Miscellaneous</span>
                            <span className="font-semibold text-gray-900">
                              ₹
                              {data.budget_breakdown?.miscellaneous?.toLocaleString(
                                "en-IN",
                                { maximumFractionDigits: 0 }
                              ) || "0"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center border-t border-gray-200 pt-2 mt-2">
                            <span className="font-semibold text-gray-900">
                              Total
                            </span>
                            <span
                              className="font-bold text-lg"
                              style={{ color: "#2093EF" }}
                            >
                              ₹
                              {data.total_cost.toLocaleString("en-IN", {
                                maximumFractionDigits: 0,
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Budget vs Actual */}
                      {data.budget && (
                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Budget Summary
                          </h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center pb-2">
                              <span className="text-gray-600">Your Budget</span>
                              <span className="font-semibold text-gray-900">
                                ₹
                                {data.budget.toLocaleString("en-IN", {
                                  maximumFractionDigits: 0,
                                })}
                              </span>
                            </div>
                            <div className="flex justify-between items-center pb-2">
                              <span className="text-gray-600">Actual Cost</span>
                              <span className="font-semibold text-gray-900">
                                ₹
                                {data.total_cost.toLocaleString("en-IN", {
                                  maximumFractionDigits: 0,
                                })}
                              </span>
                            </div>
                            <div
                              className={`flex justify-between items-center border-t border-gray-200 pt-2 mt-2 ${
                                data.saved > 0
                                  ? "text-green-600"
                                  : "text-red-900"
                              }`}
                            >
                              <span className="font-semibold">
                                {data.saved > 0
                                  ? "Amount Saved"
                                  : "Over Budget"}
                              </span>
                              <span className="font-bold text-lg">
                                ₹
                                {Math.abs(data.saved).toLocaleString("en-IN", {
                                  maximumFractionDigits: 0,
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Booking Confirmation Modal */}
      <BookingConfirmationModal
        isOpen={showBookingConfirmation}
        bookingData={bookingConfirmationData}
        onClose={() => setShowBookingConfirmation(false)}
      />
    </div>
  );
};

export default ItineraryInfo;
