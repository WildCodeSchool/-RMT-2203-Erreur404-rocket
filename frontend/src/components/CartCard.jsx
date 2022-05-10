import React, { useContext } from "react";

import ExportContext from "../contexts/PanierContext";

function CartCard({ pokemon }) {
  const { deletePokemon } = useContext(ExportContext.PanierContext);
  return (
    <div className="pokemoncart-wrapper">
      <div className="pokemoncart-name">{pokemon.name}</div>
      <img
        className="pokemoncart-picture"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokedexnum}.svg`}
        alt={pokemon.name}
      />
      <button
        className="btn-delete"
        type="button"
        onClick={() => deletePokemon(pokemon.pokedexnum)}
      >
        Supprimer
      </button>
    </div>
  );
}

export default CartCard;
