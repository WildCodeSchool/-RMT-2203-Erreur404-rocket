import React from "react";
import { useParams, NavLink } from "react-router-dom";

import PokemonDetail from "../components/PokemonDetail";
import DescriptionCard from "../components/DescriptionCard";

import "../styles/PokemonDescription.css";

function PokemonDescription() {
  const { pokedexnum } = useParams();

  return (
    <div>
      <DescriptionCard pokedexnum={pokedexnum} />
      <PokemonDetail pokedexnum={pokedexnum} />
      <div className="box-btn-home-panier">
        <NavLink to="/pokedex" className="btn-pkm-home">
          Retourner au Pokedex
        </NavLink>
      </div>
    </div>
  );
}

export default PokemonDescription;
