import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {
  const { Name, School, Total, Goal } = props;
  const average = (Total / Goal).toFixed(2);

  return (
    <div className="score-container">
      <h1 id="score">Student Score Details</h1>

      <p id="name">
        <b>Name:</b> {Name}
      </p>

      <p id="school">
        <b>School:</b> {School}
      </p>

      <p id="total">
        <b>Total:</b> {Total} Marks
      </p>

      <p id="avg">
        <b>Average Score:</b> {average}%
      </p>
    </div>
  );
}

export default CalculateScore;