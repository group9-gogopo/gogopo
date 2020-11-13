import React, { Component } from 'react';
import { Carousel } from 'element-react';

import {ShowInfor} from'./StyleIndex'
import icon1 from '../../../asset/img/index/icon_info1.png'
import icon2 from '../../../asset/img/index/icon_info2.png'
import icon3 from '../../../asset/img/index/icon_info3.png'
import icon4 from '../../../asset/img/index/icon_info4.png'
import bgimg from '../../../asset/img/index/backg.png'
import titleimg from '../../../asset/img/index/titleg.png'
import showfruit from '../../../asset/img/index/show_fruit.png'
import mg from '../../../asset/img/index/mg.png'



class ShowInfo extends Component {
    state={
        imgList:[
            mg,
            mg,
            mg,
            mg
        ]
    }

    handleAddNum = (num)=>{
        return ()=>{
            this.props.addNum(num)
        }
        
    }
    render() {
        let str=(item,index)=>{
            if(index===0){
                return (
                <h3>
                    <div className="name">
                                海南小台农芒果
                        <p className="name_info">海南小台农芒果 1.5kg装 单果50g以上 新鲜水果 </p>
                        <p className='price'>¥69.90</p>
                        <span onClick={this.handleAddNum(this.props.num)}>立即抢购</span>
                    </div>
                    <img src={item} alt=""/>
                </h3>
                )
            }
            if(index===1){
                return (
                    <h3>
                    <p className="name">蔬菜</p>
                    <img src={item} alt=""/>
                </h3>
                )
            }
            if(index===2){
                return (
                    <h3>
                    <p className="name">蔬菜</p>
                    <img src={item} alt=""/>
                </h3>
                )
            }
            if(index===3){
                return (
                    <h3>
                    <p className="name">蔬菜</p>
                    <img src={item} alt=""/>
                </h3>
                )
            }
            
        }
        return (
            <ShowInfor>
                <div className="info_top">
                    <dl>
                        <dt><img src={icon1} alt=""/></dt>
                        <dd>食品安全</dd>
                    </dl>
                    <dl>
                        <dt><img src={icon2} alt=""/></dt>
                        <dd>全程冷链</dd>
                    </dl>
                    <dl>
                        <dt><img src={icon3} alt=""/></dt>
                        <dd>鲜活天然</dd>
                    </dl>
                    <dl>
                        <dt><img src={icon4} alt=""/></dt>
                        <dd>产地直采</dd>
                    </dl>

                </div>
                <div className='show_fruits'>
                    <div className="bg_img">
                        <img src={bgimg} alt=""/>
                        <img src={titleimg} alt=""/>
                        <img src={showfruit} alt=""/>
                        <div className='show_title'>
                            <p>特色购</p>
                            <p>FEATURED FRESH</p>
                            <div className="demo-4 medium">
                                <Carousel interval="4000" type="card" height="466px">
                                    {
                                   this.state.imgList.map((item, index) => {
                                        return (
                                        <Carousel.Item key={index}>
                                            
                                                {str(item,index)}
                                            
                                    
                                        </Carousel.Item>
                                        )
                                    })
                                    }
                                </Carousel>
                                </div>

                        </div>
                    </div>

                </div>
            </ShowInfor>
        );
    }
}

export default ShowInfo;