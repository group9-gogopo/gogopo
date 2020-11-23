import React, { Component } from "react";
import CommentUi from "../ui/CommentUi";

class comment extends Component {
  render() {
    return (
      <>
        {this.props.location.state ? (
          <CommentUi
            time={this.props.location.state.time}
            img={this.props.location.state.img}
            commentValue={this.props.location.state.commentValue}
            id={this.props.location.state.id}
          ></CommentUi>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default comment;
