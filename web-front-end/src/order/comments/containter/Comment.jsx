import React, { Component } from 'react';
import CommentUi from '../ui/CommentUi'



class comment extends Component {
    render() {
        
        return (
           
        <>{
            this.props.location.state?  <CommentUi time={this.props.location.state.time} img={this.props.location.state.img}></CommentUi> :""
            }</>
            
        );
    }
    componentDidMount(){

    }
}

export default comment;