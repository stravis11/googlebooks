import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
