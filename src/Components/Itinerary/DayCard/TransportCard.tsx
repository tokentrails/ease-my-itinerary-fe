import moment from "moment";
import type { DayPlan, Transport } from "../../../Helper/ApiResponseInterface";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
interface Props {
  transport: Transport;
  dayInfo: DayPlan;
  index: number;
}

const TransportCard = (props: Props) => {
  const { transport } = props;
  return (
    <div className="shadow-lg p-3 bg-white my-2 ml-2 mt-5 rounded-xl">
      <div className="flex justify-between items-center">
        <p className="text-xl ml-2 font-medium py-3">{transport.mode}</p>
        {transport.cost && transport.cost != 0 ? (
          <div className="text-right">
            <p className="font-medium text-lg">₹{transport.cost.toLocaleString()}</p>
            <p className="text-sm text-gray-400">
              ₹{transport.cost_per_person}/person
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col ">
        <div className="flex items-center">
          <p className="px-2 text-sm py-2 bg-cyan-500 rounded-[300px]">
            {moment(transport.departure_time, "HH:mm").format("hh:mm a")}
          </p>
          <div className="ml-2 ">
            <p className=" font-regular">{transport.from_location.name}</p>
            <p className="text-sm text-gray-400">
              {" "}
              {transport.from_location.city}, {transport.from_location.state}
            </p>
          </div>
        </div>

        <div className="min-w-[100px]  relative min-h-[20px] mx-2">
          <div className="absolute bg-white top-3"></div>
          <div className="w-0 ml-3 h-[20px] border-2 border-cyan-500"></div>
        </div>
        <div className="flex items-center">
          <p className="px-2 text-sm py-2 bg-cyan-500 rounded-[300px]">
            {moment(transport.arrival_time, "HH:mm").format("hh:mm a")}
          </p>
          <div className="ml-2 ">
            <p className=" font-regular">{transport.to_location.name}</p>
            <p className="text-sm text-gray-400">
              {transport.to_location.city}, {transport.to_location.state}
            </p>
          </div>
        </div>
      </div>
      <hr className="text-gray-300 my-5" />
      <div className="px-2 flex items-center justify-between text-gray-500">
        <div className="flex items-center ">
          <AccessTimeIcon sx={{ fontSize: "16px" }} />
          <p className="text-sm ml-2">{transport.duration}</p>
        </div>
        <div>
          <p className="text-sm">{transport.description}</p>
        </div>
      </div>
      <div className="">
        {transport.notes && transport.notes.length > 0 && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded">
            <div className="flex gap-2">
              <WarningAmberIcon className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-amber-700">{transport.notes[0]}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransportCard;
