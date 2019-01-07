import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img
          style={{
            width: "200px",
            marginLeft: "20px",
            float: "left"
          }}
          src={require("./logosn.png")}
          alt="logo sneakerBis home"
        />
      </div>
    );
  }
}

export default Logo;
