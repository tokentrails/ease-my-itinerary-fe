/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

// Define the props for the component
interface FormSelectProps {
  value: string | number;
  title: string;
  titleStyle?: any;
  errorMessage?: string;
  Icon?: any;
  placeholder?: string;
  options: Array<{ label: string; value: string | number }>;
  onSelectChange: (value: string) => void;
}

const FormSelect: React.FC<FormSelectProps> = ({
  Icon,
  title,
  titleStyle,
  value,
  errorMessage,
  onSelectChange,
  placeholder = "Select",
  options,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectChange(e.target.value);
  };

  const displayValue = value ? String(value) : null;

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

      {/* Select Area - Always Visible */}
      <div
        className={`rounded-[5px] min-h-[45px] overflow-hidden flex items-center gap-2 py-1 px-2 transition-all duration-200 ${
          errorMessage ? "bg-red-50" : "bg-white hover:bg-gray-50"
        }`}
      >
        <select
          value={displayValue || ""}
          onChange={handleChange}
          className={`w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 font-semibold text-md focus:ring-0 appearance-none cursor-pointer ${
            !displayValue ? "text-gray-400" : "text-gray-700"
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
       
      </div>

      
    </div>
  );
};

export default FormSelect;
