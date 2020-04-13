import React from "react";
import "./form.css";

export class Form extends React.Component {
  state = {
    userName: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const resp = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );
    const data = await resp.json();
    this.props.onSubmit(data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          onChange={event => this.setState({ userName: event.target.value })}
          value={this.state.userName}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}
