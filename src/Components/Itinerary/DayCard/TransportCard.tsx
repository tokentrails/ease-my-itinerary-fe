/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";

import { Clock, AlertTriangle, Car } from "lucide-react";
import { capitalizeFirstLetter } from "../../../utils/constants";
// MUI icons replaced with lucide-react icons
import { motion } from "motion/react";

interface Props {
  transport: any;

  dayInfo: any;
  index: number;
  isLast: boolean;
}

const TimeLine = () => {
  const SelectedIcon = <Car className="w-6 h-6" color="#2093EF" />;

  return (
    <div className=" w-[45px] relative h-full  flex flex-col items-center">
      <div
        className="border-1 absolute top-3 z-100 -left-0  md:left-0 border-gray-300 shadow w-[45px] h-[45px] flex items-center justify-center rounded-[60px]"
        style={{ backgroundColor: "#eaf3ff" }}
      >
        {SelectedIcon}
      </div>
      <div className="transition delay-150 duration-300 border-1  w-0 h-full border-gray-300"></div>
    </div>
  );
};

const TransportCard = (props: Props) => {
  const { transport } = props;
  const open = true;

  
  return (
    <div
      className="flex relative overflow-hidden  w-full cursor-pointer"

      tabIndex={0}

      role="button"
      aria-expanded={open}
    >
      <div className="w-[45px]">
        <TimeLine />
      </div>
      <div className="flex-1">
        <div className="p-3  bg-white  rounded-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between gap-4">
            <div className="flex flex-col">
              <p style={{ color: "#2093EF" }}>
                {capitalizeFirstLetter(transport.transport!.mode)}
              </p>
              <p className=" text-sm  text-gray-500">
                {moment(transport.start_time, "HH:mm").format("hh:mm a")} -{" "}
                {moment(transport.end_time || "", "HH:mm").format("hh:mm a")}
              </p>
            </div>
            {transport.transport &&
            transport.transport.cost &&
            transport.transport.cost != 0 ? (
              <div className="flex items-end gap-4 md:gap-0 md:flex-col md:items-end w-full md:w-auto">
                <p className="font-medium text-lg">
                  ₹{transport.transport!.cost.toFixed(2).toLocaleString()}
                </p>
                <p className="text-sm text-gray-400">
                  ₹{transport.transport!.cost_per_person.toFixed(2)}/person
                </p>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start"></div>

      

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: open ? 1 : 0,
              maxHeight: open ? "1000px" : "0px",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col w-full">
              <div className="flex items-start gap-3 w-full">
                <div className="flex-1">
                  <p className=" font-regular text-black">
                    {transport.transport!.from_location.name}
                  </p>
                  <p className=" text-gray-400 text-sm">
                    {transport.transport!.from_location.city},{" "}
                    {transport.transport!.from_location.state}
                  </p>
                  <p style={{ color: "#2093EF" }} className="text-sm">
                    {moment(transport.start_time, "HH:mm").format("hh:mm a")}
                  </p>
                </div>
              </div>

              <div className="min-w-[100px] relative min-h-[20px] mx-2 my-2">
                <div className="absolute bg-white top-3"></div>
                <div className="w-full md:w-[120px] h-[50px] border-l-2 border-dashed flex items-center border-gray-500">
                  <div className="flex items-center pl-2">
                    <Clock className="w-5 h-5" color="#2093EF" />
                    <p
                      className="text-sm font-semibold ml-2"
                      style={{ color: "#2093EF" }}
                    >
                      {transport.transport!.duration}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 w-full">
                <div className="flex-1">
                  <p className=" font-regular text-black">
                    {transport.transport!.to_location.name}
                  </p>
                  <p className=" text-gray-400 text-sm">
                    {transport.transport!.to_location.city},{" "}
                    {transport.transport!.to_location.state}
                  </p>
                  <p style={{ color: "#2093EF" }} className="text-sm">
                    {moment(transport.end_time || "", "HH:mm").format(
                      "hh:mm a"
                    )}
                  </p>
                </div>
              </div>
            </div>
            <hr className="text-gray-300 my-5" />
            <div className="px-2 flex flex-col md:flex-row items-start md:items-center justify-between text-gray-500">
              <div>
                <p className="text-sm  md:mt-0">
                  {transport.transport!.description}
                </p>
              </div>
            </div>
            <div className="">
              {transport.transport &&
                transport.transport.notes &&
                transport.transport.notes.length > 0 && (
                  <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded">
                    <div className="flex gap-2">
                      <AlertTriangle
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        color="#ef6614"
                      />
                      <div className="text-sm text-amber-700">
                        {transport.transport!.notes![0]}
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TransportCard;
