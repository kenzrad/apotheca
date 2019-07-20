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

  let symbol = "Φ";
  let overview = "placeholder text";
  if(props.libra.toLowerCase() === "kalon") {
    symbol = "Ξ";
    overview = "You are KALON. You want to sustain and rejuvinate the natural beauty already held in your skin.";
  }
  else if(props.libra.toLowerCase() === "bibe") {
    symbol = "Ψ";
    overview = "You are BIBE. You want to hydrate and soothe your skin to restore your beautiful, glowing complexion. ";
  }
  else if(props.libra.toLowerCase() === "novo") {
    symbol = "Δ";
    overview = "You are NOVO. You want to wash away impurities to calm and enhance your complexion, resulting in radiant skin.";
  }
  else if(props.libra.toLowerCase() === "elavo") {
    symbol = "Φ";
    overview = "You are ELAVO. You want to purify and cleanse yout complexion to reveal clear and radiant skin.";
  }

  return (
    <>
      {/*libra info will go here*/}
      <h1 className="libraMainTitle">{props.name.toUpperCase()}'S LIBRA PROFILE</h1>
      <div className="libraDiv">
        <div>
          <h1 className="libraSymbol">{symbol}</h1>
        </div>
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
        <div className="libraOverview">
          <p className="libraOverviewText">{overview}</p>
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
