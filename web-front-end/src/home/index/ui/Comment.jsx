import React, { Component } from 'react';
import {Comments} from './StyleIndex'
import commentbg from '../../../asset/img/index/commentg.png'
import titleimg from '../../../asset/img/index/titleg.png'
import fruitinfo3 from '../../../asset/img/index/fruit_info3.png'
import { Rate } from 'antd';
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
                <div className="comts">
                    <div className="comts_con">
                        <div className="comts_left"><img src={fruitinfo3} alt=""/></div>
                        <div className="comts_right">
                           <div className="rate"><Rate disabled defaultValue={4} /></div> 
                           <p className="text">还可以吧，挺好吃的</p>
                           <p className="time">2019-11-11 11：11:11</p>
                        </div>
                    </div>

                    <div className="comts_con">
                        <div className="comts_left"><img src={fruitinfo3} alt=""/></div>
                        <div className="comts_right">
                           <div className="rate"><Rate disabled defaultValue={4} /></div> 
                           <p className="text">还可以吧，挺好吃的</p>
                           <p className="time">2019-11-11 11：11:11</p>
                        </div>
                    </div>

                    <div className="comts_con">
                        <div className="comts_left"><img src={fruitinfo3} alt=""/></div>
                        <div className="comts_right">
                           <div className="rate"><Rate disabled defaultValue={4} /></div> 
                           <p className="text">还可以吧，挺好吃的</p>
                           <p className="time">2019-11-11 11：11:11</p>
                        </div>
                    </div>
                </div>
            </Comments>
        );
    }
}

export default Comment;