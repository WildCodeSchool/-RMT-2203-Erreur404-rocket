import React, { useState, useContext } from "react";

import PokemonCard from "../components/PokemonCard";
import Searchbar from "../components/Searchbar";
import Séparateur from "../components/Séparateur";

import ExportContext from "../contexts/PanierContext";
import pokedexImg from "../assets/pokedex.png";

import "../styles/Pokedex.css";

function Pokedex() {
  const [searchValue, setSearchValue] = useState("");
  const { pokedex } = useContext(ExportContext.PanierContext);

  return (
    <div>
      <section className="box-pokedex">
        <div className="pokedex-text">
          <h1>Créer le plus féroce des Pokedex</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur pedit adipisicing elit.
            Blanditiis illo quos impedit voluptatibus saepe natus doloribus.
          </p>
        </div>
        <div className="pokedex-img">
          <img src={pokedexImg} alt="pokedex" />
        </div>
      </section>
      <Séparateur />
      <section id="searchbar" className="searchbar">
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      </section>
      <div className="Pokedex-wrapper">
        <ul>
          {pokedex &&
            pokedex
              .filter((pokemon) => pokemon.name.includes(searchValue))
              .map((pokemon) => (
                <PokemonCard key={pokemon.pokedexnum} pokemon={pokemon} />
              ))}
        </ul>
      </div>
    </div>
  );
}

export default Pokedex;
