import React, { Component } from 'react';
import { CoInfo } from './StyledComment'

import { Rate } from 'antd';

class CommentInfo extends Component {
    render() {
        return (
            <CoInfo>
                 <div className="coleft">
                      <p>下单时间：2020-11-7</p>
                      <p><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604729539404&di=f4c2e28742d6e4ec2deacfa33d99d079&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F003cb3327dcd1ccf2947ddd658b9fd1d5c8b30873bc86-VMu1lS_fw658" alt=""/></p>

                      <div className='rate'>
                          <h2>店铺动态评分</h2>
                          <p>卖家服务态度 &nbsp;&nbsp;&nbsp;<Rate allowHalf defaultValue={0} /></p>
                          <p>卖家发货速度 &nbsp;&nbsp;&nbsp;<Rate allowHalf defaultValue={0} /></p>
                     </div>
                  </div>

                <div className="coright">
                    <h3>宝贝与描述相符。（打分匿名）</h3>
                    <p><Rate allowHalf defaultValue={0} /></p>
                    <textarea name="" id="" cols="100" rows="13" placeholder="还可以输入500字"></textarea>

                    <div className="tip">
                        <p>小提示：点击星星就能打分了，该评分完全是匿名的</p>
                        <p><Rate disabled defaultValue={4} /></p>
                    </div>
                </div>
                <div className='comment'>评论</div>
            </CoInfo>
        );
    }
}

export default CommentInfo;