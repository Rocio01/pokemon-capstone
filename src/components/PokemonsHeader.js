import React from 'react';
// import imageHeader from './assets/pokemons.jpg';
import bulbasaur from './assets/Bulbasaur.PNG';

const PokemonsHeader = () => (

  <div className="header row">
    <img src={bulbasaur} alt="pokemons header" className="pokemons-header col-6" />
    <div className="col-5 mt-5">
      <h2 className="title-header">POKEMONS</h2>
      <p className="number-pokemons">Base experience</p>
    </div>
  </div>
);

export default PokemonsHeader;
