import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HeroProvider from "./context/heroContext";
import AppProvider from "./context/appContext";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import GameProvider from "./context/gameContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GameProvider>
        <AppProvider>
          <HeroProvider>
            <App />
          </HeroProvider>
        </AppProvider>
      </GameProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
