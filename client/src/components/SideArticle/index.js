import React from "react";
import './styles.css';

export function SideArticle( props ) {
  return (
    <>
    
      <div className="sideArticleDiv">
        <img className="sideImage" alt="Side Article" src={props.image}></img>
        <h3 className="sideTitle">{props.title}</h3>
        <p className="sideText">{props.synopsis}<a className="sideLink" href={props.link}> (read more)</a></p>
      </div>
       
    </>
  );
}

export default SideArticle;
