import React, { Component } from 'react'
import { StyleCartFooter } from './StyleCartFooter'
import PropTypes  from 'prop-types'



 class CartFooter extends Component {
    constructor(props){
        super(props)
        this.state = {
            optxt:false,
            tolPrice:0
        }
    }
    
    static propTypes = {
        data: PropTypes.array
    }
    
    selectAllShop(){
        if(this.state.optxt === true) {
          this.props.selectStatus('SELECTED_S');
          this.setState({
            optxt:false
          });
        }else {
          this.props.selectStatus('CANCEL_S');
          this.setState({
            optxt:true
          });
        }
      }
    handleAllClick(){
        return()=>{
            this.selectAllShop();
            console.log(this.state.optxt,this.props);
            }
    }

    render() {
        return (
            <StyleCartFooter>
                <div>
                    <a onClick={this.handleAllClick()}>
                        <div 
                            className='correct' 
                            style={this.state.optxt?{display:'block'}:{display:'none'}}
                        ></div>
                    </a>
                    <span>全选</span>
                </div>
                <span>已经选择<span>{this.props.totalNum}</span>件商品</span>
                <i>总价: ￥<span>{this.state.tolPrice}</span></i>
                <div >结算(1)</div>
            </StyleCartFooter>
        )
    }
}

export default CartFooter
