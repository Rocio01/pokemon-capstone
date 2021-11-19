import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable camelcase */

const DetailedPokemonMock = (props) => {
  const { name } = props;
  const arr = [{
    name: 'Pikachu',
    image_one: 'picachuFront',
    image_two: 'picachuBack',
    base_experience: 100,
    weight: 200,
    height: 1,
    ability_one: 'static',
    ability_two: 'strong',
  },
  {
    name: 'Raichu',
    image_one: 'raichuFront',
    image_two: 'raichuBack',
    base_experience: 90,
    weight: 300,
    height: 2,
    ability_one: 'static',
    ability_two: 'strong',
  },
  ];
  const filteredPokemon = arr.filter((pokemon) => pokemon.name === name);
  return (

    <div className="details">

      {(filteredPokemon.map((pokemon) => (

        <div className="div-detailed-card" key={pokemon.name}>
          <div className="detailed-card">
            <div className="row">
              <div className="images-detailed col-6">
                <img src={pokemon.image_one} className="card-img-top pokemon" alt="pokemon" />
                <img src={pokemon.image_two} className="card-img-top pokemon" alt="pokemon" />

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
                  {`${pokemon.ability_one}  `}
                  <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />

                </p>

              </div>
              <div className="detailed-div div-2 row m-3">
                <h5 className="p-d-title col-6">Ability #2</h5>
                <p className="p-detailed col-6 ">
                  {pokemon.ability_two}
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

DetailedPokemonMock.propTypes = {
  name: PropTypes.string.isRequired,
};
export default DetailedPokemonMock;
