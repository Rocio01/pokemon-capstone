import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="container header-container p-2">

    <div className="arrow-link row">
      <Link to="/" className="col-3">
        <h1 className="arrow-left">
          {'<'}
        </h1>
      </Link>
      <div className="col-9 row mx-0 px-0">
        <p className=" my-2 p-0 text-center col-9">
          catch your pokemon
        </p>
        <p className=" my-2 p-0 text-center col-3">

          <span className="mic"><i className="fa fa-microphone" aria-hidden="true" /></span>
          <span><i className="fa fa-cog" aria-hidden="true" /></span>
        </p>

      </div>

    </div>

  </div>
);
export default Nav;
