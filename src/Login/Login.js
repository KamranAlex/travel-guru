import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import HeaderDark from "../Header/HeaderDark";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <HeaderDark></HeaderDark>
      <div className='container login'>
        <div className='login-form'>
          <h3 className='text-center'>Login</h3>
          <form action=''>
            <div className='form-group'>
              <label for='Email'>Email</label>
              <input className='form-control' type='email' name='email' id='' />
            </div>
            <div className='form-group'>
              <label for='Password'>Password</label>
              <input className='form-control' type='password' name='password' />
            </div>

            <Link to='/login'>
              <button type='submit' className='booking-button'>
                Login
              </button>
            </Link>
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
      <div className='text-center container'>
        <div className='container separator'>
          <h6>
            <span>or</span>
          </h6>
        </div>
        <div className='fb-login d-flex justify-content-between '>
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
        </div>
        <div className='fb-login d-flex justify-content-between '>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
