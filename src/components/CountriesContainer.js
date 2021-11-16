import React from 'react';
import colombiaImage from './assets/colombia.png';
import Country from './Country';

const CountriesContainer = () => {
  const countries = [
    {
      name: 'Colombia',
      latitud: 4.570868,
      longitud: -74.297333,
      aqi: 1,
      image: colombiaImage,
    },
    {
      name: 'Colombia',
      latitud: 4.570868,
      longitud: -74.297333,
      aqi: 1,
      image: colombiaImage,
    },
    {
      name: 'Colombia',
      latitud: 4.570868,
      longitud: -74.297333,
      aqi: 1,
      image: colombiaImage,
    },
    {
      name: 'Colombia',
      latitud: 4.570868,
      longitud: -74.297333,
      aqi: 1,
      image: colombiaImage,
    },
  ];

  return (
    <div className="row countries-container">
      {countries.map((country) => (
        <Country
          key={country.name}
          name={country.name}
          latitud={country.latitud}
          longitud={country.longitud}
          aqi={country.aqi}
          image={country.image}
        />

      ))}
      <div className="col-sm-6" />

    </div>
  );
};

export default CountriesContainer;
