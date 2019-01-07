import React, { Component, Fragment } from "react";
import Popup from "../../components/Popup/Popup";
import { Link, Route } from "react-router-dom";

import Logo from "../Logo/Logo";
import "./Header.scss";

class Header extends Component {
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
        {this.state.show && <Popup toggleDialog={this.toggleDialog} />}
        <nav>
          <ul className="list">
            <Link to="/">
              <Logo />
            </Link>
            <li>
              <Link to="/recherche" className="link">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </li>
            <li>
              <a href="#" className="link" onClick={this.toggleDialog}>
                RECHERCHE
              </a>
            </li>
            <li>
              <Link to="/connexion" className="link">
                CONNEXION
              </Link>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Header;
