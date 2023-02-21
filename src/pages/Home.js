import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
      <Link className="main-nav-logo" to="/list">
        View Current Employees
      </Link>
      <h2>Create Employee</h2>

      <Form />
      </div>
    </div>
  );
};

export default Home;
