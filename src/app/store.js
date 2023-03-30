import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import modalReducer from "../feature/modalSlice"



export default configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});
