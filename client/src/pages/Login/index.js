import React, { Component } from "react";
import { withRouter } from 'react-router';
import API from "../../utils/API";
import Quiz from "../../components/Quiz";
import Navbar from "../../components/Navbar";
import Brand from "../../components/Brand";
import Modal from "../../components/Modal";
import "./style.css";

let convertedQuiz = [];
let talliedQuiz = {};
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
          document.getElementsByName("loginError")[0].classList.remove("hidden");
        } else {
          sessionStorage.clear();
          sessionStorage.setItem('userData', JSON.stringify(result.data));
          this.props.history.push("/Profile/" + result.data.userName);
        }
      });
  }

  finalizeSignup = e => {
    e.preventDefault();

    let newState = this.props.signup();

    let newUser = {
      userName: newState.username,
      password: newState.password,
      firstName: newState.firstName,
      vegan: newState.vegan,
      hypoallergenic: newState.hypoallergenic,
      libraOverall: "",
      libraCategories: [],
      elements: [],
      components: [],
      remedies: []
    }

    //Create API route that checks username
    API.getUserNameCheck({ userName: newState.username })
      .then(result => {
        if (result.data) {
          //show modal that their username sucks
        } else {
                   
          let variable = {};
          if(newUser.vegan) {
            variable.vegan = newUser.vegan;
          }
          if(newUser.hypoallergenc) {
            variable.hypoallergenic = newUser.hypoallergenic;
          }

          API.getUserElements(variable)
            .then(result => {
              let resultArr = result.data;
              let componentList = [];
              let remediesList = [];
              let finished = {
                components: false,
                remedies: false
              }

              convertedQuiz = this.props.convertQuizResults();
              talliedQuiz = this.props.countQuizResults(convertedQuiz);
              newUser.libraCategories = talliedQuiz;

              for (let item in talliedQuiz) {
                let count = 0;
                let goal = 0;
                let index = 0;
                goal = talliedQuiz[item];

                while (count !== goal && index < resultArr.length) {
                  if (resultArr[index].category === item) {
                    newUser.elements.push(resultArr[index]);
                    count++;
                  }
                  index++;
                }
              }

              // SET UP NEWUSER COMPONENTS
              for (let item of newUser.elements) {
                for (let id of item.components) {
                  if (componentList.indexOf(id) === -1) {
                    componentList.push(id);
                  }
                }
              }

              for (let id of componentList) {
                API.getUserComponents({ componentId: parseInt(id) })
                  .then(result => {
                    newUser.components.push(result.data);
                    if (id === componentList[componentList.length - 1]) {
                      finished.components = true;
                    }
                  });
              }

              //SET UP NEWUSER REMEDIES
              for (let item of newUser.elements) {
                for (let id of item.home_remedy) {
                  if (remediesList.indexOf(id) === -1) {
                    remediesList.push(id);
                  }
                }
              }

              for (let id of remediesList) {
                API.getUserRemedies({ remedyId: parseInt(id) })
                  .then(result => {
                    newUser.remedies.push(result.data[0]);
                    if (id === remediesList[remediesList.length - 1]) {
                      finished.remedies = true;
                    }
                  });
              }

              let interval = setInterval(() => {
                if (finished.remedies === false && finished.components === false) {
                  // console.log("working");
                  //do nothing
                } else {
                  API.createLoginUser(newUser)
                    .then(result => {
                      // console.log(newUser)
                      sessionStorage.clear();
                      sessionStorage.setItem('userData', JSON.stringify(newUser));
                      this.props.history.push("/Profile/" + newUser.userName);
                    });

                  clearInterval(interval);
                }
              }, 100);
            });
        }
      });
  }

  render() {
    return (
      <div className="login-backdrop">
        <Navbar display="hide" />
        <Brand />
        <div id="loginAndSignup">
          <div id="loginSignupLinks">
            <div>
              <button className="login-link" onClick={e => { this.moveRight(e, 1) }}>Log In</button>
              <span>|</span>
              <button className="login-link" onClick={e => { this.moveRight(e, 2) }}>Sign Up</button>
            </div>
          </div>

          <div className="loginDiv hidden">
            <form id="loginForm">
              <input className="login-text" onChange={this.props.handleInputChange} type="text" name="loginUsername" placeholder="username"></input>
              <input className="login-text" onChange={this.props.handleInputChange} type="password" name="loginPassword" placeholder="password"></input>

              
            </form>

            <div className="chevrons">
              <button title="Go back" onClick={e => { this.moveLeft(e, 1); document.getElementById("loginForm").reset(); this.props.resetLogin(); }}><i className="fas fa-chevron-left"></i></button>
              <button title="Log in" onClick={this.finalizeLogin}><i className="fas fa-chevron-right"></i></button>
            </div>
          </div>

          <div className="signupDiv hidden">
            <form id="signupForm">
              <input onChange={this.props.handleInputChange} name="firstName" type="text" placeholder="First Name"></input>
              <input onChange={this.props.handleInputChange} name="username" type="text" placeholder="Username"></input>
              <input onChange={this.props.handleInputChange} name="password" type="password" placeholder="Password"></input>
              <input onChange={this.props.handleConfirmPasswordChange} name="confirmPassword" type="password" placeholder="Confirm Password"></input>
              <label className="login-text">Product Preference:</label>
              <div className="checkbox">
                <input className="login-text login-td" onChange={this.props.handleCheckbox} type="checkbox" name="vegan"></input>
                <label className="login-text" htmlFor="vegan">Vegan</label>
              </div>

              <div className="checkbox">
                <input className="login-text login-td" onChange={this.props.handleCheckbox} type="checkbox" name="hypoallergenic"></input>
                <label className="login-text" htmlFor="hypoallergenic">Hypoallergenic</label>
              </div>
            </form>

            <div className="chevrons">
              <button title="Go back" onClick={e => { this.moveLeft(e, 2); document.getElementById("signupForm").reset(); this.props.resetSignup(); }}><i className="fas fa-chevron-left"></i></button>

              <button title="Sign up" type="submit" onClick={e => { this.moveRight(e, 1) }}><i className="fas fa-chevron-right"></i></button>
            </div>

          </div>

          <div className="quizDiv hidden">
            <div id="quiz">
              <Quiz handleQuiz={this.props.handleQuiz} transition={this.transition} />
            </div>

            <div className="chevrons">
              <button title="Go back" onClick={e => { this.moveLeft(e, 1) }}><i className="fas fa-chevron-left"></i></button>
              <button title="Submit" type="submit" onClick={this.finalizeSignup}>Submit</button>
            </div>
          </div>
        </div>
        {/* MODALS */}
        <Modal name="loginError">
          <h3 className="loginModalText">Username/Password Not Found</h3>
          <p className="loginModalSubtext">Did you use the correct username and password combination?</p>
        </Modal>
      </div>
    )
  }
}

export default withRouter(Login);
