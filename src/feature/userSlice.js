import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    birthDate: "",
    startDate: "",
  },
  reducers: {
    userInfos: (state, action) => {
      const { startDate, birthDate } = action.payload;
      state.startDate = startDate;
      state.birthDate = birthDate;
    },
  },
});

export const { userInfos } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
