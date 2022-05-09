import axios from "axios";
import { createContext, useState, useEffect } from "react";

import ListEncounterAreaByPokemon from "../data/ListEncouterAreaByPokemon";

const PanierContext = createContext();

function PanierProvider({ children }) {
  const [monPanier, setMonPanier] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then((res) =>
        setPokedex(
          res.data.results.map((pokemon, index) => ({
            ...pokemon,
            pokedexnum: index + 1,
            area: ListEncounterAreaByPokemon[index],
          }))
        )
      );
  }, []);
  const ajouterAuPanier = (index, detail) => {
    const pokemon = { ...pokedex[index], ...detail };
    if (
      !monPanier.some(
        (pkmn) => pkmn.pokedexnum === parseFloat(pokedex[index].pokedexnum, 1)
      ) ||
      !monPanier.length === 6
    ) {
      const newPanier = [...monPanier];
      newPanier.push(pokemon);
      setMonPanier(newPanier);
    }
  };
  const deletePokemon = (pokedexnum) => {
    const poke = monPanier.filter(
      (pokemon) => pokemon.pokedexnum !== pokedexnum
    );
    setMonPanier(poke);
  };
  return (
    <PanierContext.Provider
      value={{
        monPanier,
        ajouterAuPanier,
        pokedex,
        deletePokemon,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
}
const ExportContext = {
  PanierContext,
  PanierProvider,
};
export default ExportContext;
