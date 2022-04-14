import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "@components/Header";
import Accueil from "./pages/Accueil";
import Pokedex from "./pages/Pokedex";
import PokemonDescription from "./pages/PokemonDescription";
import Contact from "./pages/Contact";
import Panier from "./pages/Panier";
import Carte from "./pages/Carte";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Pokedex" element={<Pokedex />} />
        <Route path="/Pokemon-description" element={<PokemonDescription />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/Carte" element={<Carte />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
