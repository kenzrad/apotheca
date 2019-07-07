import React from "react";
import "./style.css";

export function Cards({ children }) {
  return (
  <div className="items">{children}</div>
  );
}

export function Card(props) {
  return (
      <div className="item" style={{ backgroundImage: `url( "https://via.placeholder.com/500")` }}>
        <div className="itemMain">
          <div className="itemName">{props.name}</div>
        </div>
          <div className="itemDescription">
          <div>
            {/* Props.description will appear when image is hovered over. */}
            {props.description}
          </div>
        </div>
      </div>
  );
}

export default Card ;
