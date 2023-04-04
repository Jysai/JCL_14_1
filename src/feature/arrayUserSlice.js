import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrayUser: [],
  
};

export const arrayUserSlice = createSlice({
  name: "array",
  initialState,
  reducers: {
    arrayInfos: (state, action) => {
      state.arrayUser = [...state.arrayUser, action.payload];
    },
  },
});

export const { arrayInfos } = arrayUserSlice.actions;
export const selectArrayUser = (state) => state.array;

export default arrayUserSlice.reducer;
