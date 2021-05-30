import React, { useEffect } from "react";
import Map from "./pages/Map";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthStore from "./store/modules/Auth";

export default function App() {
  useEffect(() => {
    AuthStore.relogUser();
  })
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
