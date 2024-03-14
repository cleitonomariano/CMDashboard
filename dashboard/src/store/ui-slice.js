import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  company: "Nome da Empresa",
  salesGoal: 400,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setConfig: (state, { payload }) => {
      state.company = payload.company;
      state.salesGoal = payload.sales_goal;
      state.id = payload._id;
    },
  },
});

export const { setConfig } = uiSlice.actions;

export default uiSlice.reducer;
