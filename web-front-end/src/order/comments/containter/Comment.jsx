import React, { Component } from 'react';
import CommentUi from '../ui/CommentUi'

class comment extends Component {
    render() {
        console.log(this.props)
        return (
            <CommentUi></CommentUi>
        );
    }
}

export default comment;