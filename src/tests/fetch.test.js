import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import store from '../redux/configureStore';

describe('Fetch from the pokeapi', () => {
  test('shows one correct pokemon name that comes from the pokeapi', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(await findByText('nidoran-m')).toBeInTheDocument();
  });

  test('shows  one correct Base Experience value that comes from the pokeapi', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(await findByText('Base Experience: 55')).toBeInTheDocument();
  });

  test('shows that the wrong pokemon is not displayed ', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(queryByText('not a pokemon')).not.toBeInTheDocument();
  });

  test('shows that the wrong Base Experience is not displayed ', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(await queryByText('Base Experience: -1000')).not.toBeInTheDocument();
  });

  test('shows one correct pokemon name that comes from the pokeapi', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(await findByText('wigglytuff')).toBeInTheDocument();
  });
});
