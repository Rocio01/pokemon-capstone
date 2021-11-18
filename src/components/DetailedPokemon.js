import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchPokemons } from '../redux/pokemons/pokemons';
/* eslint-disable camelcase */

const DetailedPokemon = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);
  const pokemonsState = useSelector((state) => state.pokemonsReducer.pokemons);
  const { name } = useParams();

  const filteredPokemon = pokemonsState.filter((pokemon) => pokemon.name === name);
  return (

    <div className="details">

      {(filteredPokemon.map((pokemon) => (

        <div className="div-detailed-card" key={pokemon.name}>
          <div className="detailed-card">
            <div className="row">
              <div className="images-detailed col-6">
                <img src={pokemon.sprites.front_shiny} className="card-img-top pokemon" alt="pokemon" />
                <img src={pokemon.sprites.back_shiny} className="card-img-top pokemon" alt="pokemon" />

              </div>
              <div className="name-p col-6 mr-2 mt-5 pt-5 mr-3">
                <h4 className="card-title text-uppercase p-pokemon-card p-detailed-name">
                  { pokemon.name}
                </h4>
                <p className="p-pokemon-card p-detailed-experience">
                  { `Base Experience: ${pokemon.base_experience}`}
                </p>
              </div>

            </div>

            <div className="card-body m-0 p-0 card-body-detailed">
              <div className="detailed-div div-1 row m-3">
                <h5 className="p-d-title col-6">Ability #1</h5>
                <p className="p-detailed col-6 ">
                  {`${pokemon.abilities[0].ability.name}  `}
                  <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />

                </p>

              </div>
              <div className="detailed-div div-2 row m-3">
                <h5 className="p-d-title col-6">Ability #2</h5>
                <p className="p-detailed col-6 ">
                  {pokemon.abilities[1].ability.name}
                  <i className="fa fa-arrow-circle-o-right px-2" aria-hidden="true" />
                </p>

              </div>
              <div className="detailed-div div-3 row m-3">
                <h5 className="p-d-title col-6">Weight</h5>
                <p className="p-detailed col-6">
                  {pokemon.weight}
                  <i className="fa fa-arrow-circle-o-right px-2" aria-hidden="true" />
                </p>

              </div>
              <div className="detailed-div div-4 row m-3">
                <h5 className="p-d-title col-6">Height</h5>
                <p className="p-detailed col-6">
                  {pokemon.height}
                  <i className="fa fa-arrow-circle-o-right px-2" aria-hidden="true" />
                </p>

              </div>
            </div>
          </div>
        </div>
      )))}
    </div>

  );
};
export default DetailedPokemon;
