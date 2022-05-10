import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ExportContext from "./contexts/PanierContext";

ReactDOM.render(
  <React.StrictMode>
    <ExportContext.PanierProvider>
      <App />
    </ExportContext.PanierProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
