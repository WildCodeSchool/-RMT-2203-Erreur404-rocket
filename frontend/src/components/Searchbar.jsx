import React from "react";

import searchIcon from "../assets/search-icon.png";

function Searchbar({ searchValue, setSearchValue }) {
  return (
    <div className="searchbar">
      <div className="Box-icon-searchbar">
        <img src={searchIcon} alt="pokedex" />
        <input
          type="text"
          placeholder="Saisis-ici le Pokemon de ton choix !"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Searchbar;
