import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from 'react-router';
import API from "../../utils/API";
import Quiz from "../../components/Quiz";
import Navbar from "../../components/Navbar";
import { Brand, BrandStatement } from "../../components/Brand";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import * as ModalContent from "../../components/ModalContent";
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
    let loginInfo = this.props.login();

    if (!loginInfo.Loginname && loginInfo.password) {
      ReactDOM.render(<ModalContent.LoginNoUsername />, document.getElementsByName("ErrorModal")[0]);
      document.getElementsByName("ErrorModal")[0].classList.remove("hidden");
    } else if (loginInfo.Loginname && !loginInfo.password) {
      ReactDOM.render(<ModalContent.LoginNoPassword />, document.getElementsByName("ErrorModal")[0]);
      document.getElementsByName("ErrorModal")[0].classList.remove("hidden");
    } else if (!loginInfo.Loginname && !loginInfo.password) {
      ReactDOM.render(<ModalContent.DidntPutAnything />, document.getElementsByName("ErrorModal")[0]);
      document.getElementsByName("ErrorModal")[0].classList.remove("hidden");
    } else {
      API.getUserLogin(this.props.login())
        .then(result => {
          if (result.data === null) {
            ReactDOM.render(<ModalContent.LoginError />, document.getElementsByName("ErrorModal")[0]);
            document.getElementsByName("ErrorModal")[0].classList.remove("hidden");
          } else {
            sessionStorage.clear();
            sessionStorage.setItem('userData', JSON.stringify(result.data));
            this.props.history.push("/Profile/" + result.data.userName);
          }
        });
    }
  }

  continueToQuiz = (newState, callback) => {
    if (!newState.firstName) {
      ReactDOM.render(<ModalContent.NoFirstName />, document.getElementsByName("ErrorModal")[0]);
      document.getElementsByName("ErrorModal")[0].classList.remove("hidden");
      return false;
    } else if (!newState.username) {
      ReactDOM.render(<ModalContent.SignupNoUsername />, document.getElementsByName("ErrorModal")[0]);
      document.getElementsByName("ErrorModal")[0].classList.remove("hidden");
      return false;
    } else if (!newState.password) {
      ReactDOM.render(<ModalContent.SignupNoPassword />, document.getElementsByName("ErrorModal")[0]);
      document.getElementsByName("ErrorModal")[0].classList.remove("hidden");
      return false;
    } else if (newState.password !== newState.confirmPassword) {
      ReactDOM.render(<ModalContent.PasswordMismatch />, document.getElementsByName("ErrorModal")[0]);
      document.getElementsByName("ErrorModal")[0].classList.remove("hidden");
      return false;
    } else {
      if (callback) {
        callback();
      }
      return true;
    }
  }

  showDisclaimer = e => {
    e.preventDefault();
    let newState = this.props.signup();
    let prevFieldsOkay = this.continueToQuiz(newState);


    if (prevFieldsOkay) {
      if (newState.quizResults.indexOf("empty") !== -1) {
        ReactDOM.render(<ModalContent.QuizNotEmpty />, document.getElementsByName("ErrorModal")[0]);
        document.getElementsByName("ErrorModal")[0].classList.remove("hidden");
      } else {
        API.getUserNameCheck({ userName: newState.username })
          .then(result => {
            if (result.data) {
              ReactDOM.render(<ModalContent.UserExists />, document.getElementsByName("ErrorModal")[0]);
              document.getElementsByName("ErrorModal")[0].classList.remove("hidden");
            } else {
              document.getElementsByName("DisclaimerModal")[0].classList.remove("hidden");
            }
          });
      }
    }
  }

  finalizeSignup = () => {
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

    this.findOverallCategory(newUser.libraCategories);

    // Create API route that checks username


    document.getElementsByName("DisclaimerModal")[0].classList.add("hidden");
    document.getElementsByName("LoadingModal")[0].classList.remove("hidden");

    let variable = {};
    let convertedQuiz = [];
    let talliedQuiz = {};

    if (newUser.vegan) {
      variable.vegan = newUser.vegan;
    }

    if (newUser.hypoallergenic) {
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

        newUser.libraOverall = this.findOverallCategory(talliedQuiz);

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
              newUser.components.push(result.data[0]);
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




  findOverallCategory = categories => {
    let currentOverall = "kalon";
    let currTop = 0;

    for (let key in categories) {
      if (categories[key] > currTop) {
        currentOverall = key;
        currTop = categories[key];
      }
    }

    return currentOverall;
  }

  render() {
    return (
      <div className="login-backdrop">
        <Navbar display="hide" />
        <Link className="brandLink" to="/Main">
          <Brand />
        </Link>
        <div id="loginAndSignup">
          <div id="loginSignupLinks">
            <div>
              <button className="login-link" onClick={e => { this.moveRight(e, 1) }}>Log In</button>
              <span>|</span>
              <button className="login-link" onClick={e => { this.moveRight(e, 2) }}>Sign Up</button>
              <span>|</span>
              <button className="login-link" onClick={e => { document.getElementsByName("BrandStatementModal")[0].classList.remove("hidden") }}>Learn More</button>
            </div>
          </div>

          <div className="loginDiv hidden">
            <form id="loginForm">
              <input className="login-text" onChange={this.props.handleInputChange} type="text" name="loginUsername" placeholder="username"></input>
              <input className="login-text" onChange={this.props.handleInputChange} type="password" name="loginPassword" placeholder="password"></input>


            </form>

            <div className="chevrons">
              <button title="Go back" onClick={e => {
                this.moveLeft(e, 1);
                document.getElementById("loginForm").reset();
                this.props.resetLogin();
              }}><i className="fas fa-chevron-left chevron"></i></button>
              <button title="Log in" onClick={this.finalizeLogin}><i className="fas fa-chevron-right chevron"></i></button>
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
              <button title="Go back" onClick={e => {
                this.moveLeft(e, 2);
                document.getElementById("signupForm").reset();
                this.props.resetSignup();
              }}><i className="fas fa-chevron-left chevron"></i></button>

              <button title="Sign up" type="submit" onClick={e => {
                this.continueToQuiz(this.props.signup(), () => { this.moveRight(e, 1) });
              }}><i className="fas fa-chevron-right chevron"></i></button>
            </div>

          </div>

          <div className="quizDiv hidden">
            <div id="quiz">
              <Quiz handleQuiz={this.props.handleQuiz} transition={this.transition} />
            </div>

            <div className="chevrons">
              <button title="Go back" onClick={e => { this.moveLeft(e, 1) }}><i className="fas fa-chevron-left"></i></button>
              <button title="Submit" type="submit" onClick={this.showDisclaimer}>Submit</button>
            </div>
          </div>
        </div>
        {/* MODALS */}
        <Modal className="modal modal-small hidden" name="ErrorModal">
          {/* ModalContent gets pushed to here. */}
        </Modal>
        <Modal className="modal modal-large hidden" name="DisclaimerModal">
          <ModalContent.Disclaimer />
          <button title="submit" onClick={this.finalizeSignup}>Sign Up</button>
        </Modal>
        <Modal className="modal modal-small hidden" name="LoadingModal" close="false">
          <ModalContent.Loading />
        </Modal>
        <Modal className="modal modal-large hidden" name="BrandStatementModal">
          <BrandStatement />
        </Modal>
      </div>
    )
  }
}


export default withRouter(Login);
