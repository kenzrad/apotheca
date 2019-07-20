import React from "react";
import "./style.css";

export function Cards({ children }) {
  return (
  <div className="items">{children}</div>
  );
}

export function SmallCards({ children }) {
  return (
  <div className="smallItems">{children}</div>
  );
}

export function SmallCard(props) {
  var benefits = props.benefits.toString();
  var newBenefits = "";

  for(var i=0; i<benefits.length; i++) {
    if (benefits[i]===","){
      newBenefits = newBenefits + benefits[i] + " ";
    }
    else {
      newBenefits += benefits[i];
    }
  }

  return (
    <>
      <div className ="smallItem">
        <div 
          className="smallItemImage" 
          key={props.key + "-first"}
          style={{
            backgroundImage: 
            `${props.image}`
            ? `url('${props.image}')`
            : `url('https://via.placeholder.com/400')` 
          }}>
        </div>
        <div className="smallItemDetails">
          <h1 className="smallItemName" key={props.key + "-third"}>{props.name}</h1>
          <p className="smallItemText">{newBenefits}</p>
        </div>
      </div>
    </>
  );
}

export function Card(props) {
  return (
    <>
      <div className ="item">
        <div 
          className="itemImage" 
          key={props.key + "-first"}
          style={{
            backgroundImage: 
            `${props.image}`
            ? `url('${props.image}')`
            : `url('https://via.placeholder.com/400')` 
          }}>
        </div>
        <div className="itemDetails" key={props.key + "-second"}>

          <h1 className="itemName" key={props.key + "-third"}>{props.name}</h1>
          {/* <h2 className="itemCat" key={props.key + "-fourth"}>{props.category}</h2> */}
          {props.benefits.map(benefit => (
            <p className="itemText" key={props.key + benefit}>{benefit}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card ;
