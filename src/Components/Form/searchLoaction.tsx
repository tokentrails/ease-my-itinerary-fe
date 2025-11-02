/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useState } from "react";

// Define the props for the component
interface SearchLoactionProps {
  value: string;
  title: string;
  titleStyle?: any;
  errorMessage?: string;
  Icon?: any;
  height?: string;
  onPlaceSelect: (place: string) => void;
}

const SearchLoaction: React.FC<SearchLoactionProps> = ({
  Icon,
  title,
  titleStyle,
  value,
  errorMessage,
  onPlaceSelect,
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

  // Extract only the city name (part before comma)
  const displayValue = value ? value.split(",")[0].trim() : value;
  
  // Extract the remaining parts (state, country, etc.)
  const remainingParts = value 
    ? value.split(",").slice(1).map(part => part.trim()).join(", ")
    : "";

  return (
    <div className={`w-full `}>
      <div className="flex items-center  my-2 justify-start">
        {Icon && <div className={`${errorMessage ? "text-red-500" : "text-gray-500"}`}>{Icon}</div>}
        <p
          className={`text-xs font-semibold ${errorMessage ? "text-red-500" : "text-gray-500"}`}
          style={titleStyle && titleStyle}
        >
          {title}
        </p>
      </div>
      <div
        className={` rounded-[5px]  overflow-hidden min-h-[45px] focus:ring-cyan-400 ${
          errorMessage && "border-red-800"
        }`}
      >
        <input
          ref={inputRef}
          type="text"
          key={title}
          value={displayValue}
          onChange={(e) => {
            onPlaceSelect(e.target.value);
          }}
          placeholder="Location"
          className={`w-full font-semibold text-lg   md:max-w-[200px] pr-1  rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-transparent transition-all duration-200 ${
            errorMessage && "border-red-800"
          }`}
        />
         {remainingParts && (
        <p className="text-xs text-gray-500 -mt-1 truncate">
          {remainingParts}
        </p>
      )}
      </div>

      {/* Display remaining location parts below */}
     
    </div>
  );
};

export default SearchLoaction;
