import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand apotheca-title" to="/">
        APOTHECA
      </Link>
      {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> */}
      
      {/* class="collapse navbar-collapse" id="navbarSupportedContent" */}
      <div class="navbar-links" >
        <ul class="horizontal-list">
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/" || window.location.pathname === "/Main" ? "nav-link active" : "nav-link"}
            >Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Elements"
              className={window.location.pathname === "/Elements" ? "nav-link active" : "nav-link"}
            >Elements
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Libra"
              className={window.location.pathname === "/Libra" ? "nav-link active" : "nav-link"}
            >Libra
            </Link>
          </li>
          <li>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <a><i class="fas fa-search"></i></a>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
