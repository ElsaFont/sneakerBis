import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
// import Button from "../../components/Button/Button";

import "./BackOffice.scss";

class Connexion extends Component {
  render() {
    return (
      <Fragment>
        <div className="siteBack">
          <div className="section">
            <nav className="nav">
              <ul>
                <li>MON COMPTE</li>
                <li>HISTORIQUE</li>
                <li>MES ACHATS</li>
              </ul>
            </nav>
            <article className="droite">
              <p>Elsa</p>
              <p>Bougrier</p>
              <p>37 rue des fauvelles</p>
              <p>92400</p>
              <p>Courbevoie</p>
            </article>
            <article className="gauche">
              <p>Nom</p>
              <p>Prénom</p>
              <p>adresse</p>
              <p>Code postal</p>
              <p>Ville</p>
            </article>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Connexion;
