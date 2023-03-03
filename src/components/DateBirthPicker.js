import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, userInfos } from "../feature/userSlice";

const DateBirthPicker = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    const data = {
      ...user,
      birthDate: e.target.value,
    };
    dispatch(userInfos(data));
  };

  return <input type="date" id="date" onChange={handleDateChange} />;
};

export default DateBirthPicker;
