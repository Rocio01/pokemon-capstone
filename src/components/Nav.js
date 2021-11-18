import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="container header-container p-2">

    <div className="arrow-link row">
      <Link to="/" className="col-2">
        <h1 className="arrow-left">
          {'<'}
        </h1>
      </Link>
      <p className="col-9 my-2 p-0 text-center">catch your pokemon</p>
    </div>

  </div>
);
export default Nav;
