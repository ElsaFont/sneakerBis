import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./Inscription.scss";

class Inscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <div className="site">
          <form className="myForm" onSubmit={this.handleSubmit}>
            <input
              type="nom"
              name="nom"
              placeholder="Nom"
              value=""
              contenteditable="true"
              className="input_nom"
            />
            <input
              type="prenom"
              name="prenom"
              placeholder="Prénom"
              value=""
              contenteditable="true"
              className="input_prenom"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value=""
              contenteditable="true"
              className="input_email"
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value=""
              className="input_password"
            />
            <Button
              textButton="CREER UN COMPTE"
              classButton="btn-inscription"
              to={{
                pathname: `/backoffice`
              }}
            />
            <Button
              textButton="ANNULER"
              classButton="btn-annuler"
              to={{
                pathname: `/`
              }}
            />
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Inscription;
