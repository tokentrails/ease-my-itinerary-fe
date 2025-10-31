import { useState } from "react";
import type { BudgetBreakdown, Trip } from "../../Helper/ApiResponseInterface";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { HandCoins } from "lucide-react";

interface Props {
  trip: Trip;
  breakDown: BudgetBreakdown;
}
const ItimeraryBreakDown = (props: Props) => {
  const [open, setOpen] = useState(true);
  const { breakDown, trip } = props;
  return (
    <div
      className="overflow-hidden w-full transition-height bg-gray-100  duration-700 shadow-lg px-5 rounded-xl py-4 my-5"
      style={{
        transition:"all 0.5s ease-in-out",
        maxWidth:"100%",
        minWidth:"300px"
      }}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="flex items-center justify-between w-full" 
      >
      <div className="flex items-center">
          <HandCoins size={24} color="#2093EF" />
           <p className="font-semibold ml-1 text-left">Budget & Cost Breakdown</p>
        </div>
       
       <div className="flex items-center">
        <div className="flex flex-row-reverse items-center">
          <p className="ml-2 font-bold text-xl" style={{ color: '#2093EF' }}>
          ₹{trip.total_cost.toFixed(2).toLocaleString()}
        </p>
        
           {trip.saved && trip.saved>0 && <span className="text-sm mt-1 text-green-700 text-black-400">₹{trip.saved.toFixed(2).toLocaleString()} saved </span>}
        </div>
         
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <KeyboardArrowDownOutlinedIcon
             className={`w-6 h-6 text-gray-500 transition-transform duration-300 ease-in-out ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        
       </div>
       
      </button>
        <div className="w-full h-[15px] mt-3 overflow-hidden rounded-xl bg-gray-300 ">
        <div
          className={`h-full w-[${
            (trip.total_cost / trip.budget) * 100
          }%]`}
          style={{ backgroundColor: '#2093EF' }}
        />
      </div>
      
        <div  className={`transition-max-height duration-400 ease-in-out overflow-hidden ${
          open ? "max-h-[40rem]" : "max-h-0"
        }`}>
          <div className="flex my-2 mt-5  items-center justify-between px-4">
            <p>Accommodation</p>
            <p>₹{breakDown.accommodation.toFixed(2).toLocaleString()}</p>
          </div>
          <div className="flex my-2  items-center justify-between px-4">
            <p>Transport</p>
            <p>₹{breakDown.transport.toFixed(2).toLocaleString()}</p>
          </div>
          <div className="flex my-2  items-center justify-between px-4">
            <p>Activities</p>
            <p>₹{breakDown.activities.toFixed(2).toLocaleString()}</p>
          </div>
          <div className="flex my-2  items-center justify-between px-4">
            <p>Meals</p>
            <p>₹{breakDown.meals.toFixed(2).toLocaleString()}</p>
          </div>
          <div className="flex my-2 items-center justify-between px-4">
            <p>Miscellaneous</p>
            <p>₹{breakDown.miscellaneous.toFixed(2).toLocaleString()}</p>
          </div>
        </div>

    </div>
  );
};

export default ItimeraryBreakDown;
