import React from 'react';
import { Link } from 'react-router-dom';
import arrow from './assets/arrow.png';

const Nav = () => (
  <div className="container">

    <div className="arrow-link row">
      <Link to="/" className="col-2">
        <img src={arrow} alt="arrow" className="arrow" />
      </Link>
      <h3 className="col-9">catch your pokemon</h3>
    </div>

  </div>
);
export default Nav;
