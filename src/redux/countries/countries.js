import axios from 'axios';
// const API_KEY_ONE = "29486c8f-eef3-449e-a7e2-17623e10e1c4";
const SET_COUNTRIES = 'air-pollution-tracker-latin-america/countries/SET_COUNTRIES';
const API_KEY_TWO = 'ca60cb74799b94c82b7e12865a1489c2';
// const URL_ONE = 'http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key={{YOUR_API_KEY}}';
// const URL_TWO = 'http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}';
const initialState = [];

const countries = [{
  name: 'Colombia',
  lat: 4.570868,
  lon: -74.297333,
}, {
  name: 'Brazil',
  lat: -14.2350048,
  lon: -55.0000000,
},
];

const setCountries = (payload) => ({
  type: SET_COUNTRIES,
  payload,
});

export const fetchCountries = (dispatch) => {
  const countriesArray = [];
  countries.map((country) => (
    axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${country.lat}&lon=${country.lon}&appid=${API_KEY_TWO}`)
      .then((response) => {
        countriesArray.push(response.data);
      })

  ));
  dispatch(setCountries(countriesArray));
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default countriesReducer;
