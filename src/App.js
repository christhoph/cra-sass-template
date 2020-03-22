import React from "react";
import styled from "styled-components";

import { GlobalStyles } from "./core";
import ContextProviders from "./core/context";
import Routes from "./Routes";

const AppView = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const App = () => (
  <AppView>
    <ContextProviders>
      <Routes />
    </ContextProviders>
    <GlobalStyles />
  </AppView>
);

export default App;
