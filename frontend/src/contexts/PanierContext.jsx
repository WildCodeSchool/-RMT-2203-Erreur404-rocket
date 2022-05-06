import { createContext, useState } from "react";

const PanierContext = createContext();

function PanierProvider({ children }) {
  const [monPanier, setMonPanier] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  return (
    <PanierContext.Provider
      value={{
        monPanier,
        setMonPanier,
        pokedex,
        setPokedex,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
}
const ExportContext = {
  PanierContext,
  PanierProvider,
};
export default ExportContext;
