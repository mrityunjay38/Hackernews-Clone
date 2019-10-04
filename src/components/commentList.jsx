import React, { Component } from "react";

class CommentsList extends Component {
  state = {
    comments: this.props.comments
  };

  render() {
    return this.state.comments.map(comment => {
      return (
        <div key={comment.item_id}>
          <span>By {comment.by}</span>
          <p>{comment.text}</p>
        </div>
      );
    });
  }
}

export default CommentsList;
