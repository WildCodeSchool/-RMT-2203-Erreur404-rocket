import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/PokemonDescription.css";

function PokemonDetail() {
  const { pokedexnum } = useParams();
  const [moredetail, setMoredetail] = useState({});
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokedexnum}/`)
      .then((res) => setMoredetail(res.data));
  }, []);

  return (
    <div className="box-pkm-more-details">
      <div className="pkm-more-details-capt-descrip-habit-text">
        <div className="pkm-detail-capture">
          <h2>Capture rate :</h2>
          <p>
            {Math.min(
              100,
              Math.round((moredetail.capture_rate * 100) / 255) + 10
            )}
            %
          </p>
        </div>
        <div className="pkm-detail-description">
          <h2>Description :</h2>
          <p>
            {moredetail.flavor_text_entries &&
              moredetail.flavor_text_entries[1].flavor_text}
          </p>
        </div>
        <div className="pkm-detail-habitat">
          <h2>Habitat Naturel :</h2>
          <p> {moredetail.habitat?.name}</p>
        </div>
      </div>
      <div className="pkm-evolution">
        {moredetail.evolves_from_species?.name != null && (
          <div className="img-pkm-evolution">
            <h2>Evolution de : </h2>
            <span className="img-pkm-evolution-name">
              {moredetail.evolves_from_species.name}
            </span>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                moredetail.id - 1
              }.png`}
              alt={`pokemon number ${moredetail.id}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonDetail;
