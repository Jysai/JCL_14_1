import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userInfos, selectUser } from "../feature/userSlice";

const DateStartPicker = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  

  const selectDate = (e) => {
    
    const selectDate = new Date(e.target.value).toLocaleDateString("fr")
 
  

    const data = {
      ...user,
      startDate: selectDate
    };
    dispatch(userInfos(data));
  };

  return <input type="date" id="date" onChange={selectDate} />;
};

export default DateStartPicker;
