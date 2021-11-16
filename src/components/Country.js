import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    name, latitud, longitud, aqi, image,
  } = props;
  return (
    <div className="col-sm-6 country-card p-5">
      <div className="card text-right">
        <img src={image} className="card-img-top" alt="country" />
        <div className="card-body">
          <h4 className="card-title">
            {name}
            <br />
            Latitud:
            {latitud}

            <br />
            Longitud:
            {longitud}
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
  latitud: PropTypes.number.isRequired,
  longitud: PropTypes.number.isRequired,
  aqi: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Country;
