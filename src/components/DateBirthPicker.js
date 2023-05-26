import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, userInfos } from "../feature/userSlice";

/**
 * React Component's DateBirthPicker
 * @returns An Html element to select the date of birth in a calendar
*/
const DateBirthPicker = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  /**
 * Function onChange Event
 * @param {e} EventListener
 * @returns Select the date in FR format, and send to the Reducer with Redux's Dispatch
 */
  const selectDate = (e) => {

    const selectDate = new Date(e.target.value).toLocaleDateString("fr")
 
    const data = {
      ...user,
      birthDate: selectDate
    };
    dispatch(userInfos(data));
  };

  return  <label htmlFor="date-of-birth" className="date-of-birth">Date of Birth<input type="date" id="dateBirth"  onChange={selectDate} /></label>;
};

export default DateBirthPicker;
