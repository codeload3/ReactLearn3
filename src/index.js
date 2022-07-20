import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}</p>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 100)}</p>
  </div>,
  document.getElementById("root")
);
