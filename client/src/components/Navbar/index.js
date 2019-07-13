import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

var login = "dummy";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <>
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
            <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/Main" ? "nav-link active" : "nav-link"}>
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
              <a href="#"><i className="nav-search fas fa-search"></i></a>
            </div>
          </li>
          </ul>
        </nav>
    </>
  );
}

export default Navbar;
