import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { pathToBack } from "../../pathToBack";
import { Route, Redirect } from "react-router";

import "./Connexion.scss";
//import Header from "../../components/Header/Header";

class Connexion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: false,
      errorMessage: "",
      //user: []
      connected: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  // validateForm() {
  //   if (this.state.email.length > 0 && this.state.password.length > 0) {
  //     return alert("adresse ou mail invalide");
  //   }
  // }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = { mail: this.state.email, password: this.state.password };

    const fetch_param = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    };

    this.callApi(`${pathToBack}/api/connexion`, fetch_param)

      .then(response => {
        // this.forceUpdate();
        console.log(response);
        this.setState({
          connected: true
        });
        // window.location.reload();
      })
      .catch(err => console.log(err));
  };

  callApi = async (url, params) => {
    const items = await fetch(url, params);
    //const items = await fetch(url);
    const body = await items.json();
    if (items.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <Fragment>
        <div className="siteConnexion">
          <form className="myForm" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              //value={this.state.email}
              onChange={this.handleChange}
              contentEditable="true"
              className="input_email"
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              //value={this.state.password}
              onChange={this.handleChange}
              className="input_password"
            />

            <input
              textButton="SE CONNECTER"
              classButton="btn-login"
              type="submit"
              disabled={!this.validateForm()}
              // to={{
              //   pathname: `/account`
              // }}
            />

            {/* <Route
              exact
              path="/"
              render={() =>
                connected ? <Redirect to="/account" /> : <Accueil />
              }
            /> */}
            <Button
              textButton="ANNULER"
              classButton="btn-annuler"
              to={{
                pathname: `/`
              }}
            />
            <p>
              Pas encore inscrit ? c'est par{" "}
              <Link to="/inscription" className="link">
                ici
              </Link>
            </p>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Connexion;
