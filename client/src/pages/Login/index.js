import React, { Component } from "react";
import { withRouter } from 'react-router';
import API from "../../utils/API";
import Quiz from "../../components/Quiz";
import Brand from "../../components/Brand"
import "./style.css";


class Login extends Component {
  moveTwoLeft = e => {
    e.preventDefault();

    e.currentTarget.parentElement.parentElement.classList.add("hidden");
    e.currentTarget.parentElement.parentElement.previousSibling.previousSibling.classList.remove("hidden");
  }

  moveLeft = e => {
    e.preventDefault();

    e.currentTarget.parentElement.parentElement.classList.add("hidden");
    e.currentTarget.parentElement.parentElement.previousSibling.classList.remove("hidden");
  }

  moveRight = e => {
    e.preventDefault();

    e.currentTarget.parentElement.parentElement.classList.add("hidden");
    e.currentTarget.parentElement.parentElement.nextSibling.classList.remove("hidden");
  }

  moveTwoRight = e => {
    e.preventDefault();

    e.currentTarget.parentElement.parentElement.classList.add("hidden");
    e.currentTarget.parentElement.parentElement.nextSibling.nextSibling.classList.remove("hidden");
  }

  finalizeLogin = e => {
    e.preventDefault();

    API.getUserLogin(this.props.login())
    .then(result => {
      if (result.data === null) {
        alert("No user found.");
      } else {
        sessionStorage.setItem('userData', JSON.stringify(result.data));
        // this.props.history.push("/profile/" + result.data.userName);
        this.props.history.push("/main");
      }
    });
  }

  render() {
    return (
      <div className="login-backdrop">
        <Brand />
        <div id="loginAndSignup">
          <div>
            <div>
              <a className="login-link" onClick={this.moveRight}>Log In</a>
              <a className="login-link-divider">|</a>
              <a className="login-link" onClick={this.moveTwoRight}>Sign Up</a>
            </div>
          </div>

          <div className="loginDiv hidden">
            <form>
              <input className="login-text" onChange={this.props.handleInputChange} type="text" name="loginUsername" placeholder="username"></input>
              <input className="login-text" onChange={this.props.handleInputChange} type="password" name="loginPassword" placeholder="password"></input>

              <button onClick={this.finalizeLogin}>Log In</button>
            </form>

            <div className="chevrons">
              <a onClick={this.moveLeft}><i className="fas fa-chevron-left"></i></a>

              <a onClick={this.moveRight}><i className="fas fa-chevron-right"></i></a>
            </div>

          </div>

          <div className="signupDiv hidden">
            <form className="signupForm">
              <input onChange={this.props.handleInputChange} name="firstName" type="firstName" placeholder="First Name"></input>
              <input onChange={this.props.handleInputChange} name="username" type="text" placeholder="Username"></input>
              <input onChange={this.props.handleInputChange} name="password" type="password" placeholder="Password"></input>
              <label className="login-text">Product Preference:</label>
              <input className="login-text login-td" onChange={this.props.handleCheckbox} type="checkbox" name="vegan"></input>
              <label className="login-text" for="vegan">Vegan</label><br />
              <input className="login-text login-td" onChange={this.props.handleCheckbox} type="checkbox" name="hypoallergenic"></input>
              <label className="login-text" for="hypoallergenic">Hypoallergenic</label>
            </form>

            <div className="chevrons">
              <a onClick={this.moveTwoLeft}><i className="fas fa-chevron-left"></i></a>

              <a onClick={this.moveRight}><i className="fas fa-chevron-right"></i></a>
            </div>

          </div >

          <div className="quizDiv hidden">
            <div>
              <Quiz handleQuiz={this.props.handleQuiz} signup={this.props.signup} />
              <button onClick={this.moveLeft}><i className="fas fa-chevron-left"></i></button>
            </div>
          </div>
        </div >
      </div >
    )
  }
}

export default withRouter(Login);
