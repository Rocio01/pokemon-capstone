import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import colombiaImage from './assets/colombia.png';
import southAmerica from './assets/south-america.png';
import Country from './Country';
import { fetchCountries } from '../redux/countries/countries';

const CountriesContainer = () => {
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countriesReducer[0]);
  console.log(countriesState, 'Hello');
  useEffect(() => {
    fetchCountries(dispatch);
  }, []);

  const countries = [

    {
      name: 'Brasil',
      latitud: 4.570868,
      longitud: -74.297333,
      aqi: 1,
      image: colombiaImage,
    },

  ];

  return (
    <>
      <div className="south-america">
        <div className="row">
          <img src={southAmerica} className="col-sm-5 south" alt="south america" />
          <h4 className="card-title south col-sm-5 text-center pt-5 mt-5">
            South America
          </h4>
        </div>
      </div>
      <div className="row countries-container">
        {countries.map((country) => (
          <Country
            key={Date.now()}
            name={country.name}
            aqi={country.aqi}
            image={country.image}
          />

        ))}

      </div>
    </>
  );
};

export default CountriesContainer;
