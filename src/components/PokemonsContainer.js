import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PokemonsHeader from './PokemonsHeader';
import { fetchPokemons } from '../redux/pokemons/pokemons';
import Pokemon from './Pokemon';

const PokemonsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
  const pokemonsState = useSelector((state) => state.pokemonsReducer.pokemons);
  return (
    <>

      <PokemonsHeader />

      <h6 className="m-2 details-title">DETAILS BY POKEMON</h6>
      <div className="row pokemon-container">
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
    </>
  );
};

export default PokemonsContainer;
