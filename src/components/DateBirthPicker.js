import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, userInfos } from "../feature/userSlice";

const DateBirthPicker = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const selectDate = (e) => {

    const selectDate = new Date(e.target.value).toLocaleDateString("fr")
 
    const data = {
      ...user,
      birthDate: selectDate
    };
    dispatch(userInfos(data));
  };

  return <input type="date" id="date" timezone="[[timezone]]" onChange={selectDate} />;
};

export default DateBirthPicker;
