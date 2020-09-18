import React, { useContext } from "react";
import logo from "../images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className='container '>
      <nav className=' header navbar navbar-expand-lg navbar-light '>
        <Link className='navbar-brand' to='/'>
          <img src={logo} alt='' className='logo' />
        </Link>

        <form action='' className='search-box'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input
            type='text'
            name=''
            placeholder='Search a place...'
            className='text-box'
          />
        </form>

        <div className='collapse navbar-collapse ' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto '>
            <Link to='/home' className='nav-link active'>
              Home <span className='sr-only'>(current)</span>
            </Link>
            <Link className='nav-link' to='/'>
              Blog
            </Link>
            <Link className='nav-link' to='/'>
              Destination
            </Link>
            <Link className='nav-link ' to='/'>
              Contact
            </Link>
            {loggedInUser.email ? (
              <div>
                <button
                  onClick={() => setLoggedInUser({})}
                  className='login-btn'
                  style={{ background: "#00b82b" }}
                >
                  Logout
                </button>
                <p style={{ color: "#f9a51a", marginTop: "2px" }}>
                  {loggedInUser.name}
                </p>
              </div>
            ) : (
              <Link to='/login'>
                <button className='login-btn'>Login</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
