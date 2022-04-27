import React from "react";
import ImageMapper from "react-img-mapper";
import ListEncounterAreaByPokemon from "../data/ListEncouterAreaByPokemon";
import areaSelected from "../data/MapArea";

import "../styles/Carte.css";

const pokemonSelected = [
  { name: "charizard", pokedexnum: 1 },
  { name: "pikachu", pokedexnum: 25 },
  { name: "ratata", pokedexnum: 19 },
];
// chercher pokedexnum de pokemonSelected
// compparer pokedex num a id de list encounter
// renvoyer la zone de requise/ les zone requise
// compparer l'id de zone/des zones a id de mapArea
// renovyerla map area requise
// afficher la map area

function Mapper() {
  const areaTemp = [];
  function areaToDisplay() {
    pokemonSelected.forEach((el) => {
      if (ListEncounterAreaByPokemon[el.pokedexnum - 1] != null) {
        areaTemp.push(areaSelected[el.pokedexnum - 1]);
      }
      return areaTemp;
    });

  }
  areaToDisplay();

  const URL = "https://i.ibb.co/5xC95ft/Map.png";
  const MAP = {
    name: "Kantho",
    style: "Width=640",
    areas: areaTemp,
  };
  return (
    <ImageMapper
      className="map"
      src={URL}
      map={MAP}
      fillColor="#CD5C5C"
      toggleHighlighted
      stayHighlighted
      stayMultiHighlighted
      width={640}
      height={557}
    />
  );
}

export default Mapper;
