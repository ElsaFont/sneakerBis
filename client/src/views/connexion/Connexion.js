import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import "./Connexion.scss";

class Connexion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
      //user: []
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
    this.setState({
      [event.target.id]: event.target.value
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
    console.log(data);
    this.callApi(`${PathToBack}userLogin`, fetch_param)
      .then(response => {
        // this.forceUpdate();
        console.log(response);
        // window.location.reload();
      })
      .catch(err => console.log(err));
  }
  };

  componentDidMount() {
    this.callApi("/api/connexion")
      .then(items => {
        //console.log(items);
        this.setState({ items });
        sessionStorage.clear();
      })
      .catch(err => console.log(err));
  }

  callApi = async url => {
    const items = await fetch("/api/connexion");
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
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              contenteditable="true"
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
            <Button
              textButton="SE CONNECTER"
              classButton="btn-login"
              disabled={!this.validateForm()}
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
            <p>
              Pas encore inscrit ? c'est par
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
