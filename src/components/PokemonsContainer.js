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

    <div className="row">
      {pokemonsState.map((pokemon) => (
        <Pokemon
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_shiny}
          base_experience={pokemon.base_experience}
          ability={pokemon.abilities[0].ability.name}
        />
      ))}

    </div>
  );
};

export default PokemonsContainer;
