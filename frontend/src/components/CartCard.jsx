import React from "react";

function CartCard({ pokemon, monPanier, setMonPanier }) {
  const deletePokemon = () => {
    const poke = monPanier.filter((el) => el.pokedexnum !== pokemon.pokedexnum);
    setMonPanier(poke);
  };

  return (
    <div className="pokemoncart-wrapper">
      <div className="pokemoncart-name">{pokemon.name}</div>
      <img
        className="pokemoncart-picture"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.pokedexnum}.svg`}
        alt={pokemon.name}
      />
      <button className="btn-delete" type="button" onClick={deletePokemon}>
        Supprimer
      </button>
    </div>
  );
}

export default CartCard;
