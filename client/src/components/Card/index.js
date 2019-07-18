import React from "react";
import "./style.css";

export function Cards({ children }) {
  return (
  <div className="items">{children}</div>
  );
}

export function Benefits(props) {
  return (
    <p className="itemDescription">{props.benefit}</p>
  )
}


export function Card(props) {
  return (
    <>
    <div 
      className="item" 
      key={props.key + "-first"}
      style={{
        backgroundImage: 
        // `url('/assets/images/elements/almond.png')` 
        // ? `url('/assets/images/elements/almond.png')` 
        `${props.image}`
        ? `url('${props.image}')`
        : `url('https://via.placeholder.com/400')` 
      }}>
      <div className="itemDetails" key={props.key + "-second"}>
        {/* Props.description will appear when image is hovered over. */}
        <h2 className="itemName" key={props.key + "-third"}>{props.name}</h2>
        <h3 className="itmeCat" key={props.key + "-fourth"}>{props.category}</h3>
        {props.benefits.map(benefit => (
          <p key={props.key + benefit}>{benefit}</p>
        ))}
      </div>
    </div>
    </>
  );
}

export default Card ;
