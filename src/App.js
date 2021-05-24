import React from "react";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";

// import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {/* <Route path="/signIn">
          <SignIn />
        </Route> */}
        <Route path="/signUp">
          <SignUp />
        </Route>

        <Route path="/signIn">
          <SignIn />
        </Route>

        <Route path="/">
          <div className="page">
            <Sidebar />
            <Map />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
