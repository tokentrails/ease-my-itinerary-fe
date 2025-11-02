/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Popover } from "@mui/material";
import { ChevronDown } from "lucide-react";

// Define the props for the component
interface MultiSelectDropdownProps {
  value: string[];
  title: string;
  titleStyle?: any;
  errorMessage?: string;
  Icon?: any;
  placeholder?: string;
  options: Array<{ id: string; name: string; icon?: React.ReactNode }>;
  onSelectionChange: (selected: string[]) => void;
  maxSelections?: number;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  Icon,
  title,
  titleStyle,
  value,
  errorMessage,
  onSelectionChange,
  placeholder = "Select options",
  options,
  maxSelections,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleOption = (optionName: string) => {
    if (value.includes(optionName)) {
      onSelectionChange(value.filter((i) => i !== optionName));
    } else {
      // Check if max selections reached
      if (maxSelections && value.length >= maxSelections) {
        return;
      }
      onSelectionChange([...value, optionName]);
    }
  };

  const open = Boolean(anchorEl);

  return (
    <div className={`w-full`}>
      <div className="flex items-center my-2 justify-start">
        {Icon && <div className="text-gray-500">{Icon}</div>}
        <p
          className={`text-xs font-semibold  ${ errorMessage ? "text-red-500" : "text-gray-500" }`}
          style={titleStyle && titleStyle}
        >
          {title}
        </p>
      </div>

      {/* Display Area - Always Visible */}
      <div
        onClick={handleClick}
        className={`rounded-[5px] min-h-[45px] overflow-hidden flex items-center gap-2 cursor-pointer py-2 px-0 transition-all duration-200 `}
      >
        <div className="">
          {value.length > 0 ? (
            <p className="font-semibold text-sm text-gray-700">
              {value[0]}{value.length > 1 && ` + ${value.length - 1}`}
            </p>
          ) : (
            <p className="font-semibold text-sm text-gray-400">{placeholder}</p>
          )}
        </div>
        <div className="text-gray-500 flex-shrink-0 flex items-center gap-1">
          {Icon && Icon}
          <ChevronDown size={18} />
        </div>
      </div>

    

      {/* Options Popover */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="p-4 max-w-sm">
          <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => toggleOption(option.name)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-1 flex items-center justify-center flex-col gap-1 ${
                  value.includes(option.name)
                    ? "border-blue-500 bg-blue-50"
                    : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
                style={
                  value.includes(option.name)
                    ? { opacity: 1 }
                    : maxSelections && value.length >= maxSelections
                    ? { opacity: 0.5, pointerEvents: "none" }
                    : {}
                }
              >
                {option.icon && <div className="text-lg">{option.icon}</div>}
                <span className="text-center text-xs">{option.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default MultiSelectDropdown;
