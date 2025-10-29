import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import type { Activity } from "../../../Helper/ApiResponseInterface";
import moment from "moment";
interface ActivityProps {
  activity: Activity;
  index: number;
  isLast: boolean;
}
const ActivityList = (props: ActivityProps) => {
  const { activity, index, isLast } = props;
  return (
    <div className="grid pr-3 " style={{ gridTemplateColumns: "35px 1fr" }}>
      <div className="flex flex-col items-center">
        <div className="h-[30px] w-[30px] border-cyan-500 flex justify-center items-center border-3 rounded-[30px]">
          {index + 1}
        </div>
        {!isLast && (
          <div className="h-[70%] w-[2px] bg-gray-500 rounded-xl"></div>
        )}
      </div>
      <div className="shadow-lg p-3 my-5 ml-2 bg-white rounded-xl">
        <div className="flex text-cyan-600   justify-between items-center">
          <div className="flex items-center">
            <AccessTimeOutlinedIcon sx={{ fontSize: "14px" }} />
            <p className="ml-2">
              {moment(activity.start_time, "HH:mm").format("h:mm a")} -{" "}
              {moment(activity.end_time, "HH:mm").format("h:mm a")}
            </p>
          </div>

          {activity.cost && activity.cost != 0 ? (
            <div className="flex flex-col justify-end items-end">
              <p className="font-medium text-lg text-black">
                ₹{activity.cost.toFixed(2).toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">
                ₹{activity.cost_per_person.toFixed(2)}/person
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="text-md font-medium mt-2">{activity.name}</p>
        <p className="text-sm text-gray-500 ">{activity.description}</p>
      </div>
    </div>
  );
};
export default ActivityList;
