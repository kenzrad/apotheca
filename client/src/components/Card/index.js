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
  let benefits = props.benefits.toString();
  let newBenefits = "";

  for (let i = 0; i < benefits.length; i++) {
    if (benefits[i] === ",") {
      newBenefits += "  |  ";
    }
    else {
      newBenefits += benefits[i];
    }
  }

  let componentDetails = [];
  //want each component object pushed to this array

  for (let j = 0; j < props.elementComponents.length; j++) {
    let currentId = props.elementComponents[j];
    let componentArr = {};
    for (let k = 0; k < props.allComponents.length; k++) {
      if (parseInt(currentId) === parseInt(props.allComponents[k].id)) {
        componentArr = props.allComponents[k];
      }
    }
    componentDetails.push(componentArr)
  }

  let componentList = "";

  for (let l = 0; l < componentDetails.length; l++) {
    if (l < (componentDetails.length - 1)) {
      componentList = componentList + componentDetails[l].component + ", "
    }
    else {
      componentList += "and " + componentDetails[l].component
    }
  }

  return (
    <>
      <div key={props.key + "-main"} className="smallItem">
        <div
          className="smallItemImage"
          key={props.key + "-firsts"}
          style={{
            backgroundImage:
              `${props.image}`
                ? `url('${props.image}')`
                : `url('https://via.placeholder.com/400')`
          }}>
        </div>
        <div className="smallItemDetails" key={props.key + "-seconds"}>
          <h1 className="smallItemName" key={props.key + "-thirds"}>{props.name}</h1>
          <p className="smallItemText" key={props.key + "-fourths"}>{newBenefits}</p>
          <p className="smallItemText">Components: {componentList}</p>
          {/* end map function here*/}
        </div>
      </div>
    </>
  );
}

export function Card(props) {
  return (
    <>
      <div className="item">
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

export default Card;
