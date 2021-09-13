import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Diseases from "./pages/Diseases";
import Predict from "./pages/Predict";
import Nav from "./components/Nav";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/diseases" component={Diseases} />
          <Route exact path="/predict" component={Predict} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
