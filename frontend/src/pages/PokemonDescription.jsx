import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";

import PokemonDetail from "@components/PokemonDetail";
import DescriptionCard from "../components/DescriptionCard";

import "../styles/PokemonDescription.css";

function PokemonDescription() {
  const { pokedexnum } = useParams(); // on declare les variables de l'url dynamique du lien dans pokedex ICI.
  const [detail, setDetail] = useState({}); // feetch de l'api pour chaque pokemon : ici ce n'est pas un tableau vide mais un objet vide.

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokedexnum}`) // on fetch uniquement les pokémon qui correspondent au bouton sur lequel on a cliqué,  dans pokedex , en ajoutant le useparam.

      .then((res) => setDetail(res.data));
  }, []);
  return (
    <div>
      <DescriptionCard detail={detail} />
      <PokemonDetail />
      <div className="box-btn-home-panier">
        <NavLink to="/home" className="btn-pkm-home">
          Retourner au Pokedex
        </NavLink>
        {/* <NavLink to={`/home`} >
        <button className="btn-pkm-panier">
            Ajouter au panier
        </button>
        </NavLink> */}
      </div>
    </div>
  );
}

export default PokemonDescription;
