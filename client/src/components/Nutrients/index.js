import React from "react";
import "./style.css";

export function Nutrients({ children }) {
  return (
    <div className="nutrients">{children}</div>
  );
}

export function Nutrient(props) {

  return (
    <>
      <div key={props.key}>
        <h1 className="nutrientName">{props.name}</h1>
        <p className="nutrientText">{props.description}</p>
      </div>
    </>
  );
}

export default Nutrients;
