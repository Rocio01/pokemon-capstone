import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../redux/pokemons/pokemons';
import Pokemon from './Pokemon';

const PokemonsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
  const pokemonsState = useSelector((state) => state.pokemonsReducer.pokemons);
  return (
    <div>
      <h1>POKEMONS</h1>

      {pokemonsState.map((pokemon) => (
        <Pokemon
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          base_experience={pokemon.base_experience}
        />
      ))}

    </div>
  );
};

export default PokemonsContainer;
