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
        <h3 style={contentStyle}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605176607091&di=56ab034126da657f321274fa3186b095&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F58798cfb49f85.jpg" alt=""/></h3>
        </div>
        <div>
        <h3 style={contentStyle}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605176607083&di=59c5b9ca4dd90ad2acabd3c51334ec1a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F56de2cacab630.jpg" alt=""/></h3>
        </div>
        <div>
        <h3 style={contentStyle}><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605176697798&di=ba434ac3c2486b936afd6c27dbab52a7&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fb%2F5672715f15518.jpg" alt=""/></h3>
        </div>
    </Carousel>)
        }
}

export default carousel;