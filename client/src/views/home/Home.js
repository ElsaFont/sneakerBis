import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import Header from "../header/Header";
// import Logo from "../Logo/Logo";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="site">
        <div id="dimension">
          <figure className="">
            <img
              src={require("./img_header/jordanLA.png")}
              alt="La Jordan LA page d'accueil SneakerBis"
              className="imgaccueil"
            />
          </figure>
        </div>
      </div>
    );
  }
}

export default Home;
