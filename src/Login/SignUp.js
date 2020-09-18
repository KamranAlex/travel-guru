import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import HeaderDark from "../Header/HeaderDark";

const SignUp = () => {
  return (
    <div>
      <HeaderDark></HeaderDark>
      <div className='container login'>
        <div className='login-form'>
          <h3 className='text-center'>Create Account</h3>
          <form action=''>
            <div className='form-group'>
              <label for='FirstName'>First Name</label>
              <input
                className='form-control'
                type='text'
                name='firtsName'
                id=''
                required
              />
            </div>
            <div className='form-group'>
              <label for='LastName'>Last Name</label>
              <input
                className='form-control'
                type='text'
                name='LastName'
                id=''
                required
              />
            </div>

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
                name='confirmPassword'
                required
              />
            </div>
            <div className='form-group'>
              <label for='ConfirmPassword'>Confirm Password</label>
              <input
                className='form-control'
                type='password'
                name='password'
                required
              />
            </div>

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
