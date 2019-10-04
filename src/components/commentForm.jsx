import React, { Component } from "react";

class CommentForm extends Component {

    state = {
        item_id : 0,
        text: "",
        by: "Mrityunjay"
    }

    handleComment = (e) => {
        e.preventDefault();
        console.log(this.state.text);
        this.props.addComment({
            item_id: this.state.item_id + 1,
            text: this.state.text,
            by: "Mrityunjay"
        });
    }    

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

  render() {
    return (
      <form onSubmit={this.handleComment}>
        <textarea rows="10" value= {this.state.text} onChange={this.handleChange} cols="100" placeholder="Enter your comment here.."/>
        <button type="submit">Post</button>
      </form>
    );
  }
}

export default CommentForm;
