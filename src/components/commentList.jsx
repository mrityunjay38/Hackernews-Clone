import React, { Component } from "react";

class CommentsList extends Component {

  render() {
    return this.props.comments.map(comment => {
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
