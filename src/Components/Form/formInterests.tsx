/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Popover } from "@mui/material";

// Define the props for the component
interface FormInterestsProps {
  value: string[];
  title: string;
  titleStyle?: any;
  errorMessage?: string;
  Icon?: any;
  placeholder?: string;
  interests: Array<{ id: string; name: string; icon?: React.ReactNode }>;
  onInterestsChange: (interests: string[]) => void;
}

const FormInterests: React.FC<FormInterestsProps> = ({
  Icon,
  title,
  titleStyle,
  value,
  errorMessage,
  onInterestsChange,
  placeholder = "Select interests",
  interests,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleInterest = (interestName: string) => {
    if (value.includes(interestName)) {
      onInterestsChange(value.filter((i) => i !== interestName));
    } else {
      onInterestsChange([...value, interestName]);
    }
  };

  const open = Boolean(anchorEl);

  return (
    <div className={`w-full`}>
      <div className="flex items-center space-x-2 my-2 justify-start">
        <p
          className="text-xs font-semibold text-gray-400"
          style={titleStyle && titleStyle}
        >
          {title}
        </p>
      </div>

      {/* Display Area - Always Visible */}
      <div
        onClick={handleClick}
        className={`rounded-[5px] min-h-[45px] overflow-hidden flex items-center gap-2 cursor-pointer py-1 px-2 transition-all duration-200 ${
          errorMessage ? "bg-red-50" : "bg-white hover:bg-gray-50"
        }`}
      >
        <div className="flex-1">
          {value.length > 0 ? (
            <p className="font-semibold text-xl text-gray-700">
              {value.length} selected
            </p>
          ) : (
            <p className="font-semibold text-xl text-gray-400">{placeholder}</p>
          )}
        </div>
        <div className="text-gray-500 flex-shrink-0">{Icon && Icon}</div>
      </div>

     

      {/* Interests Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="p-4 w-full max-w-md">
          <div className="grid grid-cols-3 gap-2">
            {interests.map((interest) => (
              <div
                key={interest.id}
                onClick={() => toggleInterest(interest.name)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-2 flex items-center justify-center flex-col gap-1 ${
                  value.includes(interest.name)
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "bg-gray-100 text-gray-500 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {interest.icon && <div className="text-lg">{interest.icon}</div>}
                <span>{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default FormInterests;
