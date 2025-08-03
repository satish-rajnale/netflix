import React from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { firebase } from "./lib/firebase.prod";
import { FirebaseProvider } from "./context/firebase";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <FirebaseProvider firebase={firebase}>
        <GlobalStyles />
        <App />
      </FirebaseProvider>
    </HashRouter>
  </React.StrictMode>
);
