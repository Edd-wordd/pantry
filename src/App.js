import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import NotFound from "./components/pages/NotFound";
import Recipes from "./components/pages/Recipes";
import Pantry from "./components/pages/Pantry";
import SignIn from "./components/pages/SignIn";
import Home from "./components/pages/Home";

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route exact path="/recipes" component={Recipes}></Route>
            <Route exact path="/pantry" component={Pantry}></Route>
            <Route exact path="/signIn" component={SignIn}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route component={NotFound}></Route>
         </Switch>
      </Router>
   );
}

export default App;
