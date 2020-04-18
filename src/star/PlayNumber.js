import React from "react";
import "./game.css";

// Color Theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue"
};

export class PlayNumber extends React.Component {
  render() {
    return (
      <button
        className="number"
        style={{ background: colors[this.props.status] }}
        onClick={() => this.props.onClick(this.props.number, this.props.status)}
      >
        {this.props.number}
      </button>
    );
  }
}
