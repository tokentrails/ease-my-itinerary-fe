/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { motion } from "motion/react";

interface Props {
  data: string[];
  icon: any;
  title: string;
  delay: number;
}

const DisplayCard = (props: Props) => {
  const { data, icon, title, delay = 0.2 } = props;
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: delay,
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="overflow-hidden w-full  transition-height bg-gray-100  duration-700 shadow-lg px-5 rounded-xl py-4 my-5"
      style={{
        transition: "all 0.5s ease-in-out",
        maxWidth: "100%",
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
      <div
        className={`transition-max-height duration-400 ease-in-out overflow-hidden ${
          open ? "max-h-[40rem]" : "max-h-0"
        }`}
      >
        {data.length > 0&& open &&
          data.map((i, index) => {
            return (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  
                }}

                transition={{
                  duration: 0.7,
                  delay: index*0.1,
                }}
              >

                <p
                  className="px-3 text-sm text-gray-500 py-2 rounded-xl"
                  key={index}
                >
                  {i}
                </p>
              </motion.div>
            );
          })}
      </div>
    </motion.div>
  );
};

export default DisplayCard;
