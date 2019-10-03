import React, { Component } from "react";

class Counter extends Component {

    state = {
    score: this.props.count
    }

    onUpvote = () => {
        this.setState({
        score: this.state.score + 1
    })
    }

    onDownvote = () => {
        this.setState({
            score:this.state.score - 1
        })
    }

  render() {
    return (
      <td>
        <div className="Counter">
          <button className="Upvote" onClick={this.onUpvote}>&#8710;</button>
          <span className="Count">{this.state.score}</span>
          <button className="Downvote" onClick={this.onDownvote}>&nabla;</button>
        </div>
      </td>
    );
  }
}

export default Counter;
