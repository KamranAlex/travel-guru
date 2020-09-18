import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import HeaderDark from "../Header/HeaderDark";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <HeaderDark></HeaderDark>
      <div className='container login'>
        <div className='login-form'>
          <h3 className='text-center'>Login</h3>
          <form action=''>
            <div className='form-group'>
              <label for='Email'>Email</label>
              <input
                className='form-control'
                type='email'
                name='email'
                id=''
                required
              />
            </div>
            <div className='form-group'>
              <label for='Password'>Password</label>
              <input
                className='form-control'
                type='password'
                name='password'
                required
              />
            </div>
            <button type='submit' className='booking-button'>
              Login
            </button>
          </form>
          <div className='toggle-login'>
            <small>
              Don't have an account?
              <Link to='/signUp'>
                <span className='text-warning'> Create an Account</span>
              </Link>
            </small>
          </div>
        </div>
      </div>
      <div className='text-center container footerBtn'>
        <div className='container separator'>
          <h6>
            <span>or</span>
          </h6>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className='google-login d-flex justify-content-between '
        >
          <div className='social-icon '>
            <FontAwesomeIcon
              size='lg'
              style={{ color: "#dc3545" }}
              icon={faGoogle}
            />
          </div>
          <div className='social-text '>
            <p> Continue With Google</p>
          </div>
        </button>
        <button className='fb-login d-flex justify-content-between '>
          <div className='social-icon '>
            <FontAwesomeIcon
              size='lg'
              style={{ color: "#3b5998" }}
              icon={faFacebook}
            />
          </div>
          <div className='social-text '>
            <p> Continue With Facebook</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
