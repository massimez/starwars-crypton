import "./App.css";
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Characters from "./pages/Characters";
import Favorite from "./pages/Favorite";
import Error404 from "./pages/Error404";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Characters />
        </Route>
        <Route exact path="/fav">
          <Favorite />
        </Route>
        <Route exact path="/404" component={Error404} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
