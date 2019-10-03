import React, { Component } from "react";
import stories from "../data/stories.json";
import Counter from "./counter";

class Stories extends Component {
  state = {
    stories: stories
  };

  render() {
    return this.state.stories.map(story => {
      return (
        <tr key={story.item_id}>
          <Counter count={story.score}/>
          <td>
            <div className="stories">
              <a href="#">
                <h2>{story.title}</h2>
              </a>
              <p>
                By {story.by} | on {story.submission_time.split("")[0]} |{" "}
                <a href="#">{story.comments.length} comments</a>
              </p>
            </div>
          </td>
        </tr>
      );
    });
  }
}

export default Stories;
