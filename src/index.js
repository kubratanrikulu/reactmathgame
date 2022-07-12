import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { GameContextProvider } from "./contexts/GameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GameContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GameContextProvider>
);

reportWebVitals();
