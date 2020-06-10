/* eslint-disable jsx-a11y/alt-text */

import React from 'react'


import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <header className="no-padding">
      <div className="navbar-fixex">
        <nav className="navfeature black">
          <div className="container nav-wrapper">
            <Link to='/'><span className="waves-effect black-light"><img src={process.env.PUBLIC_URL + '/img/logo.png'}   width="30" id="appicon" /></span></Link>
            <ul className="hide-on-med-and-down right">
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/about'>Services</Link></li>
              <li><Link to='/about'>Blog</Link></li>
              <li><Link to='/about'>Contact us</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
