import React from 'react';
import imageHeader from './assets/pokemons.jpg';

const PokemonsHeader = () => (

  <div className="header">
    <img src={imageHeader} alt="pokemons header" className="pokemons-header" />

  </div>
);

export default PokemonsHeader;
