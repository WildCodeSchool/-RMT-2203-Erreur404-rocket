import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import DescriptionCard from "@components/DescriptionCard";

const pokemonDescription = () => {
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
    </div>
  );
};

export default pokemonDescription;
