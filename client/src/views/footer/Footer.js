import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

class Footer extends Component {
  state = {
    show: false
  };

  //ouvre/ferme la popup
  toggleDialog = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <Fragment>
        <footer>
          <ul>
            <li>
              <a href="">CONTACTEZ-NOUS</a>
            </li>
            <li>
              <Link to="/nous">QUI SOMMES-NOUS ?</Link>
            </li>
            <li>
              <a href="">DEVENIR MEMBRE</a>
            </li>
            <li>
              <a href="">SERVICE CLIENT PROFESSIONNELS</a>
            </li>
          </ul>
          <figure className="">
            <img
              src={require("./img/noun_Facebook_2049749_FFFFFF.png")}
              className="logo"
            />
            <img
              src={require("./img/noun_Twitter_2049755_FFFFFF.png")}
              className="logo"
            />
          </figure>
          <ul>
            <li>
              <Link to="/cgv">CONDITIONS GENERALES</Link>
            </li>
            <li>
              <a href="">RETOURS</a>
            </li>
            <li>
              <a href="">GARANTIE D'AUTHENTICITE</a>
            </li>
            <li>
              <a href="">MENTIONS LEGALES</a>
            </li>
          </ul>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
