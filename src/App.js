import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import State from "./context/State";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Games from "./components/pages/Games";
import SingleGame from "./components/pages/SingleGame";
import NotFound from "./components/pages/NotFound";

import "./css/App.css";

function App() {
  return (
    <State>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/oyunlar" component={Games} />
            <Route exact path="/oyunlar/:name" component={SingleGame} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </State>
  );
}

export default App;
