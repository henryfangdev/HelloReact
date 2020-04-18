import React from "react";
import "./game.css";

export class PlayAgain extends React.Component {
  render() {
    return (
      <div className="game-done">
        <div
          className="message"
          style={{ color: this.props.gameStatus === "lost" ? "red" : "green" }}
        >
          {this.props.gameStatus === "lost" ? "Game Over" : "Nice"}
        </div>
        <button onClick={this.props.onClick}>Play Again</button>
      </div>
    );
  }
}
