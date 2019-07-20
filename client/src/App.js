import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Elements from "./pages/Elements";
import Remedies from "./pages/Remedies";
import NoMatch from "./pages/NoMatch";
import comparisonArr from './components/Quiz/comparisonArr.json';
import API from "./utils/API";

let convertedQuiz = [];
let talliedQuiz = {};

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

    let newUser = {
      userName: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      vegan: this.state.vegan,
      hypoallergenic: this.state.hypoallergenic,
      libraOverall: "",
      libraCategories: [],
      elements: [],
      components: [],
      remedies: []
    }

    //Create API route that checks username
    API.getUserNameCheck({ userName: this.state.username })
      .then(result => {
        if (result.data) {
          //show modal that their username sucks
        } else {
          
          let variable = {};
          if(this.state.vegan) {
            variable.vegan = this.state.vegan;
          }
          if(this.state.hypoallergenc) {
            variable.hypoallergenic = this.state.hypoallergenic;
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

              this.convertQuizResults();
              this.countQuizResults();
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
                    newUser.remedies.push(result.data);
                    if (id === remediesList[remediesList.length - 1]) {
                      finished.remedies = true;
                    }
                  });
              }

              // API.createLoginUser(newUser)
              //   .then(result => {
              //     console.log(result, "New User Created");
              //   });


              let interval = setInterval(() => {
                if (finished.remedies === false && finished.components === false) {
                  //do nothing
                } else {
                  API.createLoginUser(newUser)
                    .then(result => {
                      console.log(result, "New User Created");
                    });

                  clearInterval(interval);
                }
              }, 100);
            });
        }
      });

    //if null API getUserElements - using vegan/hypoallergenic boolean
    //push elements to array
    //API getUserComponenets - 
    // console.log(this.state);
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

    convertedQuiz = newResults;
  }

  countQuizResults = () => {
    let countedResults = {};

    for (let answer of convertedQuiz) {
      if (!countedResults[answer]) {
        countedResults[answer] = 1;
      } else {
        countedResults[answer]++;
      }
    }

    talliedQuiz = countedResults;
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
