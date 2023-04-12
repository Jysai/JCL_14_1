import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userArray: [],
  
};

export const userArraySlice = createSlice({
  name: "array",
  initialState,
  reducers: {
    arrayInfos: (state, action) => {
      state.userArray = [...state.userArray, action.payload];
    },
  },
});

export const { arrayInfos } = userArraySlice.actions;
export const selectUserArray = (state) => state.array;

export default userArraySlice.reducer;
