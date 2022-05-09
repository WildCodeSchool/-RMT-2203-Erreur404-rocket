import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import CartCard from "@components/CartCard";
import Separateur from "@components/Separateur";

import PokemonInJail from "../assets/cage-pkm.png";
import Gps from "../assets/gps.png";

import "../styles/Panier.css";
import ExportContext from "../contexts/PanierContext";

function Panier() {
  const { monPanier } = useContext(ExportContext.PanierContext);
  const { setMonPanier } = useContext(ExportContext.PanierContext);
  const deletePokemon = (pokedexnum) => {
    const poke = monPanier.filter((el) => el.pokedexnum !== pokedexnum);
    setMonPanier(poke);
  };
  return (
    <div>
      <div className="panier-title">
        <h1 className="cart">La cage pour le Boss</h1>
        <div />
      </div>
      <Separateur />
      <section className="section01">
        <img className="pokemoninjail" src={PokemonInJail} alt="Prison" />
        <div className="paniertext">
          <h1>Emballé, c&apos;est pesé !</h1>
          <p>
            Maintenant que nous avons sélectionné les meilleurs spécimens pour
            Giovanni, il est temps d&apos;utiliser notre formidable outil, afin
            de les localiser sur la carte. N&apos;oubliez pas: Soyez sans pitié,
            si vous croisez les morveux !
          </p>
        </div>
      </section>
      <Separateur />
      <section className="section02">
        <div className="Pokedex-wrapper">
          <ul>
            {monPanier.map((pokemon) => (
              <CartCard
                key={pokemon.pokedexnum}
                pokemon={pokemon}
                deletePokemon={deletePokemon}
              />
            ))}
          </ul>
        </div>
      </section>
      <NavLink className="btn-cart" to="/carte">
        Localiser ma prise
        <img className="paper-plane" src={Gps} alt="send" width="40px" />
      </NavLink>
    </div>
  );
}

export default Panier;
