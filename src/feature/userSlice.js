import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    birthDate: "",
    startDate: "",
    selectState: ""
  },
  reducers: {
    userInfos: (state, action) => {
      const { startDate, birthDate, selectState } = action.payload;
      state.startDate = startDate;
      state.birthDate = birthDate;
      state.selectState = selectState
    },
  },
});

export const { userInfos } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
