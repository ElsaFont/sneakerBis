import React, { Component, Fragment } from "react";
//import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { pathToBack } from "../../pathToBack";

import "./Inscription.scss";

class Inscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      surname: "",
      error: false,
      errorMessage: ""
      //user: []
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.name.length > 0 &&
      this.state.surname.length > 0
    );
  }

  handleChange = event => {
    // console.log("event.target", event.target);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      mail: this.state.email,
      password: this.state.password,
      name: this.state.name,
      surname: this.state.surname
    };
    // console.log(data);
    const fetch_param = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    };
    //console.log("je suis là", data);
    this.callApi(`${pathToBack}/api/register`, fetch_param)
      .then(response => {
        // this.forceUpdate();
        // console.log(response);
        // window.location.reload();
      })
      .catch(err => console.log(err));
  };

  callApi = async (url, params) => {
    const items = await fetch(url, params);
    //console.log("coucou", items);
    const body = await items.json();
    if (items.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <Fragment>
        <div className="site">
          <form className="myForm" onSubmit={this.handleSubmit}>
            <input
              type="nom"
              name="name"
              placeholder="Nom"
              value={this.state.name}
              onChange={this.handleChange}
              contentEditable="true"
              className="input_nom"
            />
            <input
              type="prenom"
              name="surname"
              placeholder="Prénom"
              value={this.state.surname}
              onChange={this.handleChange}
              contentEditable="true"
              className="input_prenom"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              contentEditable="true"
              className="input_email"
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={this.state.password}
              onChange={this.handleChange}
              className="input_password"
            />
            <input
              textbutton="CREER UN COMPTE"
              classbutton="btn-inscription"
              type="submit"
              disabled={!this.validateForm()}
              // to={{
              //   pathname: `/account`
              // }}
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
