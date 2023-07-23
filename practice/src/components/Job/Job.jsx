import React from "react";
import "./job.css";

const Job = (props) => {
  return (
    <div className="job_container">
      <h1 style={{ color: "blue", backgroundColor: "yellow" }}>
        {props.salary}
      </h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default Job;
