import React, { Component } from 'react';
import {Comments} from './StyleIndex'
import commentbg from '../../../asset/img/index/commentg.png'
import titleimg from '../../../asset/img/index/titleg.png'
var commentsbg={
    backgroundImage:`url(${commentbg})`
};

class Comment extends Component {
    render() {
        return (
            <Comments style={commentsbg}>
                <div className="title">
                    <img src={titleimg} alt=""/>
                    <p>国产水果</p>
                    <p>RECOMMENDED FRUIT</p>
                </div>
            </Comments>
        );
    }
}

export default Comment;