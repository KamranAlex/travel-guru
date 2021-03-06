import fbICON from "../images/Icon/fb.png";
import googleICON from "../images/Icon/google.png";
import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import HeaderDark from "../Header/HeaderDark";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../App";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formERR, setFormERR] = useState({
    nameERR: "",
    emailERR: "",
    passwordERR: "",
    confirmPassERR: "",
  });
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  // Google Sign In......
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        signedInUser.isSignedIn = true;
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //FaceBook Login......
  const handleFBLogin = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const fbSignedUser = { name: displayName, email };
        fbSignedUser.isSignedIn = true;
        setLoggedInUser(fbSignedUser);
        history.replace(from);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  // Get input value, Validate & set to State....
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "name") {
      if (e.target.value) {
        isFieldValid = true;
      } else {
        isFieldValid = false;
        setFormERR({ nameERR: "Name Required !!!" });
      }
    }
    if (e.target.name === "email") {
      if (/\S+@\S+\.\S+/.test(e.target.value)) {
        isFieldValid = true;
      } else {
        isFieldValid = false;
        setFormERR({ emailERR: "Invalid Email !!! try..(example@email.com)" });
      }
    }
    if (e.target.name === "password") {
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(e.target.value)) {
        isFieldValid = true;
      } else {
        isFieldValid = false;
        setFormERR({
          passwordERR:
            "Password must be 6 characters or more, including at least 1 Letter and 1 Digit !!!",
        });
      }
    }
    if (e.target.name === "confirmPassword") {
      if (e.target.value === user.password) {
        isFieldValid = true;
      } else {
        isFieldValid = false;
        setFormERR({
          confirmPassERR: "Password Doesn't MATCH !!!",
        });
      }
    }
    if (isFieldValid) {
      setFormERR({});
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  // Handle form submittion [Create User & sign in]....
  const handleFormSubmit = (e) => {
    if (
      newUser === true &&
      user.name &&
      user.email &&
      user.password &&
      user.confirmPassword
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          newUserInfo.isSignedIn = true;
          setLoggedInUser(newUserInfo);
          updateUserName(user.name);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          console.log(error);
        });
    }
    if (newUser === false && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          newUserInfo.isSignedIn = true;
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          error.message = "Credentials Doesn't Match..!";
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          newUserInfo.isSignedIn = false;
          setLoggedInUser(newUserInfo);
          console.log(error);
        });
    }
    e.preventDefault();
  };
  //Update UserName...
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
      .then(() => {
        console.log("Name Updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <HeaderDark></HeaderDark>
      <div className='container login'>
        <div className='login-form'>
          <h3 className='text-center'>
            {newUser ? "Create Account " : "Log In"}
          </h3>
          <form action='' onSubmit={handleFormSubmit}>
            {newUser && (
              <div className='form-group'>
                <label for='name'>Name</label>
                <input
                  onBlur={handleBlur}
                  className='form-control'
                  type='text'
                  name='name'
                  required
                />
                <p className='form-errors'>{formERR.nameERR}</p>
              </div>
            )}
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
              <p className='form-errors'>{formERR.emailERR}</p>
            </div>
            <div className='form-group'>
              <label for='Password'>Password</label>
              <input
                onBlur={handleBlur}
                className='form-control'
                type='password'
                name='password'
                required
              />
              <p className='form-errors'>{formERR.passwordERR}</p>
            </div>
            {newUser && (
              <div className='form-group'>
                <label for='confirm-Password'>Confirm Password</label>
                <input
                  onBlur={handleBlur}
                  className='form-control'
                  type='password'
                  name='confirmPassword'
                  required
                />
                <p className='form-errors'>{formERR.confirmPassERR}</p>
              </div>
            )}
            <small
              style={{
                color: "red",
                fontWeight: "600",
              }}
            >
              {newUser ? user.error : loggedInUser.error}
            </small>
            <button type='submit' className='booking-button'>
              {newUser ? "Create Account" : "Log In"}
            </button>
          </form>

          <div className='toggle-login'>
            <small>
              {newUser
                ? "Already Have an Account ?"
                : "Don't have an Account ?"}
              &#160;&#160;
              <button
                onClick={() => {
                  setNewUser(!newUser);
                }}
                className='toggle-button'
              >
                <span className='text-warning'>
                  {" "}
                  {newUser ? "Log In " : "Create an Account "}
                </span>
              </button>
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
            <img src={googleICON} alt='' />
          </div>
          <div className='social-text '>
            <p> Continue With Google</p>
          </div>
        </button>
        <button
          onClick={handleFBLogin}
          className='fb-login d-flex justify-content-between '
        >
          <div className='social-icon '>
            <img src={fbICON} alt='' />
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
