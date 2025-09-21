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
    width = "100%",
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
      <select
        value={value}
        style={inputStyle && inputStyle}
        onChange={(e) => onUpdate(e.target.value)}
        className={`w-full px-4 py-4 border rounded-sm text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-all `}
      >
        {options.map((value) => (
          <option key={value.key} value={value.key}>
            {value.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
