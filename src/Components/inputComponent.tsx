/* eslint-disable @typescript-eslint/no-explicit-any */
/*  eslint-disable  @typescript-eslint/no-unsafe-function-type */
interface Props {
  title: string;
  type: string;
  Icon?: any;
  onUpdate: Function;
  value: string;
  placeHolder: string;
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

      <input
        type={type}
        style={inputStyle && inputStyle}
        placeholder={placeHolder}
        value={value}
        {...rest}
        onChange={(e) => onUpdate(e.target.value)}
        className={`w-full px-4 py-4 border border-gray-300 rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 ${errorMessage && "border-red-800"}`}
      />
      {errorMessage && <p className="text-red-800">{errorMessage}</p>}
    </div>
  );
};
export default InputComponent;
