/* eslint-disable @typescript-eslint/no-explicit-any */

/*  eslint-disable  @typescript-eslint/no-unsafe-function-type */
interface Props {
  title: string;

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
  ref?: any;
  width?: string;
  isOptional?: true;
  max?: number;
}

const TextAreaComponent = (props: Props) => {
  const maxLength = 500;
  const {
    title,
    onUpdate,
    value,
    isOptional = true,
    titleStyle,
    Icon,
    width = "100%",
    ...rest
  } = props;

  return (
    <div className={`w-[${width}]`}>
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
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onUpdate(e.target.value)}
          rows={4}
          className={`w-full px-4 py-4 border rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none`}
          {...rest}
        />
        <div className="absolute bottom-3 right-3 text-xs text-gray-500 z-20">
          {value.length}/{maxLength}
        </div>
      </div>
    </div>
  );
};
export default TextAreaComponent;
