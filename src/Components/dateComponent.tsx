/* eslint-disable @typescript-eslint/no-explicit-any */
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
interface Props {
  title: string;

  Icon?: any;
  onUpdate: (val: string) => void;
  value: string;
  inputStyle?: any;
  minDate: string;
  errorMessage?: string;
  helpText?: string;
  errorMessageStyle?: any;
  titleStyle?: any;
  min?: number;
  isOptional?: true;
  ref?: any;
  width?: string;
  max?: number;
  maxData?: string;
}
const DateComponent = (props: Props) => {
  const {
    width = "100%",
    titleStyle,
    title,
    onUpdate,
    isOptional = false,
    errorMessage,
    minDate,
  } = props;
  return (
    <div className={`w-[${width}] h-[110px]`}>
      <div className="flex items-center space-x-2 my-2 justify-start">
         <p
          className="text-lg  text-gray-800"
          style={titleStyle && titleStyle}
        >
          {title}
        </p>
        {isOptional && <p className="text-[12px]">(Optional)</p>}
      </div>
      <div className="flex items-center border rounded-xl h-[60px] ">
        <div className=" mx-2 ml-4">
          <CalendarMonthOutlinedIcon />
        </div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              minDate={moment(minDate, "YYYY-MM-DD").toDate()}
              sx={{
                width: "100%",
                height: "100%",
                overflow: "none",
                outline: "none",
                border: "solid transperent",
                "& .MuiOutlinedInput-root": {
                  border: "none",
                  outline: "none",
                  " fieldset": {
                    border: "none",
                    outline: "none",
                  },
                },
              }}
              slotProps={{
                textField: {
                  InputProps: {
                    endAdornment: null,
                  },
                },
              }}
              slots={{
                openPickerIcon: () => null,
              }}
              //className={`${errorMessage && "border-red-800 border-2"}`}
              onChange={(value) => {
                if (value && new Date(value)) {
                  onUpdate(moment(value).format("YYYY-MM-DD"));
                } else {
                  onUpdate("");
                }
              }}
              format="dd/MM/yyyy"
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>

      {errorMessage && <p className="text-red-800">{errorMessage}</p>}
    </div>
  );
};

export default DateComponent;
