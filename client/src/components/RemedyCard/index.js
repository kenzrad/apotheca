import React from "react";
import "./style.css";

export function RemedyCards({ children }) {
  return (
  <div className="remedies">{children}</div>
  );
}

export function RemedyCard(props) {
  return (
    <>
      <div className="remedy" key={props._id}>
        <h1 className="remedyTitle">{props.title}</h1>
        <div className="remedyInstructions">
          <h3 className="remedyHeader">Ingredients</h3>
          <ul className="remedyList">{props.ingredients.map(ingredient => (
              <li key={props.key + ingredient}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="remedyHeader">Instructions</h3>
          <ul className="remedyList">{props.instructions.map(instruction => (
              <li key={props.key + instruction}>{instruction}</li>
            ))}
          </ul>
        </div>
        <div className="remedyInfo">
          <p>Prep time: {props.time}</p>
          <p>Frequency: {props.consistency}</p>
          <p>How it works: {props.works} <a className="remedyLink" target="_target" href={props.source}>(read more)</a></p>
        </div>
      </div>
    </>
  );
}

export default RemedyCard ;
