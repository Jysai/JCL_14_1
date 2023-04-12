import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserArray } from "../feature/arrayUserSlice";

const TableEmployees = () => {
  const ArrayUserSelector = useSelector(selectUserArray);
  const inputEl = useRef();
  const [text, setText] = useState("")
 
  const onChange = e => setText(inputEl.current.value);
  const arrayFilters = [];

  ArrayUserSelector.userArray.forEach((element) => {
    if (
      element.firstName.toLowerCase().match(text.toLowerCase()) ||
      element.lastName.toLowerCase().match(text.toLowerCase()) ||
      element.startDate.toLowerCase().match(text.toLowerCase()) ||
      element.departement.toLowerCase().match(text.toLowerCase()) ||
      element.birthDate.toLowerCase().match(text.toLowerCase()) ||
      element.street.toLowerCase().match(text.toLowerCase()) ||
      element.city.toLowerCase().match(text.toLowerCase()) ||
      element.usState.toLowerCase().match(text.toLowerCase()) ||
      element.zipCode.toLowerCase().match(text.toLowerCase()) 
    ) {
      arrayFilters.push(element);
    }
  })

  
 

  return (
    <div className="container">
      <div className="header-table">
        <div className="show-entries">
          <p>Show</p>
          <select>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
          <p>entries</p>
        </div>
        <div className="input-search-table">
          <p>Search:</p>
          <input ref={inputEl} onChange={onChange}></input>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {
       
          arrayFilters.map((element, index) => (
            <tr className="tr-table" key={index}>
              <td className="td-table">{element.firstName}</td>
              <td className="td-table">{element.lastName}</td>
              <td className="td-table">{element.startDate}</td>
              <td className="td-table">{element.departement}</td>
              <td className="td-table">{element.birthDate}</td>
              <td className="td-table">{element.street}</td>
              <td className="td-table">{element.city}</td>
              <td className="td-table">{element.usState}</td>
              <td className="td-table">{element.zipCode}</td>
            </tr>
          )) 
 
            }
        </tbody>
      </table>
      <div className="footer-table">
        <div className="show-entries">
          <p>Showing # to # of # entries</p>
        </div>
        <div className="input-search-table">
          <div>Previous</div>
          <p>#</p>
          <div>Next</div>
        </div>
      </div>
    </div>
  );
};

export default TableEmployees;
