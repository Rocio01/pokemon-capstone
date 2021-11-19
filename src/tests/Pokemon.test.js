import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonMock from './mocks/PokemonMock';

describe('Pokemon component functionality', () => {
  test('should render Pokemon component correctly', () => {
    const component = render(
      <PokemonMock
        name="Pikachu"
        image="Pikachu image"
        base_experience={100}
        ability="static"
      />,
    );
    expect(component.container).toHaveTextContent('Pikachu');
    expect(component.container).toHaveTextContent('100');
  });
  test('should not render wrong information', () => {
    const component = render(
      <PokemonMock
        name="Pikachu"
        image="Pikachu image"
        base_experience={100}
        ability="static"
      />,
    );
    expect(component.container).not.toHaveTextContent('Not a Pokemon');
    expect(component.container).not.toHaveTextContent('not a number');
  });
});
