import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Elements from "./pages/Elements";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  state = {
    loginUsername: "",
    loginPassword: "",
    username: "",
    password: "",
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

  signup = e => {
    e.preventDefault();
    console.log(this.state);
  }
  
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route 
              exact path="/" 
              render={() => <Login handleCheckbox={this.handleCheckbox} handleInputChange={this.handleInputChange} handleQuiz={this.handleQuiz} login={this.login} signup={this.signup}/>} />
            <Route exact path="/Main" component={Main} />
            <Route exact path="/Profile/:login" component={Profile} /> 
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
