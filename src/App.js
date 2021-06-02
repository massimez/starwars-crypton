import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Personnages from "./pages/Personnages";
import Favorite from "./pages/Favorite";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Personnages />
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
