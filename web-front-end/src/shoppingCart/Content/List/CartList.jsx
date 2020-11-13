import React, { Component } from 'react'
import { connect } from 'react-redux'
import {StyleCartList} from './StyleCartList'

@connect(
    (state) => {
      return {
        selectList:state.shoppingCart.selectList
      };
    }
  )
class CartList extends Component {

    handleAddClick = (id,num,userid) => {
       return () => {
           this.props.handleAddClick(id,num,userid)
        } 
    }
    handleDescClick = (id,num,userid) => {
        return () => {
            this.props.handleDescClick(id,num,userid)
         } 
     }
    handleDelete = (id) => {
        return () => {
            this.props.handleDelete(id)
        }
    }
    handSelectClick = (id) => {
        return () => {
            this.props.handSelectClick(id)
        }
    }
    render() {
        return (
                <StyleCartList>
                    <ul>
                        {
                             this.props.dataList  && this.props.dataList.map((value) => {
                                return(
                                    <li key={value.id}>
                                        <a className='check' 
                                        onClick={this.handSelectClick(value.id)}
                                        >
                                            {this.props.selectList.indexOf(value.id)>-1?(<div className='correct'></div>):""}
                                           
                                        </a>
                                        <div className='pic'>
                                            <img src={value.shoppingCartImage} alt=""/>
                                            <span>{value.shoppingCartName}</span>
                                        </div>
                                        <span>{value.shoppingCartPrice}</span>
                                        <div className='count'>
                                            <div className="count-content">
                                                <a className='decrement' onClick={this.handleDescClick(value.id,value.shoppingCartNum,value.userid)}>-</a>
                                                <span>{value.shoppingCartNum}</span>
                                                <a className='increment' onClick={this.handleAddClick(value.id,value.shoppingCartNum,value.userid)}>+</a>
                                            </div>
                                        </div>
                                        <em>{value.shoppingCartPrice*value.shoppingCartNum}</em>
                                        <a className='delete' onClick={this.handleDelete(value.id)}>删除</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </StyleCartList>
        )
    }

}

export default CartList
