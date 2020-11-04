import React,{ Component } from 'react';
import {DetailStyled} from './DetailStyled'

class Detail extends Component{
    render(){
        return(
            <DetailStyled>
                    <div>
                        <p>哪些水果搭配榨汁好？</p>
                    </div>
                    <div className='imagebox'>
                        <div>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div><p></p></div>
                </DetailStyled>
        )
    }
}

export default Detail