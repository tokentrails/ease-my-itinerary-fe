/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, useState } from "react";

// Define the props for the component
interface PlaceAutocompleteInputProps {
  value: string;
  title: string;
  titleStyle?: any;
  errorMessage?: string;
  Icon?: any;

  onPlaceSelect: (place: string) => void;
}

const PlaceAutocompleteInput: React.FC<PlaceAutocompleteInputProps> = ({
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

  return (
    <div className="w-full h-[110px]">
      <div className="flex items-center space-x-2 my-2 justify-start">
        <div className="text-cyan-500 mr-2">{Icon && Icon}</div>
        <p
          className="text-lg font-semibold text-gray-800"
          style={titleStyle && titleStyle}
        >
          {title}
        </p>
      </div>
      <input
        ref={inputRef}
        type="text"
        key={title}
        value={value}
        onChange={(e) => {
          onPlaceSelect(e.target.value);
        }}
        placeholder="Search for a place..."
        className={`w-full px-4 py-4 border border-gray-300 rounded-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 ${
          errorMessage && "border-red-800"
        }`}
      />
      {errorMessage ? <p className="text-red-800">{errorMessage}</p>:<p></p>}
    </div>
  );
};

export default PlaceAutocompleteInput;
