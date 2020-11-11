import React, { Component } from "react";
import {StyledDetailLeft} from "./StyledDetailLeft";

class GoodsDetailLeft extends Component {
  render() {
    return (
      <StyledDetailLeft>
        <p>所有果果</p>
        <ul>
              <li className="active">国产水果</li>
              <li>进口水果</li>
              <li>水果饮品</li>
              <li>过肉制品</li>
              <li>礼盒包装</li>
        </ul>
      </StyledDetailLeft>
    );
  }
}

export default GoodsDetailLeft;
