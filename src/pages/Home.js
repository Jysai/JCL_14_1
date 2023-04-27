import React from "react";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className="form-home">
      <Modal />
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link className="main-nav-logo" to="/list">
        <FontAwesomeIcon icon={faTableColumns} /> <p className="p-main-nav"> View Current Employees</p>
        </Link>
       

        <Form />
      </div>
    </div>
  );
};

export default Home;
