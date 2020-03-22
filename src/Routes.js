import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { ROOT_ROUTE, ScrollToTop, Header, Footer } from "./core";
import Home from "./containers/Home";

const Routes = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <Switch>
      <Route exact path={ROOT_ROUTE} component={Home} />
      <Redirect to={ROOT_ROUTE} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
