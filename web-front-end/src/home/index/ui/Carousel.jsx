import React, { Component } from 'react';
import './StyleIndex'
import { Carousel } from 'antd';
import img from '../../../asset/img/index/banner.png'

const contentStyle = {
    height: '900px',
    color: '#fff',
    lineHeight: '900px',
    textAlign: 'center',
    background: '#F0F0F8'

  };

class carousel extends Component {
        render() {
        return(  
    <Carousel autoplay>
        <div>
        <h3 style={contentStyle}><img src={img} alt="" /></h3>
        </div>
        <div>
        <h3 style={contentStyle}><img src={img} alt=""/></h3>
        </div>
        <div>
        <h3 style={contentStyle}><img src={img} alt=""/></h3>
        </div>
        <div>
        <h3 style={contentStyle}><img src={img} alt=""/></h3>
        </div>
    </Carousel>)
        }
}

export default carousel;