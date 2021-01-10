import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import State from "./context/State";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
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
            <Route exact path="/hakkimizda" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </State>
  );
}

export default App;
