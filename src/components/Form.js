import {React, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userInfos } from "../feature/userSlice";

import DateBirthPicker from "./DateBirthPicker";
import DateStartPicker from "./DateStartPicker";
import SelectDepartements from "./SelectDepartements";
import SelectStates from "./SelectStates";

const Form = () => {

  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const streetInput = useRef();
  const cityInput = useRef();
  const zipCodeInput = useRef();

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  const saveEmployee = () => {
 
    const data = {
      ...user,
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      street: streetInput.current.value,
      city: cityInput.current.value,
      zipCode:  zipCodeInput.current.value,
    };
    dispatch(userInfos(data));
  };

  return (
    <div>
      
      <div>
        <div className="information">
          <label htmlFor="first-name">First Name</label>
          <input ref={firstNameInput} type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input ref={lastNameInput} type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DateBirthPicker />

          <label htmlFor="start-date">Start Date</label>
          <DateStartPicker/>
        
        </div>
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input ref={streetInput} id="street" type="text" />

          <label htmlFor="city">City</label>
          <input ref={cityInput} id="city" type="text" />
          <label htmlFor="states">States</label>
          <SelectStates />

          <label htmlFor="zip-code">Zip Code</label>
          <input ref={zipCodeInput} id="zip-code" type="number" />
        </fieldset>
        <label htmlFor="department">Department</label>
     
        <SelectDepartements /> 
      </div>
      <button onClick={() => saveEmployee()}>Save</button>
    </div>
  );
};

export default Form;
