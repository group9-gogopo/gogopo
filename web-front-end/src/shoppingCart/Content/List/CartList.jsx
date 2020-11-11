import React, { Component } from 'react'
import {StyleCartList} from './StyleCartList'
export class CartList extends Component {

    handleAddClick = (id) => {
       return () => {
           this.props.handleAddClick(id)
        } 
    }
    handleReducerClick = (id) => {
        return () => {
            this.props.handleReducerClick(id)
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
                             this.props.dataList && this.props.dataList.map((value) => {
                                return(
                                    <li key={value.id}>
                                        <a className='check' 
                                        onClick={this.handSelectClick(value.id)}
                                        >
                                            <div className='correct' style={value.checked?{display:'block'}:{display:'none'}}></div>
                                        </a>
                                        <div className='pic'>
                                            <img src={value.image} alt=""/>
                                            <span>{value.name}</span>
                                        </div>
                                        <span>{value.price}</span>
                                        <div className='count'>
                                            <div className="count-content">
                                                <a className='decrement' onClick={this.handleReducerClick(value.id)}>-</a>
                                                <span>{value.count}</span>
                                                <a className='increment' onClick={this.handleAddClick(value.id)}>+</a>
                                            </div>
                                        </div>
                                        <em>{value.price*value.count}</em>
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
