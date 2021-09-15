import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/Nav";

import { Routes } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
