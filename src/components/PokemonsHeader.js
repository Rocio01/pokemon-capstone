import React from 'react';
import Bulbasaur from './assets/Bulbasaur.PNG';

const PokemonsHeader = () => (

  <div className="header row">
    <img src={Bulbasaur} alt="pokemons header" className="pokemons-header col-6" />
    <div className="col-5 mt-5">
      <h2 className="title-header">POKEMONS</h2>
      <p className="number-pokemons">30 awesome pokemons</p>
    </div>
  </div>
);

export default PokemonsHeader;
