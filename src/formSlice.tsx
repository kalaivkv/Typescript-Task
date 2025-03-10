import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  name: string;
  email: string;
  gender: string;
  dob: string;
  state: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  gender: "",
  dob: "",
  state: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof FormState; value: string }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
