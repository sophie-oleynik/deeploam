import React from "react";
import Map from "./pages/Map";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>

        <Route path="/" exact>
          <Map />
        </Route>
      </Switch>
    </Router>
  );
}
