import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends Component {

  //this needed to be updated once we have login shibangadangwangthankma'am
  userData = (sessionStorage.userData ? JSON.parse(sessionStorage.userData) : "no data");

  componentDidMount() {
    if (!this.userData || this.userData === "no data") {
      document.getElementById("libraLink").classList.add("hidden");
    }
  }
  
  // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
  render() {
    return (
      <div className={ this.props.display ? "hide-nav" : ""}>
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
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Elements" className={window.location.pathname === "/Elements" ? "nav-link active" : "nav-link"}>
                Elements
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Remedies" className={window.location.pathname === "/Remedies" ? "nav-link active" : "nav-link"}>
                Remedies
              </Link>
            </li>
          {/*wrap in check username*/}
            <li id="libraLink" className="nav-item">
              <Link to={`/Profile/${this.userData.userName ? this.userData.userName : "nouser"}`} className={window.location.pathname === `/Profile/${this.userData.userName ? this.userData.userName : "nouser"}` ? "nav-link active" : "nav-link"}>
                Libra
              </Link>
            </li>
            <li>
              <div className="nav-search-container">
                <input className="nav-search" type="search" aria-label="Search" />
                <button className="nav-search-btn"><i className="nav-search fas fa-search"></i></button>
              </div>
            </li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Navbar;