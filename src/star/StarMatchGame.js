import React from "react";
import "./game.css";
import Utils from "./Utlils";
import { PlayNumber } from "./PlayNumber";
import { StarsDisplay } from "./StarsDisplay";
import { PlayAgain } from "./PlayAgain";

export class StarMatchGame extends React.Component {
  state = {
    stars: Utils.random(1, 9),
    avaliableNums: Utils.range(1, 9),
    candidateNums: [],
    secondsLeft: 10
  };

  timer = null;

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.secondsLeft > 0) {
        this.setState(prevState => ({
          secondsLeft: prevState.secondsLeft - 1
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  candidatesAreWrong = () =>
    Utils.sum(this.state.candidateNums) > this.state.stars;

  gameIsDone = () => this.state.avaliableNums.length === 0;

  gameStatus = () => {
    return this.state.avaliableNums.length === 0
      ? "won"
      : this.state.secondsLeft === 0
      ? "lost"
      : "active";
  };

  numberStatus = number => {
    if (!this.state.avaliableNums.includes(number)) {
      return "used";
    }

    if (this.state.candidateNums.includes(number)) {
      return this.candidatesAreWrong() ? "wrong" : "candidate";
    }

    return "available";
  };

  onNumberClick = (number, currentStatus) => {
    console.log("Num", number, currentStatus);
    if (currentStatus === "used") {
      return;
    }

    const newCadidateNums =
      currentStatus === "available"
        ? this.state.candidateNums.concat(number)
        : this.state.candidateNums.filter(cn => cn !== number);

    console.log("New Cadidates", newCadidateNums, "stars", this.state.stars);

    if (Utils.sum(newCadidateNums) !== this.state.stars) {
      this.setState({ candidateNums: newCadidateNums });
    } else {
      const newAvailableNums = this.state.avaliableNums.filter(
        n => !newCadidateNums.includes(n)
      );
      console.log("New Available", newAvailableNums);
      const newStars = Utils.randomSumIn(newAvailableNums, 9);
      this.setState({
        stars: newStars,
        avaliableNums: newAvailableNums,
        candidateNums: []
      });
      console.log("state", this.state);
    }
  };

  resetGame = () => {
    this.setState({
      stars: Utils.random(1, 9),
      avaliableNums: Utils.range(1, 9),
      candidateNums: [],
      secondsLeft: 10
    });
  };

  render() {
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {this.gameStatus() !== "active" ? (
              <PlayAgain
                onClick={this.resetGame}
                gameStatus={this.gameStatus()}
              />
            ) : (
              <StarsDisplay count={this.state.stars} />
            )}
          </div>
          <div className="right">
            {Utils.range(1, 9).map(number => (
              <PlayNumber
                key={number}
                status={this.numberStatus(number)}
                number={number}
                onClick={this.onNumberClick}
              />
            ))}
          </div>
        </div>
        <div className="timer">Time Remaining: {this.state.secondsLeft}</div>
      </div>
    );
  }
}
