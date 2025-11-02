import { createSlice } from "@reduxjs/toolkit";
import type { IFormValues } from "./form-type";
import { FormInitial } from "./form-initial";
import type { RootState } from "./store";

const initialState: IFormValues = FormInitial;

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    setFormValues: (state, action) => {
      Object.assign(state, action.payload);
    },
    updateFormField: (state, action) => {
      const { field, value } = action.payload;
      (Object.keys(state) as Array<keyof IFormValues>).forEach((key) => {
        if (key === field) {
          (state as Record<string, unknown>)[key] = value;
        }
      });
    },
    resetForm: (state) => {
      Object.assign(state, FormInitial);
    },
  },
});

export const { setFormValues, updateFormField, resetForm } = formSlice.actions;

export const getFormValues = (state: RootState) => state.form;

export default formSlice.reducer;
