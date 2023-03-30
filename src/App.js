import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ListEmployee from "./pages/ListEmployee";


import "./styles/index.css";
import "./styles/dropdown.css"
import "./styles/modal.css"

function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/list" element={<ListEmployee />} />
        </Routes>
      </Router>

  );
}

export default App;
