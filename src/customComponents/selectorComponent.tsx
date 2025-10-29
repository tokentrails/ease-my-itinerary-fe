/* eslint-disable @typescript-eslint/no-explicit-any */
interface Options {
  key: string;
  value: string;
}

interface Props {
  title: string;
  Icon?: any;
  onUpdate: (value: string) => void;
  value: string;
  ref?: any;
  options: Options[];
  inputStyle?: any;
  errorMessage?: string;
  helpText?: string;
  errorMessageStyle?: any;
  titleStyle?: any;
  width?: string;
  isOptional?: true;
}

const InputSelect = (props: Props) => {
  const {
    title,
    Icon,
    titleStyle,
    inputStyle,
    value,
    onUpdate,
    options,
    isOptional = false,
    errorMessage,
    width = "100%",
  } = props;
  return (
    <div className={`w-[${width}] h-[110px]`}>
      <div className="flex items-center space-x-2 my-2 justify-start">
      
        <p
            className="text-md font-semibold  text-gray-800"
          style={titleStyle && titleStyle}
        >
          {title}
        </p>
        {isOptional && <p className="text-[12px]">(Optional)</p>}
      </div>
      <div className={`border mt-3 rounded-[5px] h-[50px] flex items-center   focus:ring-cyan-400 ${errorMessage && "border-red-800"}` }>
      
      <select
        value={value}
        style={inputStyle && inputStyle}
        onChange={(e) => onUpdate(e.target.value)}

        className={`w-full px-4 py-4 rounded-sm border-0 outline-none  border-none text-gray-700  transition-all focus:border-2 focus:border-red `}
      >
        {options.map((value) => (
          <option key={value.key} value={value.key}>
            {value.value}
          </option>
        ))}
      </select>
      <div className=" text-gray-500 mx-2 ml-4">{Icon && Icon}</div>
      </div>
    </div>
  );
};

export default InputSelect;
