import React from 'react';
import Link from 'gatsby-link';

import './header.css';
import CollectionSVG from '../data/collection.svg';
import FamiliarSVG from '../data/familiar.svg';
import ShopkeeperSVG from '../data/shopkeeper.svg';

const Header = ({ siteTitle }) => (
  <div className="header-container">
    <Link to="/" className="top-icon">
      <div className="icon-box one"></div>
      <div className="icon-box two"></div>
      <div className="icon-box three"></div>
      <div className="icon-box four"></div>
    </Link>
    <div className="nav-links">
      <Link to="/familiars">
        <img src={FamiliarSVG} />
      </Link>
      <Link to="/collection">
        <img src={CollectionSVG} />
      </Link>
      <Link to="/shopkeepers">
        <img src={ShopkeeperSVG} />
      </Link>
    </div>
  </div>
)

export default Header;
