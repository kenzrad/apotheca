import React from "react";
<<<<<<< HEAD
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Item from './components/Item';

function App() {
  return (
    <>

    </>
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Elements from "./pages/Elements";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Profile/:id" component={Profile} />
          <Route exact path="/Elements" component={Elements} />
          <Route exact path="/Elements/:id" component={Elements} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
>>>>>>> ab774c67ad9ba82291669c56271bdf9b60f83c78
  );
}

export default App;