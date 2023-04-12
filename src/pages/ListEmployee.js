import React from "react";

import { Link } from "react-router-dom";

import TableEmployees from "../components/TableEmployees";

const ListEmployee = () => {


  

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <TableEmployees/>

      <Link className="main-nav-logo" to="/">
        Home
      </Link>
  
    </div>
  );
};

export default ListEmployee;
