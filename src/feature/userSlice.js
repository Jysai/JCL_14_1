import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",

    birthDate: "",
    startDate: "",
    street: "",
    city: "",
    usState: "",
    zipCode:  "",
    departement: "",
 
  


   

  },
  reducers: {
    userInfos: (state, action) => {
      const { startDate, birthDate, usState, departement, firstName, lastName, street, city, zipCode} = action.payload;
      state.startDate = startDate;
      state.birthDate = birthDate;
      state.usState = usState;
      state.departement = departement;
      state.firstName = firstName;
      state.lastName = lastName;
      state.street = street;
      state.city = city;
      state.zipCode =  zipCode;
    },
  },
});

export const { userInfos } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
