import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    name, latitud, longitud, aqi, image,
  } = props;
  return (

    <div className="card">
      <img src={image} className="card-img-top" alt="country" />
      <div className="card-body">
        <div className="card-text">
          <h2>
            {name}
            Latitud:
            {latitud}
            Longitud:
            {longitud}
          </h2>
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
  latitud: PropTypes.string.isRequired,
  longitud: PropTypes.string.isRequired, 
  aqi: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default Country;
