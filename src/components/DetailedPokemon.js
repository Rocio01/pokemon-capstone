import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPokemons } from '../redux/pokemons/pokemons';

const DetailedPokemon = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
  const pokemonsState = useSelector((state) => state.pokemonsReducer.pokemons);
  const { name } = useParams();
  return (

    <div className="details">
      <div className="card">
        {(pokemonsState.filter(((pokemon) => pokemon.name === name)).map((pokemon) => (

          <div className="col-sm-6 country-card" key={pokemon.name}>
            <div className="card">
              <img src={pokemon.sprites.front_shiny} className="card-img-top pokemon" alt="pokemon" />
              <div className="card-body">
                <h4 className="card-title">
                  { `Name: ${pokemon.name}`}
                </h4>
                <p>
                  { `Expierence: ${pokemon.base_experience}`}
                </p>

                <p>
                  { `Ability: ${pokemon.abilities[0].ability.name}`}
                </p>
              </div>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
};
export default DetailedPokemon;
