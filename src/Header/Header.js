import React from "react";
import logo from "../images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div className='container '>
      <nav className=' header navbar navbar-expand-lg navbar-light '>
        <a className='navbar-brand' href='/'>
          <img src={logo} alt='' className='logo' />
        </a>

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
            <a className='nav-link active' href='#'>
              News <span className='sr-only'>(current)</span>
            </a>
            <a className='nav-link' href='#'>
              Blog
            </a>
            <a className='nav-link' href='#'>
              Destination
            </a>
            <a className='nav-link ' href='#'>
              Contact
            </a>
            <button className='login-btn'>Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
