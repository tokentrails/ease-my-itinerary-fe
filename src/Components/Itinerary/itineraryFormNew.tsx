import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import validationSchema from "../../Validations/ItineraryFormValidation";
import { motion } from "motion/react";
import PlaceAutocompleteInput from "../UseGoogleMapSearch";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DateComponent from "../dateComponent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InputSelect from "../selectorComponent";
import PeopleIcon from "@mui/icons-material/People";
import InputComponent from "../inputComponent";
import MoneyIcon from "@mui/icons-material/Money";
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
      console.log(values);
    },
  });
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
      <div className="sm:w-[90%] rounded-2xl p-2 lg:w-[70%] shadow-2xl">
        <div>
          <p className="font-semibold my-5 text-3xl text-center">
            Plan your next adventure
          </p>
          <p className="text-center">Create a personalized itinerary </p>
        </div>

        <div className="my-4">
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
              <div className="flex w-full flex-wrap items-center justify-between">
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
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ItineraryForm;
