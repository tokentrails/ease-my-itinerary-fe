/* eslint-disable @typescript-eslint/no-explicit-any */
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
interface Props {
  title: string;

  Icon?: any;
  onUpdate: (val: string) => void;
  value: string;
  inputStyle?: any;
  minDate:string;
  errorMessage?: string;
  helpText?: string;
  errorMessageStyle?: any;
  titleStyle?: any;
  min?: number;
  isOptional?: true;
  ref?: any;
  width?: string;
  max?: number;
  maxData?:string
}
const DateComponent = (props: Props) => {
  const {
    width = "100%",
    Icon,
    titleStyle,
    title,
    onUpdate,
    isOptional = false,
    errorMessage,
    minDate
  } = props;
  return (

    <div className={`w-[${width}] h-[110px]`}>
      <div className="flex items-center space-x-2 my-2 justify-start">
        <div className="text-cyan-500 mr-2">{Icon && Icon}</div>
        <p
          className="text-lg font-semibold text-gray-800"
          style={titleStyle && titleStyle}
        >
          {title}
        </p>
        {isOptional && <p className="text-[12px]">(Optional)</p>}
      </div>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            minDate={moment(minDate,"YYYY-MM-DD").toDate()}
            sx={{
              width: "100%",
              borderRadius: "10px",
              border:errorMessage?"solid #9f0712 1px":"solid gray 1px"
            }}
            className={`${errorMessage && "border-red-800 border-2"}`}
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
      {errorMessage && <p className="text-red-800">{errorMessage}</p>}
    </div>
  );
};

export default DateComponent;
