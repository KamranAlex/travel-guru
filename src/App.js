import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Booking from "./Booking/Booking";
import Error from "./Error/Error";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";

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

          <Route path='/booking/:id'>
            <Booking></Booking>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/signUp'>
            <SignUp></SignUp>
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
