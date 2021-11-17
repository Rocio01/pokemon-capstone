const SET_POKEMONS = 'air-pollution-tracker-latin-america/pokemons/SET_POKEMONS';
const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20';

const initialState = {
  pokemons: [],
};

const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const fetchPokemons = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const { results } = data;
      const promisesArray = results.map((result) => fetch(result.url)
        .then((response) => response.json()));
      return Promise.all(promisesArray);
    }).then((data) => dispatch(setPokemons(data)));
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
