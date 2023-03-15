import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userInfos, selectUser } from "../feature/userSlice";

const DateStartPicker = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const selectDate = (e) => {
    const data = {
      ...user,
      startDate: e.target.value,
    };
    dispatch(userInfos(data));
  };

  return <input type="date" id="date" onChange={selectDate} />;
};

export default DateStartPicker;
