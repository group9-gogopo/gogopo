import React, { Component } from 'react';
import {Introd, Title} from './StyleAbout'
import aboutbg from  '../../asset/img/about/AboutBg.png'
import weibo from '../../asset/img/about/weibo.png'
import weixin from '../../asset/img/about/weixin.png'
class Intro extends Component {
    render() {
        return (
            <Introd>
                <div className='intro'>
                    <div className='img'><img src={aboutbg} alt=""/></div>
                    <p className='title'>果果铺品牌简介</p>
                    <div className='addborder'></div>
                    <p className='info1'>     
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;郑州果果铺农业科技有限公司成立于2011年5月，经过短短三年发展，目前已经是河南省大的专注水果专卖店的企业之一，公司总部位于郑州市管城区港湾路未来路郑州果树研究所内。目前直营店面已在郑州市已达到11家，覆盖郑州各个大区，计划年底开到25家直营店面。
                    </p>
                    <p className='info2'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司合作的生产基地已覆盖洛阳偃师、山东省、广东省及深圳市。在多年的经营中，青青果园坚持秉承"让顾客放心"的经营理念，奉行"新鲜水果、健康水果"的经营宗旨，坚持"质优价廉、绿色生态"的经营路线，旨在构建涵盖果品种植基地、果品分拣中心、果品仓储物流中心、区域运营中心及区域连锁专卖店为一体的综合鲜果销售平台，锻造一个高效、高集成的"产、供、销"运营体系。              
                    </p>
                </div>

                <div className='intro story'>
                    <div className='img'><img src={aboutbg} alt=""/></div>
                    <p className='title'>果果铺品牌故事</p>
                    <div className='addborder'></div>
                    <p className='info1'>     
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们遵循自然法则，遵循植物的生长规律，让每个果自然成熟，不急不躁，耐心等待果品自然成熟。优质果品，不刻意追求珍稀品种，喜欢生态干净原产地。
                    <br/>
                一、市场上水果品质良莠不齐，选果不易，一个值得自然静待的果多半是好果;
                <br/>
                二、原产地农家自种，虽然原始，却能确保每一个果干净新鲜美味;
                <br/>
                三、仓储物流体系移居乡下，只为更近距离接触乡民，更好到农户果园收果，鲜摘现发                                      
                    </p>
                    <p className='info2'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 每一个果都是大自然的馈赠，上至专供苹果之洛川红富士、下至金太阳杏更是如此。自家农户的原始种植，其实比有机标准更用心。自家果园自己也吃，精心呵护，不轻易干扰每一颗果的成长，不使用任何农药和催熟剂，从开花到结果，静候每一个果吸足阳光、雨露、空气和水平，只为不辜负时间的等待。尊重时节，尊重原产地，尊重果的自然熟，一切顺其自然，只在合适的时机，鲜摘现发，用心打包，丝毫不敢怠慢地送至您手中。             
                    </p>
                </div>

                <div className='intro history'>
                    <div className='img'><img src={aboutbg} alt=""/></div>
                    <p className='title'>果果铺品牌故事</p>
                    <div className='addborder'></div>
                    <p className='info1'>     
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       2011年6月青青果园专业家连锁店金色港湾店正式成立，2012年11月青青果园在郑州万邦国际物流园正式成立果品物流中心，物流配送能力进一步提高。<br/>
2012年12月青青果园纬四路店正式成立。2012年12月青青果园农业路店正式成立。<br/>2013年1月青青果园兴化南街店正式成立。2013年6月青青果园建业路店正式成立。<br/>2013年7月青青果园理想城店正式成立。2013年10月青青果园三泉路店正式成立。2014年3月青青果园政七街店正式成立。2014年3月青青果园淮南街店正式成立。2014年3月青青果园祥盛街店正式成立。2014年4月青青果园政通路店正式成立。<br/>2014年3月青青果园电商部门启动，涵盖B2C、O2O方向                                      
                    </p>
                </div>

                
                <div className="connect">
                    <Title>
                        联系我们
                    </Title>
                    <div className='connect_info'>
                        <div className='weibo'>
                            <p>官方微博</p>
                            <p><img src={weibo} alt=""/></p>
                        </div>
                        <div className='weixin'>
                            <p>官方微信</p>
                            <p><img src={weixin} alt=""/></p>
                        </div>
                    </div>
                </div>

                <div className="connect_email">
                    <Title>
                        联系邮箱
                    </Title>
                    <p>
                        APP商务合作  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******************.com     
                    </p>
                    <p>
                    企业团购     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;guoguopu@*******.com
                    </p>   
                </div>

                <div className="connect_client">
                    <Title>
                        联系客服
                    </Title>
                    <p>
                    客服热线   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                    123456789
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                  123456789
                    </p>
                    <p>
                    企业总机     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                  123456789
                    </p>
                    <p>
                    团购热线        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                               000000000
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                               000000000
                                                                                 </p>
                    <p>
                    果果铺APP及官网客服专线     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             123456789    
                    </p>
                </div>

                

            </Introd>
        );
    }
}

export default Intro;