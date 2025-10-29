/* eslint-disable @typescript-eslint/no-explicit-any */
/*  eslint-disable  @typescript-eslint/no-unsafe-function-type */
interface Props {
  title: string;
  type: string;
  className?: string;
  Icon?: any;
  onUpdate: Function;
  value: string;
  placeHolder: string;
  isDisabled?: boolean;
  inputStyle?: any;
  errorMessage?: string;
  helpText?: string;
  errorMessageStyle?: any;
  titleStyle?: any;
  min?: number;
  isOptional?: true;
  ref?: any;
  width?: string;
  max?: number;
}

const InputComponent = (props: Props) => {
  const {
    title,
    placeHolder,
    type,
    onUpdate,
    isDisabled = false,
    value,
    inputStyle,
    titleStyle,
    isOptional = false,
    Icon,
    width = "100%",
    errorMessage,
    ...rest
  } = props;
  return (
    <div className={`w-[${width}] h-[100px]`}>
      <div className="flex items-center space-x-2 my-2 justify-start">
        <p
          className="text-md font-semibold text-gray-800"
          style={titleStyle && titleStyle}
        >
          {title}
        </p>
        {isOptional && <p className="text-[12px]">(Optional)</p>}
      </div>
      <div
        className={`flex items-center overflow-hidden border rounded-[5px] h-[50px] ${
          isDisabled && "bg-gray-200 cursor-progress"
        } ${errorMessage && "border-red-800"} `}
      >
        <input
          type={type}
          style={inputStyle && inputStyle}
          placeholder={placeHolder}
          disabled={isDisabled}
          value={value}
          {...rest}
          onChange={(e) => onUpdate(e.target.value)}
          className={`w-full px-4 py-4   outline-none rounded-sm text-gray-700 placeholder-gray-400  transition-all duration-200 `}
        />
        {Icon && <div className="text-gray-500 mx-2 ml-4">{Icon && Icon}</div>}
      </div>
      {errorMessage && <p className="text-red-800 text-sm">{errorMessage}</p>}
    </div>
  );
};
export default InputComponent;
