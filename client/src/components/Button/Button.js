import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Link } from "react-router-dom";

class Button extends React.Component {
  render() {
    const { to, textButton, classButton, clique } = this.props;
    return (
      <div>
        <button onClick={clique} className={classButton}>
          <Link to={to}>{textButton}</Link>
        </button>
      </div>
    );
  }
}

export default Button;
