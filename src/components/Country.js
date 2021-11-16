import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    name, aqi, image,
  } = props;
  return (
    <div className="col-sm-6 country-card">
      <div className="card">
        <img src={image} className="card-img-top" alt="country" />
        <div className="card-body">
          <h4 className="card-title">
            {name}
          </h4>
          <p>
            Air Quality index:
            {aqi}
          </p>
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Country;
