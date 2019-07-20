import React from "react";
import "./style.css";

export function Libra(props) {

  let considerations = "All products";
  if(props.vegan===true && props.hypoallergenic===true) {
    considerations = "Vegan & Hypoallergenic Products"
  }
  else if(props.vegan===true && props.hypoallergenic===false) {
    considerations = "Vegan Products"
  }
  else if(props.vegan===false && props.hypoallergenic===true) {
    considerations = "Hypoallergenic Products"
  }

  return (
    <>
      {/*libra info will go here*/}
      <h1 className="libraMainTitle">{props.name.toUpperCase()}'S LIBRA PROFILE</h1>
      <div className="libraDiv">
        <div className="libraImage"></div>
        <div className="libraTable">
          <div className="libraTableCategories">
            <p className="libraTableCategory">Username</p>
            <p className="libraTableCategory">Your Libra</p>
            <p className="libraTableCategory">Preferences</p>
          </div>
          <div className="libraTableResults">
            <p className="libraTableText">{props.username}</p>
            <p className="libraTableText">{props.libra}</p>
            <p className="libraTableText">{considerations}</p>
          </div>
        </div>
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
