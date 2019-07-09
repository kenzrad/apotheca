import React from "react";
import "./style.css";

export function Cards({ children }) {
  return (
  <div className="items">{children}</div>
  );
}

export function Card(props) {
  console.log(props.image)
  return (
    <>
    <div 
      className="item" 
      style={{
        backgroundImage: 
        // `url('/assets/images/elements/almond.png')` 
        // ? `url('/assets/images/elements/almond.png')` 
        `${props.image}`
        ? `url('${props.image}')`
        : `url('https://via.placeholder.com/400')` 
      }}>
      <div className="itemDetails">
        {/* Props.description will appear when image is hovered over. */}
        <h2 className="itemName">{props.name}</h2>
        <p className="itemDescription">{props.description}</p>
      </div>
    </div>
    </>
  );
}

export default Card ;
