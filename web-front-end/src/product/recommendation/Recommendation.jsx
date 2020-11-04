import React from 'react'
import { Component } from 'react';
import image1 from '../images/image1.png'
// import image2 from '../images/image2.png'
// import image3 from '../images/image3.png'
import {RecommendationStyled} from './recommendationStyled'

class Recommendation extends Component{
    render(){
        return (
            <RecommendationStyled>
                <p>进口水果</p>
                <ul>
                    <li>
                        <div>
                            <img src={image1} alt=""/>
                        </div>
                        <div className='price'>
                            <span>198</span>元
                        </div>
                        <div>泰国金枕头榴莲1个装(五斤左右)</div>
                    </li>
                    <li>
                        <div>
                            <img src={image1} alt=""/>
                        </div>
                        <div className='price'>
                            <span>198</span>元
                            
                        </div>
                        <div>泰国金枕头榴莲1个装(五斤左右)</div>
                    </li>
                    <li>
                        <div>
                            <img src={image1} alt=""/>
                        </div>
                        <div className='price'>
                            <span>198</span>元
                            
                        </div>
                        <div>泰国金枕头榴莲1个装(五斤左右)</div>
                    </li>
                    <li>
                        <div>
                            <img src={image1} alt=""/>
                        </div>
                        <div className='price'>
                            <span>198</span>元
                            
                        </div>
                        <div>泰国金枕头榴莲1个装(五斤左右)</div>
                    </li>  
                </ul>
            </RecommendationStyled>
        )
    }
}

export default Recommendation;