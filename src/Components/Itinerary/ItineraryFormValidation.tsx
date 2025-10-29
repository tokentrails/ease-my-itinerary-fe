import * as yup from "yup";
const parseDateString = (dateString: string | undefined): Date | null => {
  if (!dateString) return null;
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) return null;

  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
};

export const validationSchema = yup.object({
   source: yup
    .string()
    .trim()
    .min(3, "Source must be at least 3 characters")
    .required("Source is required"),
  destination: yup
    .string()
    .trim()
    .min(3, "Destination must be at least 3 characters")
    .required("Destination is required"),
  budget: yup
    .number()
    .typeError("Budget must be a valid number")
    .positive("Budget must be a positive number")
    .required("Budget is required"),
  traveler_count: yup
    .number()
    .typeError("Traveler count must be a valid number")
    .positive("Must have at least one traveler")
    .integer("Traveler count must be a whole number")
    .required("Number of travelers is required"),
  start_date: yup
    .string()
    .required("Start date is required")
   
    .test("is-not-past", "Start date cannot be in the past", function (value) {
      const { start_date } = this.parent;
      const startDate = parseDateString(start_date);
      const endDate = parseDateString(value);
      if (!startDate || !endDate) return true;
      return endDate >= startDate;
    }),

  end_date: yup
    .string()
    .required("To date is required")
   
    .test(
      "is-after-start",
      "To date cannot be before the start date",
      function (value) {

        const { start_date } = this.parent;
        const startDate = parseDateString(start_date);
        const endDate = parseDateString(value);
        if (!startDate || !endDate) return true; 
        return endDate >= startDate;
      }
    ),
  interests: yup
    .array()
    .of(yup.string().required())
    .min(1, "Please select at least one interests")
    .required("Themes are required"),
  special_requests: yup
    .string()
    .max(500, "Special requests cannot exceed 500 characters"),
});
export default validationSchema;
