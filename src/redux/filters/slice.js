import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    number: "",
    field: "",
  },
  reducers: {
    changeNameFilter: (state, { payload }) => {
      state.name = payload;
    },
    changeNumberilter: (state, { payload }) => {
      state.number = payload;
    },
    changeField: (state, { payload }) => {
      state.field = payload;
    },
  },
});

export const { changeNameFilter, changeNumberilter, changeField } =
  filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
