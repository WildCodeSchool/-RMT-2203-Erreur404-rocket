import "../styles/Pokedex.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "@components/PokemonCard";
import Searchbar from "@components/Searchbar";
// import pokemonDescription from "./PokemonDescription";
import teamRocketball from "../assets/team-rocket ball.png";
import pokedexImg from "../assets/pokedex.png";

function Pokedex() {
  const [searchValue, setSearchValue] = useState("");
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then((res) =>
        setPokedex(
          res.data.results.map((pokemon, index) => ({
            ...pokemon,
            pokedexnum: index + 1,
          }))
        )
      );
  }, []);

  return (
    <div>
      {/* ---------- Section resume Pokedex and picture ---------- */}
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

      {/* ---------- Section separateur ---------- */}

      <div className="separation">
        <hr className="separateur" />
        <img className="rocketball" src={teamRocketball} alt="rocketball" />
        <hr className="separateur" />
      </div>

      {/* ---------- Section search-bar ---------- */}
      <section className="searchbar">
        <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      </section>
      {/* ---------- Section Listing Pokedex ---------- */}
      <div className="Pokedex-wrapper">
        <ul>
          {pokedex &&
            pokedex
              .filter((pokemon) => pokemon.name.includes(searchValue))
              .map((pokemon) => <PokemonCard pokemon={pokemon} />)}
        </ul>
      </div>
    </div>
  );
}

export default Pokedex;
