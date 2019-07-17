import React, { Component } from "react";
import { withRouter } from 'react-router';
import API from "../../utils/API";
import Quiz from "../../components/Quiz";
import Navbar from "../../components/Navbar";
import Brand from "../../components/Brand"
import "./style.css";


class Login extends Component {
<<<<<<< HEAD
  moveLeft = (e, num) => {
=======

  // componentDidMount() {
  //   window.location.reload();
  // }

  moveTwoLeft = e => {
>>>>>>> fedb6ba1cc2b600aa0de9bb07b0b308a45ce1013
    e.preventDefault();
    let target = e.currentTarget.parentElement.parentElement;
    let nextTarget = e.currentTarget.parentElement.parentElement;

    for (let i = 0; i < num; i++) {
      nextTarget = nextTarget.previousSibling;
    }

    this.transition(target, "right", "out");
    setTimeout(() => {
      target.classList.add("hidden");
      target.classList.remove("slideOutRight");

      nextTarget.classList.remove("hidden");
      this.transition(nextTarget, "right", "in");
      setTimeout(() => {
        nextTarget.classList.remove("slideInRight");
      }, 250);
    }, 250);
  }

  moveRight = (e, num) => {
    e.preventDefault();
    let target = e.currentTarget.parentElement.parentElement;
    let nextTarget = e.currentTarget.parentElement.parentElement;

    for (let i = 0; i < num; i++) {
      nextTarget = nextTarget.nextSibling;
    }

    this.transition(target, "left", "out");
    setTimeout(() => {
      target.classList.add("hidden");
      target.classList.remove("slideOutLeft");

      nextTarget.classList.remove("hidden");
      this.transition(nextTarget, "left", "in");
      setTimeout(() => {
        nextTarget.classList.remove("slideInLeft");
      }, 250);
    }, 250);
  }

  transition = (target, direction, inOut) => {
    if (inOut === "in") {
      if (direction === "right") {
        target.classList.add("slideInRight");
      } else if (direction === "left") {
        target.classList.add("slideInLeft")
      }
    } else if (inOut === "out") {
      if (direction === "right") {
        target.classList.add("slideOutRight");
      } else if (direction === "left") {
        target.classList.add("slideOutLeft")
      }
    }
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
        <Navbar display="hide"/>
        <Brand />
        <div id="loginAndSignup">
          <div>
            <div>
              <button className="login-link" onClick={e => { this.moveRight(e, 1) }}>Log In</button>
              <button className="login-link-divider">|</button>
              <button className="login-link" onClick={e => { this.moveRight(e, 2) }}>Sign Up</button>
            </div>
          </div>

          <div className="loginDiv hidden">
            <form>
              <input className="login-text" onChange={this.props.handleInputChange} type="text" name="loginUsername" placeholder="username"></input>
              <input className="login-text" onChange={this.props.handleInputChange} type="password" name="loginPassword" placeholder="password"></input>

              <button onClick={this.finalizeLogin}>Log In</button>
            </form>

            <div className="chevrons">
              <button onClick={e => { this.moveLeft(e, 1) }}>Return</button>
            </div>

          </div>

          <div className="signupDiv hidden">
            <form className="signupForm">
              <input onChange={this.props.handleInputChange} name="firstName" type="text" placeholder="First Name"></input>
              <input onChange={this.props.handleInputChange} name="username" type="text" placeholder="Username"></input>
              <input onChange={this.props.handleInputChange} name="password" type="password" placeholder="Password"></input>
              <label className="login-text">Product Preference:</label>
              <input className="login-text login-td" onChange={this.props.handleCheckbox} type="checkbox" name="vegan"></input>
              <label className="login-text" htmlFor="vegan">Vegan</label><br />
              <input className="login-text login-td" onChange={this.props.handleCheckbox} type="checkbox" name="hypoallergenic"></input>
              <label className="login-text" htmlFor="hypoallergenic">Hypoallergenic</label>
            </form>

            <div className="chevrons">
              <button onClick={e => { this.moveLeft(e, 2) }}><i className="fas fa-chevron-left"></i></button>

              <button onClick={e => { this.moveRight(e, 1) }}><i className="fas fa-chevron-right"></i></button>
            </div>

          </div >

          <div className="quizDiv hidden">
            <div>
              <Quiz handleQuiz={this.props.handleQuiz} signup={this.props.signup} />
              <button onClick={e => { this.moveLeft(e, 1) }}><i className="fas fa-chevron-left"></i></button>
            </div>
          </div>
        </div >
      </div >
    )
  }
}

export default withRouter(Login);
