import {React, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import { arrayInfos } from "../feature/arrayUserSlice";
import DateBirthPicker from "./DateBirthPicker";
import DateStartPicker from "./DateStartPicker";

import SelectDepartements from "./SelectDepartements";
import SelectStates from "./SelectStates";
import { openModal } from "../feature/modalSlice";



/**
 * React Component's Form
 * @returns An Html element form, to enter the employee's information
*/
const Form = () => {

  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const streetInput = useRef();
  const cityInput = useRef();
  const zipCodeInput = useRef();

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

    /**
 * Function onClick
 * @returns Retrieve information and send to the Reducer with Redux's Dispatch and open a modal
 */
  const saveEmployee = () => {

    const data = {
      ...user,
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value,
      street: streetInput.current.value,
      city: cityInput.current.value,
      zipCode:  zipCodeInput.current.value,
    };
 
    dispatch(openModal());
    dispatch(arrayInfos(data));
  };


  return (
    <div className="wrap-form">
      
      <div>
      <h2>Create Employee</h2>
        <div className="information">
          <label htmlFor="first-name" className="">First Name</label>
          <input ref={firstNameInput} type="text" id="first-name" className="field-user" />

          <label htmlFor="last-name">Last Name</label>
          <input ref={lastNameInput} type="text" id="last-name" className="field-user" />

          <DateBirthPicker />
          <DateStartPicker/>


        
        </div>
        <fieldset className="address" >
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input ref={streetInput} id="street" type="text" className="field-user"  />

          <label htmlFor="city">City</label>
          <input ref={cityInput} id="city" type="text" className="field-user"  />
          <label htmlFor="states">States</label>
          <SelectStates />

          <label htmlFor="zip-code">Zip Code</label>
          <input ref={zipCodeInput} id="zip-code" type="number" className="field-user"  />
        </fieldset>
        <label htmlFor="department">Department</label>
     
        <SelectDepartements /> 
      </div>
      <div className="wrap-button">
      <button onClick={() => saveEmployee()} className="button-save">Save</button>
   
      </div>
      
    </div>
  );
};

export default Form;
