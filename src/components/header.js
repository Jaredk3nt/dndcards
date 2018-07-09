import React from 'react';
import Link from 'gatsby-link';

import './header.css';

const Header = ({ siteTitle }) => (
  <div className="header-container">
    <Link to="/" className="top-icon">
      <div className="icon-box one"></div>
      <div className="icon-box two"></div>
      <div className="icon-box three"></div>
      <div className="icon-box four"></div>
    </Link>
  </div>
)

export default Header;
