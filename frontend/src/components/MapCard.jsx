function MapCard({ pokemon }) {
  return (
    <div className="card-pokemon-container">
      <h1>{pokemon.name}</h1>
      <img
        className="map-card-pkm-img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokedexnum}.png`}
        alt={`Official ${pokemon.name} artwork`}
      />
    </div>
  );
}
export default MapCard;
