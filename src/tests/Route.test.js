import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Nav from '../components/Nav';
import PokemonsContainer from '../components/PokemonsContainer';
import DetailedPokemon from '../components/DetailedPokemon';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../components/Nav');
jest.mock('../components/PokemonsContainer');
jest.mock('../components/DetailedPokemon');

describe('Correct render of the routes', () => {
  test('Should render pokemons container on home route', () => {
    PokemonsContainer.mockImplementation(() => <div>PokemonsContainerPageMock</div>);
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <PokemonsContainer />
      </MemoryRouter>,
    );
    expect(screen.getByText('PokemonsContainerPageMock')).toBeInTheDocument();
  });

  test('nav is on home route', () => {
    Nav.mockImplementation(() => <div>NavPageMock</div>);
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Nav />
      </MemoryRouter>,
    );
    expect(screen.queryByText('NavPageMock')).toBeInTheDocument();
  });

  test('nav is on home route', () => {
    DetailedPokemon.mockImplementation(() => <div>DetailedPageMock</div>);
    render(
      <MemoryRouter initialEntries={['/details/:name']} initialIndex={0}>
        <DetailedPokemon />
      </MemoryRouter>,
    );
    expect(screen.queryByText('DetailedPageMock')).toBeInTheDocument();
  });
});
