import React, { Component } from "react";
import { withRouter } from "react-router";
import API from "../../utils/API";
import Quiz from "../../components/Quiz";
import Navbar from "../../components/Navbar";
import Brand from "../../components/Brand";
import Modal from "../../components/Modal";
import "./style.css";

class Login extends Component {
  moveLeft = (e, num) => {
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
  };

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
  };

  transition = (target, direction, inOut) => {
    if (inOut === "in") {
      if (direction === "right") {
        target.classList.add("slideInRight");
      } else if (direction === "left") {
        target.classList.add("slideInLeft");
      }
    } else if (inOut === "out") {
      if (direction === "right") {
        target.classList.add("slideOutRight");
      } else if (direction === "left") {
        target.classList.add("slideOutLeft");
      }
    }
  };

  finalizeLogin = e => {
    e.preventDefault();

    API.getUserLogin(this.props.login()).then(result => {
      if (result.data === null) {
        document.getElementsByName("loginError")[0].classList.remove("hidden");
      } else {
        sessionStorage.setItem("userData", JSON.stringify(result.data));
        // this.props.history.push("/profile/" + result.data.userName);
        this.props.history.push("/main");
      }
    });
  };

  render() {
    return (
      <div className="login-backdrop">
        <Navbar display="hide" />
        <Brand />
        <div id="loginAndSignup">
          <div id="loginSignupLinks">
            <div>
              <button
                className="login-link"
                onClick={e => {
                  this.moveRight(e, 1);
                }}
              >
                Log In
              </button>
              <span>|</span>
              <button
                className="login-link"
                onClick={e => {
                  this.moveRight(e, 2);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="loginDiv hidden">
            <form id="loginForm">
              <input
                className="login-text"
                onChange={this.props.handleInputChange}
                type="text"
                name="loginUsername"
                placeholder="username"
              />
              <input
                className="login-text"
                onChange={this.props.handleInputChange}
                type="password"
                name="loginPassword"
                placeholder="password"
              />
            </form>

            <div className="chevrons">
              <button
                title="Go back"
                onClick={e => {
                  this.moveLeft(e, 1);
                  document.getElementById("loginForm").reset();
                  this.props.resetLogin();
                }}
              >
                <i className="fas fa-chevron-left" />
              </button>
              <button title="Log in" onClick={this.finalizeLogin}>
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>

          <div className="signupDiv hidden">
            <form id="signupForm">
              <input
                onChange={this.props.handleInputChange}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <input
                onChange={this.props.handleInputChange}
                name="username"
                type="text"
                placeholder="Username"
              />
              <input
                onChange={this.props.handleInputChange}
                name="password"
                type="password"
                placeholder="Password"
              />
              <input
                onChange={this.props.handleConfirmPasswordChange}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
              <label className="login-text">Product Preference:</label>
              <div className="checkbox">
                <input
                  className="login-text login-td"
                  onChange={this.props.handleCheckbox}
                  type="checkbox"
                  name="vegan"
                />
                <label className="login-text" htmlFor="vegan">
                  Vegan
                </label>
              </div>

              <div className="checkbox">
                <input
                  className="login-text login-td"
                  onChange={this.props.handleCheckbox}
                  type="checkbox"
                  name="hypoallergenic"
                />
                <label className="login-text" htmlFor="hypoallergenic">
                  Hypoallergenic
                </label>
              </div>
            </form>

            <div className="chevrons">
              <button
                title="Go back"
                onClick={e => {
                  this.moveLeft(e, 2);
                  document.getElementById("signupForm").reset();
                  this.props.resetSignup();
                }}
              >
                <i className="fas fa-chevron-left" />
              </button>

              <button
                title="Sign up"
                type="submit"
                onClick={e => {
                  this.moveRight(e, 1);
                }}
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>

          <div className="quizDiv hidden">
            <div id="quiz">
              <Quiz
                handleQuiz={this.props.handleQuiz}
                transition={this.transition}
              />
            </div>

            <div className="chevrons">
              <button
                title="Go back"
                onClick={e => {
                  this.moveLeft(e, 1);
                }}
              >
                <i className="fas fa-chevron-left" />
              </button>
              <button title="Submit" type="submit" onClick={this.props.signup}>
                Submit
              </button>
            </div>
          </div>
        </div>
        {/* MODALS */}
        <Modal name="disclaimer">
          <h3 className="loginModalText">APOTHECA DISCLAIMER</h3>
          <p className="loginModalSubtext">
            <ul>
              The content provided on this website is strictly for general
              informational purposes and should not be considered medical
              advice. No product/remedy information is intended to be taken as a
              diagnoses, treatment, or preventative for any disease.
            </ul>
            <ul>
              The information on this website has been accumulated from many
              published sources and websites and should be referred to as a
              guide. Apotheca cannot guarantee the accuracy of all the
              information provided on this website and accepts no liability in
              respect to omission or error.
            </ul>
            <ul>
              We are not responsible for any reaction or any sensitivity our
              practices and elements might cause to your skin. If you think you
              might have skin sensitivities, please consult a medical doctor or
              dermatologist before proceeding with our remedies.
            </ul>
            The information on this site has not been reviewed, evaluated, or
            approved by the Food and Drug Administration.
            <ul />
            <ul>
              If you do proceed to test the remedies we have provided, an
              allergy patch test is recommended if there is any concern or
              history for skin reactions or sensitivity.
            </ul>
            <ul>
              Any comments or feedback related to our website are individually
              biased and should not be taken as a form of legitimate medical
              advice.
            </ul>
          </p>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Login);
