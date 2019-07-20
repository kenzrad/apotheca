import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Elements from "./pages/Elements";
import Remedies from "./pages/Remedies";
import NoMatch from "./pages/NoMatch";
import comparisonArr from './components/Quiz/comparisonArr.json';

class App extends Component {
  state = {
    loginUsername: "",
    loginPassword: "",
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    vegan: false,
    hypoallergenic: false,
    quizResults: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
  }

  handleInputChange = event => {
    let { value, name } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleConfirmPasswordChange = event => {
    let { value, name } = event.target;

    this.setState({
      [name]: value
    }, () => {
      if (this.state.confirmPassword !== "" && this.state.confirmPassword !== this.state.password) {
        document.getElementsByName("confirmPassword")[0].classList = "";
        document.getElementsByName("confirmPassword")[0].classList.add("passwordMismatch");
      } else if (this.state.confirmPassword !== "" && this.state.confirmPassword === this.state.password) {
        document.getElementsByName("confirmPassword")[0].classList = "";
        document.getElementsByName("confirmPassword")[0].classList.add("passwordMatch");
      } else if (this.state.confirmPassword === "") {
        document.getElementsByName("confirmPassword")[0].removeAttribute("class");
      }
    });
  };

  handleCheckbox = event => {
    let { name, checked } = event.target;

    this.setState({
      [name]: checked
    });
  }

  handleQuiz = choices => {
    this.setState({
      quizResults: choices
    });
  }

  login = () => {
    let login = {
      Loginname: this.state.loginUsername,
      password: this.state.loginPassword
    }

    return login;
  }

  resetLogin = () => {
    this.setState({
      loginUsername: "",
      loginPassword: ""
    });
  }

  signup = e => {
    e.preventDefault();
    console.log(this.state);
  }

  resetSignup = () => {
    this.setState({
      username: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      vegan: false,
      hypoallergenic: false,
      quizResults: ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]
    });
  }

  convertQuizResults = () => {
    let newResults = [];

    for (let question in this.state.quizResults) {
      newResults.push(comparisonArr[Number(question) + 1][this.state.quizResults[question]]);
    }

    return newResults;
  }



  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact path="/"
              render={() => <Login handleCheckbox={this.handleCheckbox} handleInputChange={this.handleInputChange} 
              handleConfirmPasswordChange={this.handleConfirmPasswordChange} handleQuiz={this.handleQuiz} 
              login={this.login} resetLogin={this.resetLogin} signup={this.signup} resetSignup={this.resetSignup} />} />
            <Route exact path="/Main" component={Main} />
            <Route exact path="/Profile/:login" component={Profile} />
            <Route exact path="/Remedies" component={Remedies} />
            <Route exact path="/Elements" component={Elements} />
            <Route exact path="/Elements/:id" component={Elements} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
