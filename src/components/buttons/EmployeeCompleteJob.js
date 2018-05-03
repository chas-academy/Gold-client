import React, { Component } from "react";
// import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import "./style.css";

const EmployeeCompleteJob = () => {
  return (
    <div>
      <form method="post" action="">
        <button typ="submit" className="btn btn-primary accept">
          Bekräfta avslutat jobb
        </button>
      </form>
    </div>
  );
};

export default EmployeeCompleteJob
