import React from "react";
import { useParams } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";

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
        <NavLink to="/pokedex#searchbar" className="btn-pkm-home">
          Retourner au Pokedex
        </NavLink>
      </div>
    </div>
  );
}

export default PokemonDescription;
