import React from 'react'
import { Component } from 'react';
import image1 from '../images/image1.png'
// import image2 from '../images/image2.png'
// import image3 from '../images/image3.png'
import {RecommendationStyled} from './recommendationStyled'

const Recommendation =(props)=>{
        return (
            <RecommendationStyled>
                <p>进口水果</p>
                <ul>
                    {
                        props.recommendList.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <div onClick={props.handleToDetail(item.proId)}>
                                        <a>
                                            <img src={item.proImage} alt=""/>
                                        </a>
                                    </div>
                                    <div className='price'>
                                        <span>{item.proPrice}</span>元
                                    </div>
                                    <div onClick={props.handleToDetail(item.proId)}><a>{item.proName}</a></div>
                                </li>
                            )
                        })
                    }
                </ul>
            </RecommendationStyled>
        )
    }


export default Recommendation;