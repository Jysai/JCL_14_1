import React from "react";

import DateBirthPicker from "./DateBirthPicker";
import DateStartPicker from "./DateStartPicker";

const Form = () => {

  return (
    <div>
      
      <div>
        <div className="information">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DateBirthPicker />

          <label htmlFor="start-date">Start Date</label>
          <DateStartPicker/>


        
        </div>
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>
        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </div>
      {/* <button onClick={saveEmployee()}>Save</button> */}
    </div>
  );
};

export default Form;