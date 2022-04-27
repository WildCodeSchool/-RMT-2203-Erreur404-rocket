import React from "react";

function DescriptionCard({ detail }) {
  return (
    <div>
      <h1>{detail.name}</h1>
      <h2># {detail.id}</h2>
      <h2>Weight : {detail.weight}</h2>
      <h2>Height : {detail.height}</h2>
      <h2>Type : {detail.types && detail.types[0].type.name}</h2>
      <img
        className="pkm-picture"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${detail.id}.png`}
        alt={`Official ${detail.name} artwork`}
      />
    </div>
  );
}

export default DescriptionCard;
