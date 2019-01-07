import React from "react";

import Button from "../../components/Button/Button";
import "./SecondePage.scss";

class SecondePage extends React.Component {
  render() {
    return (
      <div className="site">
        <figure className="left">
          <img
            src={require("./img_Seconde_Page/Maquette-sneakersBis_02.png")}
            alt="arm pink sneaker"
            className="pink-sneaker"
          />
        </figure>
        <article className="droite">
          <h2>
            SNEAKERBIS, SITE COLLABORATIF <br /> AUTOUR DE LA SNEAKER
          </h2>
          <p className="para">
            Trouvez ici le modèle de votre choix <br /> du plus courant au plus
            rare
          </p>
          <div className="globalBtn">
            <Button
              textButton="ACHETER ICI"
              classButton="btn-page2"
              to={{
                pathname: `/`
              }}
            />
            <Button
              textButton="EN SAVOIR PLUS"
              classButton="btn-page2"
              to={{
                pathname: `/`
              }}
            />
          </div>
        </article>
      </div>
    );
  }
}

export default SecondePage;
