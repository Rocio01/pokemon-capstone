import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/* eslint-disable camelcase */

const Pokemon = (props) => {
  const {
    base_experience, name, image, ability,
  } = props;
  return (
    <>
      <Link to={`/details/${name}`} className="col-sm-6 pokemon-card">
        <div className="">
          <div className="card">
            <img src={image} className="card-img-top pokemon" alt="pokemon" />
            <div className="card-body">
              <h4 className="card-title">
                { `Name: ${name}`}
              </h4>
              <p>
                { `Expierence: ${base_experience}`}
              </p>

              <p>
                { `Ability: ${ability}`}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  base_experience: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  ability: PropTypes.string.isRequired,
};

export default Pokemon;
