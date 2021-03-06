import React, { Component } from "react";
import { CoInfo } from "./StyledComment";

import { Rate } from "antd";
import { patch } from "@u/http"
import { withRouter } from "react-router-dom";

@withRouter
class CommentInfo extends Component {
  state = {
    value: "",
    starA: 0,
    starS: 0,
    starD: 0,
  };

  handlerChangeA = (value) => {
    this.setState({
      starA: value,
    });
  };
  handlerChangeS = (value) => {
    this.setState({
      starS: value,
    });
  };
  handlerChangeD = (value) => {
    this.setState({
      starD: value,
    });
  };
  handlerTarea = (e) => {
    //value的值一变，render函数重新渲染
    this.setState({
      value: e.target.value,
    });
  };
  handlerClick = async() => {
      
      let arr =[this.state.starA,this.state.starS,this.state.starD,this.state.value];
        let valut=await patch("/api/changeorder",{
            id:this.props.id,
            evaluateContent:encodeURIComponent(JSON.stringify(arr))
        })
        if(!valut.changeOrder.ret) return alert("评价失败")
        this.props.history.push("allOrder")
        console.log(valut);
  };
  render() {
      let comValue;
      if(this.props.commentValue){
         comValue=JSON.parse(decodeURIComponent(this.props.commentValue))
      }
    return (
      <CoInfo>
        {this.props.commentValue ? (
          <>
            <div className="coleft">
              <p>下单时间：{this.props.time}</p>
              <p>
                <img src={this.props.img} alt="" />
              </p>

              <div className="rate">
                <h2>店铺动态评分</h2>
                <div className="attitude">
                  卖家服务态度 &nbsp;&nbsp;&nbsp;
                  <Rate
                    allowHalf
                    defaultValue={comValue[0]}
                    onChange={this.handlerChangeA}
                  />
                </div>
                <div className="speed">
                  卖家发货速度 &nbsp;&nbsp;&nbsp;
                  <Rate
                    allowHalf
                    defaultValue={comValue[1]}
                    onChange={this.handlerChangeS}
                  />
                </div>
              </div>
            </div>

            <div className="coright">
              <h3>宝贝与描述相符。（打分匿名）</h3>
              <div className="coright_star1">
                <Rate
                  allowHalf
                  defaultValue={comValue[2]}
                  onChange={this.handlerChangeD}
                />
              </div>
              <textarea
                name=""
                id=""
                cols="100"
                rows="13"
                placeholder="还可以输入500字"
                onChange={this.handlerTarea}
                value={comValue[3]}
              ></textarea>

              <div className="tip">
                <p>小提示：点击星星就能打分了，该评分完全是匿名的</p>
                <div className="coright_star2">
                  <Rate disabled defaultValue={4} />
                </div>
              </div>
            </div>
            <div className="comment" onClick={this.handlerClick}>
              重新评论
            </div>
          </>
        ) : (
          <>
            <div className="coleft">
              <p>下单时间：{this.props.time}</p>
              <p>
                <img src={this.props.img} alt="" />
              </p>

              <div className="rate">
                <h2>店铺动态评分</h2>
                <div className="attitude">
                  卖家服务态度 &nbsp;&nbsp;&nbsp;
                  <Rate
                    allowHalf
                    defaultValue={0}
                    onChange={this.handlerChangeA}
                  />
                </div>
                <div className="speed">
                  卖家发货速度 &nbsp;&nbsp;&nbsp;
                  <Rate
                    allowHalf
                    defaultValue={0}
                    onChange={this.handlerChangeS}
                  />
                </div>
              </div>
            </div>

            <div className="coright">
              <h3>宝贝与描述相符。（打分匿名）</h3>
              <div className="coright_star1">
                <Rate
                  allowHalf
                  defaultValue={0}
                  onChange={this.handlerChangeD}
                />
              </div>
              <textarea
                name=""
                id=""
                cols="100"
                rows="13"
                placeholder="还可以输入500字"
                onChange={this.handlerTarea}
                value={this.state.value}
              ></textarea>

              <div className="tip">
                <p>小提示：点击星星就能打分了，该评分完全是匿名的</p>
                <div className="coright_star2">
                  <Rate disabled defaultValue={4} />
                </div>
              </div>
            </div>
            <div className="comment" onClick={this.handlerClick}>
              评论
            </div>
          </>
        )}
      </CoInfo>
    );
  }
}

export default CommentInfo;
