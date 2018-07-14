import React from 'react';
import Link from 'gatsby-link';

import './header.css';
import CollectionSVG from '../data/collection.svg';

const Header = ({ siteTitle }) => (
  <div className="header-container">
    <Link to="/" className="top-icon">
      <div className="icon-box one"></div>
      <div className="icon-box two"></div>
      <div className="icon-box three"></div>
      <div className="icon-box four"></div>
    </Link>
    <div className="nav-links">
      <Link to="/collection">
        <img src={CollectionSVG} />
      </Link>
    </div>
  </div>
)

export default Header;
