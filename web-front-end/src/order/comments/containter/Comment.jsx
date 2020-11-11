import React, { Component } from 'react';
import CommentUi from '../ui/CommentUi'

class comment extends Component {
    render() {
        // console.log(this.props,"----")
        return (
            <CommentUi time={this.props.location.state.time} img={this.props.location.state.img}></CommentUi>
        );
    }
}

export default comment;