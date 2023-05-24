import React from "react";

import { Link } from "react-router-dom";


import TableEmployeesLib from "../components/TableEmployeesLib";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
const ListEmployee = () => {

  return (
  <>
      <div className="title"><h1  >Current Employees</h1></div>
      <div id="employee-div" className="container container-table">

      <TableEmployeesLib/>
        
      <Link className="main-nav-logo" to="/" >
         <FontAwesomeIcon icon={faHome} /> <p className="p-main-nav">Home</p>   
      </Link>
  
    </div>
    </>
  );
};

export default ListEmployee;
