import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <td>
        <div className="Counter">
          <button className="Upvote">&#8710;</button>
          <span className="Count">{this.props.count}</span>
          <button className="Downvote">&nabla;</button>
        </div>
      </td>
    );
  }
}

export default Counter;
