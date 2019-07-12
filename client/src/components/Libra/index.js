import React from "react";
import "./style.css";

export function Cards({ children }) {
  return (
  <div className="items">{children}</div>
  );
}

export function Libra(props) {
  return (
    <>
    <div className="libra-div">
      <h1>{props.username}</h1>
      <h1>{props.libra}</h1>
    </div>
    </>
  );
}

export default Libra ;
