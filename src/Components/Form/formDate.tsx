/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { parseISO, format } from "date-fns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Popover } from "@mui/material";
// Define the props for the component - same as SearchLocation
interface FormDateProps {
  value: string;
  title: string;
  titleStyle?: any;
  errorMessage?: string;
  Icon?: any;
  height?: string;
  minDate?: Date;
  onSelectDate: (date: string) => void;
}

const FormDate: React.FC<FormDateProps> = ({
  Icon,
  title,
  titleStyle,
  value,
  errorMessage,
  minDate,
  onSelectDate,
}) => {
  const datePickerRef = useRef<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleDateChange = (date: any) => {
    if (date) {
      // Format date as YYYY-MM-DD string
      const formattedDate = format(date, "yyyy-MM-dd");
      onSelectDate(formattedDate);
    }
  };

  // Parse the date string to Date object
  const parsedDate = value ? parseISO(value) : null;

  // Format date for display - split into date and month/year
  const displayDateObj = value ? parseISO(value) : null;
  const displayDateNum = displayDateObj ? format(displayDateObj, "dd") : null;
  const displayMonthYear = displayDateObj ? format(displayDateObj, "MMM, yyyy") : null;

  return (
    <div className={`w-full `}>
      <div className="flex items-center  h-[25px] justify-start">
        {Icon && <div className={`${errorMessage ? "text-red-500" : "text-gray-600"}`}>{Icon}</div>}
        <p
          className={`text-xs font-semibold ${errorMessage ? "text-red-500" : "text-gray-500"}`}
          style={titleStyle && titleStyle}
        >
          {title}
        </p>
      </div>

      {/* Display Area - Always Visible */}
      <div
        onClick={handleClick}
        className={`rounded-[5px] min-h-[45px]   overflow-hidden flex items-center gap-4 cursor-pointer py-1 px-2 transition-all duration-200 `}
      >
        <div className="w-full">
          {displayDateNum && displayMonthYear ? (
            <div className="flex flex-col">
              <p className="font-bold text-xl text-gray-700">{displayDateNum}</p>
              <p className="text-sm text-gray-600 -mt-1">{displayMonthYear}</p>
            </div>
          ) : (
            <p className="w-full font-semibold  text-sm text-gray-400"> Date</p>
          )}
        </div>

      </div>
     
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div ref={datePickerRef} style={{}}>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
          >
            <DateCalendar
              value={parsedDate}
              minDate={minDate}
              onChange={(newValue) => {
                handleDateChange(newValue);
                setAnchorEl(null);
              }}
            />
          </Popover>
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default FormDate;
