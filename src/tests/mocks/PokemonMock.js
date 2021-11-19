import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable camelcase */

const Pokemon = (props) => {
  const {
    base_experience, name, image,
  } = props;
  return (
    <>
      <div>

        <div className="card card-poke" id={name}>
          <p>
            <i className="fa fa-arrow-circle-o-right float-end" aria-hidden="true" />
          </p>
          <img src={image} className="card-img-top pokemon" alt="pokemon" />
          <div className="card-body">
            <h4 className="card-title text-uppercase p-pokemon-card">
              { name}
            </h4>
            <p className="p-pokemon-card">
              { `Base Experience: ${base_experience}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  base_experience: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Pokemon;
