import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../App";
import HeaderDark from "../Header/HeaderDark";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

const SignUp = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (e.target.name === "confirm-password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...newUser };
      newUserInfo[e.target.name] = e.target.value;
      setNewUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        const newUserInfo = { ...newUser };
        newUserInfo.error = "";
        newUserInfo.success = true;
        setLoggedInUser(newUserInfo);
        history.replace(from);
      })
      .catch((error) => {
        const newUserInfo = { ...newUser };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setLoggedInUser(newUserInfo);
        console.log(error.message);
      });

    e.preventDefault();
  };

  return (
    <div>
      <HeaderDark></HeaderDark>
      <div className='container login'>
        <div className='login-form'>
          <h3 className='text-center'>Create Account</h3>
          <form action='' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label for='name'>Name</label>
              <input
                onBlur={handleBlur}
                className='form-control'
                type='text'
                name='name'
                id=''
                required
              />
            </div>
            <div className='form-group'>
              <label for='Email'>Email</label>
              <input
                onBlur={handleBlur}
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
                onBlur={handleBlur}
                className='form-control'
                type='password'
                name='confirmPassword'
                required
              />
            </div>
            <div className='form-group'>
              <label for='ConfirmPassword'>Confirm Password</label>
              <input
                onBlur={handleBlur}
                className='form-control'
                type='password'
                name='confirm-password'
                required
              />
            </div>
            <small
              style={{
                color: "red",
                fontWeight: "600",
              }}
            >
              {loggedInUser.error}
            </small>
            <button type='submit' className='booking-button'>
              Create Account
            </button>
          </form>
          <div className='toggle-login'>
            <small>
              Already have an account?
              <Link to='/login'>
                <span className='text-warning'> Log in</span>
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
        <button className='google-login d-flex justify-content-between '>
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

export default SignUp;
