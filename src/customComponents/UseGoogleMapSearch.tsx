/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useState } from "react";

// Define the props for the component
interface PlaceAutocompleteInputProps {
  value: string;
  title: string;
  titleStyle?: any;
  errorMessage?: string;
  Icon?: any;
  height?:string;
  onPlaceSelect: (place: string) => void;
}

const PlaceAutocompleteInput: React.FC<PlaceAutocompleteInputProps> = ({
  Icon,
  title,
  titleStyle,
  value,
  errorMessage,
  onPlaceSelect,
  height="h-[110px]"
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (inputRef.current && !autocomplete) {
      const autocompleteInstance = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          fields: [
            "address_components",
            "geometry",
            "icon",
            "name",
            "formatted_address",
          ],

          types: ["geocode"],
        }
      );
      setAutocomplete(autocompleteInstance);
    }
    if (autocomplete) {
      google.maps.event.clearInstanceListeners(autocomplete);
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          onPlaceSelect(place.formatted_address || "");
        } else {
          console.error(
            "Autocomplete selection error: No details available for input: '" +
              place.name +
              "'"
          );
        }
      });
    }
    return () => {
      if (autocomplete) {
        google.maps.event.clearInstanceListeners(autocomplete);
      }
    };
  }, [autocomplete, onPlaceSelect]);

  return (
    <div className={`w-full ${height}`}>
      <div className="flex items-center space-x-2 my-2 justify-start">
        <p className="text-md font-semibold text-gray-800" style={titleStyle && titleStyle}>
          {title}
        </p>
      </div>
      <div className={`border rounded-[5px] overflow-hidden h-[50px] flex items-center  focus:ring-cyan-400 ${errorMessage && "border-red-800"}`}>
      
        <input
          ref={inputRef}
          type="text"
          key={title}
          value={value}
          onChange={(e) => {
            onPlaceSelect(e.target.value);
          }}
          placeholder="Search for a place..."
          className={`w-full px-4 py-4  border-gray-300 rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-transparent transition-all duration-200 ${
            errorMessage && "border-red-800"
          }`}
        />
          <div className=" text-gray-500  mx-2 ml-4">{Icon && Icon}</div>
      </div>

      {errorMessage ? <p className="text-red-800 text-sm">{errorMessage}</p> : <p></p>}
    </div>
  );
};

export default PlaceAutocompleteInput;
