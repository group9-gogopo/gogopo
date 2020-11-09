import React, { Component } from 'react';
import {StyledDetailBottom} from "./StyledDetailBottom"

class DetaliBottom extends Component {
    render() {
        return (
            <StyledDetailBottom>
                <h4 className="productText">产品说明</h4>
                <div className="goodsImgFirst">
                    <img src="https://img30.360buyimg.com/sku/jfs/t1/118921/5/7311/446800/5ec26931E25b41a10/b350c89ecb6ed598.jpg?mryxw=750&mryxh=1034" alt=""/>
                </div>
                <div className="detailGoods"></div>
                <div className="detailImgs">
                    <img src="https://img30.360buyimg.com/sku/jfs/t1/113845/8/7292/828340/5ec26931E06197fa2/697144fe957e1c2c.jpg?mryxw=750&mryxh=1631" alt=""/>
                </div>
            </StyledDetailBottom>
        );
    }
}

export default DetaliBottom;