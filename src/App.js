import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Error from "./Error/Error";
import Home from "./Home/Home";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
