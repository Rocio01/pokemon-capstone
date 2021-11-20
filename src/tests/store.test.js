import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import pokemonsReducer from '../redux/pokemons/pokemons';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import store from '../redux/configureStore';

describe('store', () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  jest.setTimeout(30000);
  test('should return the initial state', () => {
    expect(pokemonsReducer(undefined, {})).toEqual({ pokemons: [] });
  });

  test('shows the correct text after the next state from the store that came from PokemonsContainer', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    await act(() => sleep(4000));
    expect(await findByText('DETAILS BY POKEMON')).toBeInTheDocument();
  });

  test('shows the correct text after the next state from the store that came form Nav ', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    await act(() => sleep(4000));
    expect(await findByText('catch your pokemon')).toBeInTheDocument();
  });

  test('shows the correct text after the next state from the store that came from Pokemon component ', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    await act(() => sleep(4000));
    expect(await findByText('nidorino')).toBeInTheDocument();
  });
});
