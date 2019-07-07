import React from "react";
import './styles.css';

console.log("I'm in the item prop");

// export function Items() {
//   return ( 
    
//     <div className="elements-container">{console.log("hey")}</div>
//   );
// }

function Item({ props }) {
  return (
    <>
      <div className="item" style={{ backgroundImage: `url( "https://via.placeholder.com/500")` }}>
        <div className="itemMain">
          <div className="itemSynopsis">Short description of the item</div>
          {/* <div className="itemName">{props.name}</div> */}
        </div>
          <div className="itemDescription">
          <div>More details will appear hear!
            {/* Props.description will appear when image is hovered over. */}
            {/* {props.description} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default (Item);


