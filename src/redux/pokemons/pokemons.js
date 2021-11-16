import axios from 'axios';

const SET_POKEMONS = 'air-pollution-tracker-latin-america/pokemons/SET_POKEMONS';
const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20';

const initialState = {
  pokemons: [],
};

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const fetchPokemons = (dispatch) => {
  const arr = [];
  axios.get(URL)
    .then((response) => {
      response.data.results.map((pokemon) => (
        axios.get(pokemon.url)
          .then((res) => {
            arr.push(res.data);
          })
      ));
      dispatch(setPokemons(arr));
    });
};

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};

export default pokemonsReducer;
