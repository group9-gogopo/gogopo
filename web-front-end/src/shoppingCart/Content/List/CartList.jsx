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
    render() {
        return (
                <StyleCartList>
                    <ul>
                        {
                             this.props.dataList.map((value) => {
                                return(
                                    <li key={value.id}>
                                        <a className='check'>
                                            <input type="checkbox" name="mychoice" id="a" value='ch' />
                                            <label htmlFor="a"> </label>
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
