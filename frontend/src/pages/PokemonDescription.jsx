import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";

import PokemonDetail from "../components/PokemonDetail";
import ExportContext from "../contexts/PanierContext";
import DescriptionCard from "../components/DescriptionCard";

import "../styles/PokemonDescription.css";

function PokemonDescription() {
  const { pokedex } = useContext(ExportContext.PanierContext);
  const { monPanier } = useContext(ExportContext.PanierContext);
  const { setMonPanier } = useContext(ExportContext.PanierContext);
  const { pokedexnum } = useParams();
  const [detail, setDetail] = useState({});
  const ajouterAuPanier = (id) => {
    setMonPanier([...monPanier, pokedex[id]]);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokedexnum}`)

      .then((res) => setDetail(res.data));
  }, []);
  return (
    <div>
      <DescriptionCard
        detail={detail}
        pokedexnum={pokedexnum}
        ajouterAuPanier={ajouterAuPanier}
      />
      <PokemonDetail />
      <div className="box-btn-home-panier">
        <NavLink to="/pokedex" className="btn-pkm-home">
          Retourner au Pokedex
        </NavLink>
      </div>
    </div>
  );
}

export default PokemonDescription;
