import React from "react";
import { NavLink } from "react-router-dom";

function PokemonCard({ pokemon }) {
  return (
    <li className="card-pokemon">
      <div className="pokedexnum"># {pokemon.pokedexnum}</div>
      <div className="pokemon-name">{pokemon.name}</div>
      <img
        className="pokemon-picture"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokedexnum}.svg`}
        alt={pokemon.name}
      />
      <NavLink
        to={`/pokemon-description/${pokemon.pokedexnum}/${pokemon.name}`}
        className="button-detail"
      >
        Plus d&apos;infos <span>{pokemon.name}</span>
      </NavLink>
    </li>
  );
}

export default PokemonCard;
