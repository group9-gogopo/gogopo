import React, { Component } from 'react';
import {FruitInfor} from './StyleIndex'
import titleimg from '../../../asset/img/index/titleg.png'
import fruitinfo from '../../../asset/img/index/fruit_info1.png'
import fruitinfo2 from '../../../asset/img/index/fruit_info2.png'
import fruitinfo3 from '../../../asset/img/index/fruit_info3.png'
import fruitinfo4 from '../../../asset/img/index/fruit_info4.png'
import fruitinfo5 from '../../../asset/img/index/fruit_info5.png'
import fruitinfo6 from '../../../asset/img/index/fruit_info6.png'

class FruitsInfo extends Component {
    render() {
        return (
            <FruitInfor>
                <div className="title">
                    <img src={titleimg} alt=""/>
                    <p>国产水果</p>
                    <p>RECOMMENDED FRUIT</p>
                </div>
                <div className="contain">
                    <div className="info_left">
                        <img src={fruitinfo} alt=""/>
                    </div>
                    <div className="info_center">
                        <div><img src={fruitinfo2} alt=""/></div>
                        <div>
                            <dl>
                                <dt><img src={fruitinfo3} alt=""/></dt>
                                <dd>
                                    <p>¥46.90</p>
                                    <p>青皮蜜橘孕妇水果当季柑橘</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><img src={fruitinfo3} alt=""/></dt>
                                <dd>
                                    <p>¥110.00</p>
                                    <p>双苑  广西正宗砂糖橘 5斤装 </p>
                                </dd>
                            </dl>
                            <dl>
                                <dt><img src={fruitinfo4} alt=""/></dt>
                                <dd>
                                    <p>¥55.80</p>
                                    <p>新疆阿克苏冰糖心苹果</p>
                                </dd>
                            </dl>
                           
                        </div>
                    </div>
                    <div className="info_right">
                        <dl>
                            <dt><img src={fruitinfo6} alt=""/></dt>
                            <dd>
                                <p>¥1314.00</p>
                                <p>苹果山东烟台红富士当季</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt><img src={fruitinfo5} alt=""/></dt>
                            <dd>
                                <p>¥134.01</p>
                                <p>雪梨水果新鲜正宗雪花梨赵县整箱</p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </FruitInfor>
        );
    }
}

export default FruitsInfo;