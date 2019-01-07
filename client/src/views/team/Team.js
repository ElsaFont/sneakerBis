import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./Team.scss";

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
        <section className="siteTeam">
          <p className="teamChoc">NOTRE TEAM DE CHOC</p>
          <figure className="picteam">
            <img src={require("./img/brooke-cagle2.jpg")} className="pic" />
            <img src={require("./img/brooke-cagle2.jpg")} className="pic" />
            <img src={require("./img/brooke-cagle2.jpg")} className="pic" />
          </figure>
        </section>
      </Fragment>
    );
  }
}

export default Footer;
