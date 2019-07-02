import React from "react";
import './styles.css';

function Item(props) {
  return (
    <>
      {/* Sets background image url to props.image or a placeholder. */}
      <div className="item" style={{ backgroundImage: `url(${props.image || "https://via.placeholder.com/500"})` }}>
        <div className="itemDescription">
          <div>
            {/* Props.description will appear when image is hovered over. */}
            {props.description}
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
