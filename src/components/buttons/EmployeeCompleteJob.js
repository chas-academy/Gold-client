import React from "react";
// import { connect } from 'react-redux';
import "./style.css";

const EmployeeCompleteJob = (props) => {
  return (
    <div>
      <form method="post" action="" onSubmit={props.completeJob}>
        <button typ="submit" className="btn btn-primary accept">
          Bekräfta slutfört jobb
        </button>
      </form>
    </div>
  );
};

export default EmployeeCompleteJob
