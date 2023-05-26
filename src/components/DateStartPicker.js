import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userInfos, selectUser } from "../feature/userSlice";

/**
 * React Component's DateStartPicker
 * @returns An Html element to select the date of start in a calendar
*/
const DateStartPicker = () => {
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
      startDate: selectDate
    };
    dispatch(userInfos(data));
  };

  return  <label htmlFor="start-date" className="start-date">Start Date<input type="date" id="dateStart" onChange={selectDate} /></label>;
};

export default DateStartPicker;
