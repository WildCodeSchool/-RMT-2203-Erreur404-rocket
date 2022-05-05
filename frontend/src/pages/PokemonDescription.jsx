import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";

import PokemonDetail from "@components/PokemonDetail";
import DescriptionCard from "../components/DescriptionCard";

import "../styles/PokemonDescription.css";

function PokemonDescription() {
  const { pokedexnum } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokedexnum}`)

      .then((res) => setDetail(res.data));
  }, []);
  return (
    <div>
      <DescriptionCard detail={detail} />
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
