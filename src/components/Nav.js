import React from 'react';
import { Link } from 'react-router-dom';
import arrow from './assets/arrow.png';

const Nav = () => (
  <div className="container header-container p-2">

    <div className="arrow-link row">
      <Link to="/" className="col-2">
        <img src={arrow} alt="arrow" className="arrow" />
      </Link>
      <p className="col-9 m-0 p-0 text-center">catch your pokemon</p>
    </div>

  </div>
);
export default Nav;
