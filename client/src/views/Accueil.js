import React, { Component, Fragment } from "react";

import Header from "../components/Header/Header";
import Home from "./home/Home";
import SecondePage from "./secondePage/SecondePage";
import Recherche from "./recherche/Recherche";
import Team from "./team/Team";

import Footer from "./footer/Footer";

//import "./App.css";

class Accueil extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Header
            to={{
              pathname: "/"
            }}
          />
          <Home />
          <SecondePage />
          <Recherche />
          <Team />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Accueil;
