import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import PokemonsContainer from '../components/PokemonsContainer';
import store from '../redux/configureStore';

describe('pokemons container component', () => {
  test('matches PokemonsContainer component snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <PokemonsContainer />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
