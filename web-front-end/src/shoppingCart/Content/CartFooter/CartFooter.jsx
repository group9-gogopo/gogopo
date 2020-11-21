import React, { Component } from 'react'
import { StyleCartFooter } from './StyleCartFooter'
import { connect } from 'react-redux';
import { noAllSelect,allSelect } from "../../actionCreators"
import { withRouter } from 'react-router-dom';

@withRouter
@connect(
    (state) => {
      return {
        list: state.shoppingCart.list,
        selectList:state.shoppingCart.selectList
      };
    },
    dispatch=>({
        noAllSelect(){
            dispatch(noAllSelect())
        },
        allSelect(list){
            dispatch(allSelect(list))
        }
    })
  )
 class CartFooter extends Component {
    constructor(props){
        super(props)
        this.state = {
            optxt:false,
            tolPrice:0
        }
    }
  get computed() {
        let arr=[]
        this.props.selectList.forEach(ele=>{
            let i=this.props.list.filter(item=>{
                return item.id===ele
            })
            arr.push(i[0])
        })
        let allPrice=arr.reduce((value,item)=>{
            return value+item.shoppingCartNum*item.shoppingCartPrice
        },0)
        return allPrice
      } 
      handlerCommit=()=>{
          if(this.props.selectList.length<1)return alert("亲，至少选择一件商品哦~")
        let countArr=[]
        this.props.selectList.forEach(ele=>{
            let i=this.props.list.filter(item=>{
                return item.id===ele
            })
            countArr.push(i[0])
        })
        let allPrice=countArr.reduce((value,item)=>{
            return value+item.shoppingCartNum*item.shoppingCartPrice
        },0)
        this.props.history.push( "/clearAccount",  { data:countArr,allPrice} )
      }
    handleAllClick=()=>{
        return()=>{
            if(this.props.selectList.length!==this.props.list.length){
                let selectList=[]
                this.props.list.forEach(ele => {
                    selectList.push(ele.id)
                });
                this.props.allSelect(selectList)
            }else{
                this.props.noAllSelect()
            }
           
            }
    }

    render() {
        let userid=sessionStorage.getItem("userId")
        if(!userid)this.props.history.push("login")
        return (
            <StyleCartFooter>
                <div>
                    <a onClick={this.handleAllClick()}>
                        {this.props.selectList.length===this.props.list.length?<div className='correct' ></div>:""}
                    </a>
                    <span>全选</span>
                </div>
                <span>已经选择<span>{this.props.selectList.length}</span>件商品</span>
                <i>总价: ￥<span>{this.computed}</span></i>
                <div onClick={this.handlerCommit} >结算({this.props.selectList.length})</div>
            </StyleCartFooter>
        )
    }
}

export default CartFooter
