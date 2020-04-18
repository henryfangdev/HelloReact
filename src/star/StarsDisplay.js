import React from "react";
import "./game.css";
import Utils from "./Utlils";

export class StarsDisplay extends React.Component {
  render() {
    return (
      <>
        {Utils.range(1, this.props.count).map(starId => (
          <div key={starId} className="star" />
        ))}
      </>
    );
  }
}
