import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header from "./components/Header/Header";
// import Logo from "./components/Logo/Logo";
// import Home from "./views/home/Home";
// import SecondePage from "./views/secondePage/SecondePage";
import Recherche from "./views/recherche/Recherche";
// import Footer from "./views/footer/Footer";
import Accueil from "./views/Accueil";
import Connexion from "./views/connexion/Connexion";
import Inscription from "./views/inscription/Inscription";
import BackOffice from "./views/backoffice/BackOffice";
import Cgv from "./views/cgv/Cgv";
import Nous from "./views/nous/Nous";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/inscription" component={Inscription} />
          <Route path="/recherche" component={Recherche} />
          <Route path="/cgv" component={Cgv} />
          <Route path="/nous" component={Nous} />
          <Route path="/backoffice" component={BackOffice} />
          {/* <Route exact path="/" component={Home} />
          <Route path="/accueil" component={Header} />
          <Route path="/accueil" component={SecondePage} />
          <Route path="/accueil" component={Recherche} />
          <Route path="/accueil" component={Footer} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
