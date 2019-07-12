import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Elements from "./pages/Elements";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
//have state on app, update here on top level
//can render with route --> pass in a function that will return (route/render)
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Profile/:username" component={Profile} /> 
          <Route exact path="/Elements" component={Elements} />
          <Route exact path="/Elements/:id" component={Elements} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
