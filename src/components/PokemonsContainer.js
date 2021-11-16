import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from '../redux/pokemons/pokemons';

const PokemonsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPokemons(dispatch);
  }, []);

  const pokemonsStore = useSelector((store) => store.pokemonsReducer.pokemons);
  // console.log(pokemonsStore, 'Hello');

  return (
    <>
      <h1>Hello</h1>
      {pokemonsStore.map((pokemon) => (
        console.log(pokemon.base_experience, 'hey')
      ))}

    </>
  );
};

export default PokemonsContainer;
