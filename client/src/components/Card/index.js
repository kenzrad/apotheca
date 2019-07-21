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

  for (var i = 0; i < benefits.length; i++) {
    if (benefits[i] === ",") {
      newBenefits = newBenefits + benefits[i] + " ";
    }
    else {
      newBenefits += benefits[i];
    }
  }

  var componentDetail = [];
  //want each component object pushed to this array

  for (var j = 0; j < props.elementComponents.length; j++) {
    var currentId = props.elementComponents[j];
    var componentArr = {};
    for (var k = 0; k < props.allComponents.length; k++) {
      if (parseInt(currentId) === parseInt(props.allComponents[k].id)) {
        componentArr = props.allComponents[k];
      }
    }
    componentDetail.push(componentArr)
  }

  //loop through this array and create a new object that looks like this:
  // componentDetail = [{
  //    id: 1,
  //    name: Vitamin C,
  //    description = "yepeypepeyo" 
  //}]

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
          {/* <p className="smallItemText" key={props.key + "-fifths"}>{componentDetail}</p> */}
          {/* map through the componentDetail array you made and wrap the <p> tag with the function */}
          <p>Components</p>
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
