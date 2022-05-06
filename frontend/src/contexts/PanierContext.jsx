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

  return (
    <PanierContext.Provider
      value={{
        monPanier,
        setMonPanier,
        pokedex,
        setPokedex,
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
