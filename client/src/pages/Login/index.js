import React, { Component } from "react";
import Quiz from "../../components/Quiz";
import Brand from "../../components/Brand"
import "./style.css";


class Login extends Component {
  moveTwoLeft = e => {
    e.preventDefault();

    e.currentTarget.parentElement.parentElement.classList.add("hidden");
    e.currentTarget.parentElement.parentElement.previousSibling.previousSibling.classList.remove("hidden");
    console.log(e.currentTarget);
  }

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

  moveTwoRight = e => {
    e.preventDefault();

    e.currentTarget.parentElement.parentElement.classList.add("hidden");
    e.currentTarget.parentElement.parentElement.nextSibling.nextSibling.classList.remove("hidden");
    console.log(e.currentTarget.parentElement.parentElement.nextSibling.nextSibling);
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
              <table>
                <tr>
                  <td className="login-td">
                    <input className="login-text" onChange={this.props.handleInputChange} type="text" name="loginUsername" placeholder="username"></input>
                  </td>
                  <td className="login-td">
                    <input className="login-text" type="password" name="loginPassword" placeholder="password"></input>
                  </td>
                </tr>
              </table>
            </form>

            <div className="chevrons"> 
              <a onClick={this.moveLeft}><i className="fas fa-chevron-left"></i></a>

              {/* THIS DOES NOTHING YET */}
              <a><i className="fas fa-chevron-right"></i></a>
            </div> 

          </div>

          <div className="signupDiv hidden">
            <form className="signupForm">
              <table>
                <tr>
                  <td>
                    <input onChange={this.props.handleInputChange} name="firstName" type="firstName" placeholder="First Name"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input onChange={this.props.handleInputChange} name="username" type="text" placeholder="Username"></input>
                  </td>
                  <td>
                    <input onChange={this.props.handleInputChange} name="password" type="password" placeholder="Password"></input>
                  </td>
                </tr>
                <br />
                <br />
                <tr>
                  <td>
                    <label className="login-text">Product Preference:</label>
                  </td>
                  <td>
                    <input className="login-text login-td" onChange={this.props.handleCheckbox} type="checkbox" name="vegan"></input>
                    <label className="login-text" for="vegan">Vegan</label><br />
                    <input className="login-text login-td" onChange={this.props.handleCheckbox} type="checkbox" name="hypoallergenic"></input>
                    <label className="login-text" for="hypoallergenic">Hypoallergenic</label>
                  </td>
                </tr>
                <br />
                <br />
              </table>
            </form>
            <br />

            <div className="chevrons"> 
              <a onClick={this.moveTwoLeft}><i className="fas fa-chevron-left"></i></a>

              <a onClick={this.moveRight}><i className="fas fa-chevron-right"></i></a>
            </div> 

          </div>

          <div className="quizDiv hidden">
            <div>
              <Quiz />
              <button onClick={this.moveLeft}><i className="fas fa-chevron-left"></i></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
