import React, { Component } from "react";
import Quiz from "../../components/Quiz";
import "./style.css";

class Login extends Component {

  moveLeft = e => {
    e.preventDefault();

    e.currentTarget.parentElement.parentElement.classList.add("hidden");
    e.currentTarget.parentElement.parentElement.previousSibling.classList.remove("hidden");
    console.log(e.currentTarget);
  }

  moveRight = e => {
    e.preventDefault();

    e.currentTarget.parentElement.parentElement.classList.add("hidden");
    e.currentTarget.parentElement.parentElement.nextSibling.classList.remove("hidden");
    console.log(e.currentTarget.parentElement.parentElement.nextSibling);
  }

  render() {
    return (
      <div id="loginAndSignup">
        <div className="loginDiv">
          <h1>Login:</h1>
          <form className="loginForm">
            <label for="loginUsername">Username</label>
            <input onChange={this.props.handleInputChange} type="text" name="loginUsername" ></input>

            <input type="password" name="loginPassword" placeholder="Password"></input>

            <button>Submit</button>

            <button onClick={this.moveRight}>Sign Up</button>
          </form>
        </div>

        <div className="signupDiv hidden">
          <h1>Signup:</h1>
          <form className="signupForm">
            <input onChange={this.props.handleInputChange} name="username" type="firstName" placeholder="First Name"></input>
            <input onChange={this.props.handleInputChange} name="password" type="text" placeholder="Username"></input>
            <input onChange={this.props.handleInputChange} name="firstName" type="password" placeholder="Password"></input>

            <input onChange={this.props.handleCheckbox} type="checkbox" name="vegan"></input>
            <label for="vegan">Vegan</label>

            <input onChange={this.props.handleCheckbox} type="checkbox" name="hypoallergenic"></input>
            <label for="hypoallergenic">Hypoallergenic</label>

            <button onClick={this.moveLeft}><i className="fas fa-chevron-left"></i></button>
            <button onClick={this.moveRight}><i className="fas fa-chevron-right"></i></button>
          </form>
        </div>

        <div className="quizDiv hidden">
          <div>
            <Quiz />

            <button onClick={this.moveLeft}><i className="fas fa-chevron-left"></i></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
