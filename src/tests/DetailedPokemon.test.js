import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import DetailedPokemon from '../components/DetailedPokemon';
import DetailedPokemonMock from './mocks/DetailedPokeMock';
import store from '../redux/configureStore';

describe('Detailed pokemon component', () => {
  test('matches Detailed component snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <DetailedPokemon />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Do not render unfiltered pokemon', () => {
    const component = render(
      <DetailedPokemonMock
        name="Raichu"
      />,
    );
    expect(component.container).not.toHaveTextContent('Pikachu');
    expect(component.container).not.toHaveTextContent('100');
  });

  test('Render the filtered pokemon', () => {
    const component = render(
      <DetailedPokemonMock
        name="Pikachu"
      />,
    );
    expect(component.container).toHaveTextContent('Pikachu');
    expect(component.container).toHaveTextContent('100');
  });
});
