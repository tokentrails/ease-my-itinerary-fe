/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

interface Props {
  data: string[];
  icon: any;
  title: string;
}

const DisplayCard = (props: Props) => {
  const { data, icon,title } = props;
  const [open, setOpen] = useState(true);
  return (
    <div
      className="overflow-hidden w-max-[500px] transition-height bg-gray-100  duration-700 shadow-lg px-5 rounded-xl py-4 my-5"
      style={{
        transition: "all 0.5s ease-in-out",
        maxWidth: "100%",
        minWidth: "300px",
      }}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="flex items-center cursor-pointer justify-between w-full"
      >
        <div className="flex items-center">
            {icon}
            <p className="font-semibold  ml-1 text-left">{title}</p>
        </div>
        <div className="flex items-center">
         

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
      <div className={`transition-max-height duration-400 ease-in-out overflow-hidden ${
          open ? "max-h-[40rem]" : "max-h-0"
        }`}>
        {data.length>0 && data.map((i,index)=>{
            return <p className="px-3 text-sm text-gray-500 py-2 rounded-xl mt-2" key={index}>{i}</p>
        })}
      </div>
    </div>
  );
};

export default DisplayCard;
