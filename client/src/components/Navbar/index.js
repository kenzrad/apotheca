import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//this needed to be updated once we have login shibangadangwangthankma'am
var login = "killme"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <div className={ props.display ? "hide-nav" : ""}>
      <div className="line-one" />
      <div className="line-two" />
      <div className="line-three" />
      <nav className="navbar">
        <Link className="nav-brand" to="/">
          APOTHECA
        </Link>
        {/* TOGGLE PLACEHOLDER --> maybe doing the mortar here */}
        <ul className="horizontal-list">
          <li className="nav-item">
            <Link to="/Main" className={window.location.pathname === "/Main" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Elements" className={window.location.pathname === "/Elements" ? "nav-link active" : "nav-link"}>
              Elements
            </Link>
          </li>
        {/*wrap in check username*/}
          <li className="nav-item">
            <Link to={`/Profile/${login}`} className={window.location.pathname === `/Profile/${login}` ? "nav-link active" : "nav-link"}>
              Libra
            </Link>
          </li>
          <li>
            <div className="nav-search-container">
              <input className="nav-search" type="search" aria-label="Search" />
              <button><i className="nav-search fas fa-search"></i></button>
            </div>
          </li>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;