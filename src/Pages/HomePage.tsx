import { useNavigate } from "react-router-dom";

import type { iSliderItem } from "../utils/customeTypo";
import { guideCities } from "../utils/constants";
import SearchIcon from "@mui/icons-material/Search";
import PlaceAutocompleteInput from "../customComponents/UseGoogleMapSearch";
import { useState } from "react";
import { motion } from "motion/react";
import CustomeSlider from "../customComponents/customSliderNew";
import ChatInterface from "../Components/ChatInterface";
import ItinaryForm from "../Components/Form";
const HomePage = () => {
  const navigate = useNavigate();
  const Cities: iSliderItem[] = guideCities;
  const [search, setSearch] = useState("");
  const CreateItinerary = () => {
    navigate("/Itinerary");
  };
  const Opendestination = (destination: string) => {
    navigate("/Destination" + "?destination=" + destination);
  };
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white pt-6 pb-12">
        <ItinaryForm onSubmit={()=>{
          navigate("/itinerary?fromForm=true");
        }}/>
      </div>

      <div className="flex w-[100vw]  pb-5 bg-white flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-between sm:py-2 md:py-3 py-10 sm:px-2 md:px-3 px-3  ">
        <div className="sm:w-full md:w-full  lg:w-1/2 flex   justify-center flex-col  h-full ">
          <h1 className="text-4xl font-black leading-tight tracking-tighter sm:text-5xl lg:text-6xl text-[#111618] ">
            Your Perfect Trip, Reimagined.
          </h1>
          <h2 className="text-base sm:text-lg font-normal text-gray-600 dark:text-gray-400  my-5">
            Let our AI craft a personalized itinerary in seconds, tailored to
            your interests and budget.
          </h2>
          <p
            onClick={CreateItinerary}
            className="px-5  py-2 rounded-[20px] w-fit text-white"
            style={{ backgroundColor: "#2093EF" }}
          >
            Generate Itienenary with Gen AI
          </p>
        </div>
        <div className="sm:w-full md:w-full lg:w-1/3 sm:mt-4 md:mt-5 lg:mt-0 ">
          <p className=" text-xl font-semibold mt-5">
            Just Search Destination, Let{" "}
            <span style={{ color: "#2093EF" }} className="underline">
              AI
            </span>{" "}
            do the job.
          </p>
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="flex items-center  h-[70px]"
          >
            <PlaceAutocompleteInput
              title={""}
              height="h-[80px]"
              value={search}
              errorMessage={""}
              onPlaceSelect={(value: string) => {
                setSearch(value);
              }}
            />
            <button
              onClick={() => {
                Opendestination(search);
              }}
              className="ml-2 cursor-pointer"
            >
              <SearchIcon sx={{ fontSize: "28px" }} />
            </button>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.7,
            }}
            className="h-[70vh]"
          >
            <CustomeSlider
              items={Cities}
              onClick={(item: iSliderItem, index: number) => {
                Opendestination(item.name);

                console.log({
                  item,
                  index,
                });
              }}
            />
          </motion.div>
        </div>
      </div>
      <ChatInterface />
    </div>
  );
};

export default HomePage;
