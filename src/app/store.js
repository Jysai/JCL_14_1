import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import modalReducer from "../feature/modalSlice"
import arrayReducer from "../feature/arrayUserSlice"



export default configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    array: arrayReducer,

  },
});
