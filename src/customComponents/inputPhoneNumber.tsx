import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  onUpdate: (val: string) => void;
  value: string;
  placeHolder: string;
  Icon?: React.ReactNode;
  inputStyle?: React.CSSProperties;
  errorMessageStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  isOptional?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  errorMessage?: string;
  width?: string;
  isDisabled?:boolean
}

const PhoneInputComponent = (props: Props) => {
  const {
    title,
    placeHolder,
    onUpdate,
    value,
    isDisabled=false,
    inputStyle,
    titleStyle,
    isOptional = false,
    Icon,
    width = "100%",
    errorMessageStyle,
    errorMessage,
    ...rest
  } = props;

  const [internalValue, setInternalValue] = useState("+91");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);
  useEffect(() => {
    if (errorMessage) setError(errorMessage);
  }, [errorMessage]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const val = input.slice(0, 10);
    setInternalValue(val);
    onUpdate(val);

    if (input.length !== 10) {
      setError("Phone number must be 10 digits.");
    } else {
      setError(null);
    }
  };

  return (
    <div className="h-[100px]" style={{ width }}>
      <div className="flex items-center space-x-2 my-2 justify-start">
        <p className="text-md font-semibold text-gray-800" style={titleStyle}>
          {title}
        </p>
        {isOptional && <p className="text-[12px] text-gray-500">(Optional)</p>}
      </div>

      <div
        className={`flex items-center h-[50px] border rounded-[5px] overflow-hidden ${
          error ? "border-red-800" : "border-black-300"
        } ${isDisabled&& "bg-gray-200 cursor-progress" }`}
      >
        
        <input
          type="tel"
          disabled={isDisabled}
          style={inputStyle}
          placeholder={placeHolder}
          value={internalValue}
          onChange={handleChange}
          {...rest}
          className="w-full px-4 py-4 outline-none rounded-sm text-gray-700 placeholder-gray-400 transition-all duration-200"
        />
        {Icon && <div className="text-gray-500  mx-2 ml-4">{Icon}</div>}
      </div>

      {error && (
        <p className="text-red-800 text-sm mt-1" style={errorMessageStyle}>
          {error}
        </p>
      )}
    </div>
  );
};

export default PhoneInputComponent;
