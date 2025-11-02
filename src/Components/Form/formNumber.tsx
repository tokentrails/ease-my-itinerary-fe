/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

// Define the props for the component - same as SearchLocation
interface FormNumberProps {
  value: string | number;
  title: string;
  titleStyle?: any;
  errorMessage?: string;
  Icon?: any;
  height?: string;
  placeholder?: string;
  onNumberChange: (value: string) => void;
}

const FormNumber: React.FC<FormNumberProps> = ({
  Icon,
  title,
  titleStyle,
  value,
  errorMessage,
  onNumberChange,
  placeholder = "Enter",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Remove commas and only allow positive numbers
    const cleanValue = inputValue.replace(/,/g, "");
    if (cleanValue === "" || /^\d+$/.test(cleanValue)) {
      onNumberChange(cleanValue);
    }
  };

  // Format number with locale string for display (e.g., 1,00,000)
  const displayValue = value
    ? parseInt(String(value)).toLocaleString("en-IN")
    : null;

  return (
    <div className={`w-full`}>
      <div className="flex items-center  my-2 justify-start">
        {Icon && <div className={`${errorMessage ? "text-red-500" : "text-gray-500"}`}>{Icon}</div>}
        <p
          className={`text-xs font-semibold ${errorMessage ? "text-red-500" : "text-gray-500"}`}
          style={titleStyle && titleStyle}
        >
          {title}
        </p>
      </div>

      {/* Display Area - Always Visible */}
      <div
        className={`rounded-[5px] min-h-[45px] overflow-hidden flex items-center gap-2 cursor-pointer py-1 px-2 transition-all duration-200 `}
      >
        <input
          type="text"
          value={displayValue || ""}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 font-semibold text-md focus:ring-0 ${
            !displayValue ? "text-gray-400" : "text-gray-700"
          }`}
        />

      </div>

      {/* Error Message */}
    
    </div>
  );
};

export default FormNumber;
