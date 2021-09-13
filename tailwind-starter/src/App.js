import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Diseases from "./pages/Diseases";
import Nav from "./components/Nav";
function App() {
  // Write new routes by adding a route tag underneath the home route by doing something like this:
  // <Route path="<YOUR_PATH_URL>" component={<NAME_OF_COMPONENT>}/>
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/diseases" component={Diseases} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
