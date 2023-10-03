import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../page/Home";

const AppRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/*" element={<Home />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRoute;
