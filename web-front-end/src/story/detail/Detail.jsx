import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import {DetailStyled} from './DetailStyled'

@withRouter
class Detail extends Component{
    render(){
        return(
            <DetailStyled>
                    <div>
                        <p>哪些水果搭配榨汁好？</p>
                    </div>
                    <div className='imagebox'>
                        <div>
                            <img src={this.props.history.location.state.msg.storyImages[0]} alt=""/>
                            <img src={this.props.history.location.state.msg.storyImages[2]} alt=""/>
                            <img src={this.props.history.location.state.msg.storyImages[3]} alt=""/>
                        </div>
                        <div>
                            <img src={this.props.history.location.state.msg.storyImages[4]} alt=""/>
                            <img src={this.props.history.location.state.msg.storyImages[5]} alt=""/>
                            <img src={this.props.history.location.state.msg.storyImages[6]} alt=""/>
                        </div>
                    </div>
                    <div><p>{this.props.history.location.state.msg.storyText}</p></div>
                </DetailStyled>
        )
    }
}

export default Detail