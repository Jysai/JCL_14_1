import React from "react";
import { Link } from "react-router-dom";

const ListEmployee = () => {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <Link className="main-nav-logo" to="/">
        Home
      </Link>
    </div>
  );
};

export default ListEmployee;
