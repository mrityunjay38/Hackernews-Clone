import React, { Component } from "react";
import stories from "../data/stories.json";
import Counter from "./counter";
import Comments from "./comments.jsx";

class Stories extends Component {
  state = {
    stories: stories,
  };

  render() {
    return this.state.stories.map((story) => {
      return (
        <tr key={story.item_id}>
          <Counter count={story.score} />
          <td>
            <div className="stories">
              <a href="#">
                <h2>{story.title}</h2>
              </a>
              <span>
                By {story.by} | on {story.submission_time.split(" ")[0]} |{" "}
                <Comments comments={story.comments} />
              </span>
            </div>
          </td>
        </tr>
      );
    });
  }
}

export default Stories;
