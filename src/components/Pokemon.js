import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable camelcase */

const Pokemon = (props) => {
  const {
    base_experience, name, image,
  } = props;
  return (
    <div className="col-sm-6 country-card">
      <div className="card">
        <img src={image} className="card-img-top" alt="pok" />
        <div className="card-body">
          <h4 className="card-title">
            {name}
          </h4>
          <p>
            experience
            {base_experience}
          </p>
        </div>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  base_experience: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Pokemon;
