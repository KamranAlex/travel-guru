import React, { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Booking from "./Booking/Booking";
import Error from "./Error/Error";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Map from "./Map/Map";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className='App'>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <h4>Name: {loggedInUser.name}</h4>
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

            <PrivateRoute path='/map'>
              <Map></Map>
            </PrivateRoute>

            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
