import React from "react";
import "./style.css";

export function Libra(props) {
  return (
    <>
    <div className="libra-div">
      {/*libra info will go here*/}
      <h1></h1>
    </div>
    </>
  );
}

export function LibraSectionHeader(props) {
  return (
    <h1 className="libraSectionTitle">{props.name.toUpperCase()}'S {props.sectionName}</h1>
  )
}

export default Libra ;
