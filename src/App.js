import React from "react";

import ContextProviders from "./core/context";
import Routes from "./Routes";
import "./App.scss";

const App = () => (
  <div className="app-container">
    <ContextProviders>
      <Routes />
    </ContextProviders>
  </div>
);

export default App;
