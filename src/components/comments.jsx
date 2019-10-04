import React, { Component } from "react";
import CommentForm from "./commentForm";
import CommentsList from "./commentList";

class Comments extends Component {
  state = {
    comments: this.props.comments,
    commentState: false
  };

  showComments = () => {
    this.setState({ commentState: !this.state.commentState });
  };

  addComment = (data) => {
      this.setState({
          comments: this.state.comments.unshift(data)
      });
  }

  render() {
      return (<div className="Comment-section">
        <a href="#" onClick={this.showComments}>{this.state.comments.length} comments</a>
        { this.state.commentState ?
        <React.Fragment>
        <CommentForm addComment={this.addComment}/>
        <CommentsList className="Comments-list" comments={this.state.comments}/>
        </React.Fragment> : null }
      </div>
      )
    }
}

export default Comments;
