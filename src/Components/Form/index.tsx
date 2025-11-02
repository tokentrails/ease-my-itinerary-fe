/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchLoaction from "./searchLoaction";
import FormDate from "./formDate";
import FormNumber from "./formNumber";
import FormSelect from "./formSelect";

import MultiSelectDropdown from "./multiSelectDropdown";
import { INTERESTS } from "../../utils/interestConstants";
import { getFormValues, updateFormField } from "../../Store/form-slice";

import { validationSchema } from "./formikSetup";
import { resetTrip } from "../../Store/itinerary-slice";

interface ItinaryFormProps {
  onSubmit: () => void;
  Chat?:boolean
}
const ItinaryForm = (props: ItinaryFormProps) => {
  const { onSubmit } = props;
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});

  const formValues = useSelector(getFormValues);

  const handleFieldChange = (field: string, value: any) => {
    dispatch(updateFormField({ field, value }));
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      // Validate form
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      dispatch(resetTrip());
      onSubmit();
      console.log("Form Values Submitted:", formValues);
    } catch (validationError: any) {
      const fieldErrors: any = {};
      if (validationError.inner) {
        validationError.inner.forEach((error: any) => {
          fieldErrors[error.path] = error.message;
        });
      }
      setErrors(fieldErrors);

      console.error("Validation error:", fieldErrors);
    }
  };
  return (
    <div className=" bg-wite text-black flex items-center justify-center p-6">
      <div>
        <form onSubmit={handleSubmit} className="flex  flex-col items-center">
          <div className="shadow-2x w-full p-5 md:p-0 bg-white rounded overflow-hidden flex flex-col md:flex-row justify-start items-center">
            <div className="md:border-r-[2px] w-full md:w-[200px] border-gray-200 px-2">
              <SearchLoaction
                value={formValues.source}
                title={"Source"}
                errorMessage={errors.source ? errors.source : ""}
                onPlaceSelect={function (place: string): void {
                  handleFieldChange("source", place);
                }}
              />
            </div>
            <div className="md:border-r-[2px] w-full md:w-[200px] border-gray-200 px-2">
              <SearchLoaction
                value={formValues.destination}
                title={"Destination"}
                errorMessage={errors.destination ? errors.destination : ""}
                onPlaceSelect={function (place: string): void {
                  handleFieldChange("destination", place);
                }}
              />
            </div>
            <div className="flex w-full md:w-[240px]">
              <div className="md:border-r-[2px] border-gray-200  l px-2 w-full md:w-[120px]">
                <FormDate
                  value={formValues.start_date}
                  title={"From"}
                  errorMessage={errors.start_date ? errors.start_date : ""}
                  minDate={
                    new Date(new Date().setDate(new Date().getDate() + 1))
                  }
                  onSelectDate={function (date: string): void {
                    handleFieldChange("start_date", date);
                  }}
                />
              </div>
              <div className="md:border-r-[2px] border-gray-200 px-2 w-full md:w-[120px]">
                <FormDate
                  value={formValues.end_date}
                  title={"To"}
                  errorMessage={errors.end_date ? errors.end_date : ""}
                  minDate={
                    formValues.start_date
                      ? new Date(formValues.start_date)
                      : undefined
                  }
                  onSelectDate={function (date: string): void {
                    handleFieldChange("end_date", date);
                  }}
                />
              </div>
            </div>
            <div className="flex w-full mt-2 md:mt-0 md:w-[220px]">
              <div className="md:border-r-[2px] border-gray-200 px-2 w-full md:w-[120px]">
                <FormNumber
                  value={formValues.budget}
                  title={"Budget"}
                  errorMessage={errors.budget ? String(errors.budget) : ""}
                  placeholder="₹0"
                  onNumberChange={function (value: string): void {
                    handleFieldChange("budget", value);
                  }}
                />
              </div>
              <div className="md:border-r-[2px] border-gray-200 px-2 w-full  md:w-[100px]">
                <FormSelect
                  value={formValues.traveler_count}
                  title={"Travelers"}
                  errorMessage={
                    errors.traveler_count ? String(errors.traveler_count) : ""
                  }
                  placeholder="Select travelers"
                  options={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                    { label: "5", value: "5" },
                    { label: "6", value: "6" },
                    { label: "7", value: "7" },
                    { label: "8", value: "8" },
                  ]}
                  onSelectChange={function (value: string): void {
                    handleFieldChange("traveler_count", value);
                  }}
                />
              </div>
            </div>
            <div className="flex w-full md:w-[200px] ">
              <div className="pl-2 w-full md:w-[100px]  md:border-r-[2px]   border-gray-200 ">
                <FormSelect
                  value={formValues.meal_preference}
                  title={"Meal Type"}
                  errorMessage={
                    errors.meal_preference ? String(errors.meal_preference) : ""
                  }
                  placeholder="Select meal"
                  options={[
                    { label: "Vegan", value: "vegan" },
                    { label: "Veg", value: "vegetarian" },
                    { label: "Non-Veg", value: "non-veg" },
                  ]}
                  onSelectChange={function (value: string): void {
                    handleFieldChange("meal_preference", value);
                  }}
                />
              </div>
              <div className="px-2 w-full md:w-fit">
                <MultiSelectDropdown
                  value={formValues.interests}
                  title="Interests"
                  errorMessage={
                    errors.interests ? String(errors.interests) : ""
                  }
                  placeholder="Select interests"
                  options={INTERESTS.map((item) => ({
                    id: item.id,
                    name: item.name,
                    icon: item.icon,
                  }))}
                  onSelectionChange={(selected) => {
                    handleFieldChange("interests", selected);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] rounded-xl overflow-hidden bg-white shadow-xl mt-2">
            <button className="w-full bg-gradient-to-r from-[#EF6614] to-[#FF8C42] hover:from-[#D85A0A] hover:to-[#FF7A2E] py-3 px-6 text-center text-white font-bold text-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl active:scale-120 flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Generate Itinerary Using AI
            </button>
            
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ItinaryForm;
